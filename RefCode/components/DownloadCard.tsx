'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { itemAnimation } from './animations';
import {
  getDownloadUrl,
  getChecksumUrl,
  type DownloadFileConfig
} from '../utils/downloads';

interface DownloadFile extends DownloadFileConfig {
  store?: string;
  label?: string;
  platform?: string;
}

interface DownloadCardProps {
  platform: string;
  platformKey: string;
  icon: IconType;
  files: DownloadFile[];
  color: string;
  version: string;
}

export default function DownloadCard({
  platform,
  platformKey,
  icon: Icon,
  files,
  color,
  version
}: DownloadCardProps) {
  const getFileDownloadUrl = (file: DownloadFile) => {
    // If it's a store link, return the store URL
    if (file.store) {
      if (file.store === 'App Store') {
        return 'https://apps.apple.com/app/restaurant-management-system';
      } else if (file.store === 'Play Store') {
        return 'https://play.google.com/store/apps/details?id=com.roboticela.restaurantmanagement';
      }
    }
    
    // If custom URL is provided, use it
    if ((file as any).url) {
      return (file as any).url;
    }
    
    // Generate dynamic URL based on platform, arch, format, and version
    if (file.format && file.arch) {
      const platformForUrl = file.platform || platformKey;
      return getDownloadUrl(platformForUrl, file.arch, file.format, version, {
        formatPrefix: file.formatPrefix,
        platformSuffix: file.platformSuffix
      });
    }
    
    return '#';
  };

  const getFileLabel = (file: DownloadFile) => {
    if (file.store) {
      return file.store;
    }
    if (file.label) {
      return file.label;
    }
    if (file.format) {
      return `.${file.format}`;
    }
    return 'Download';
  };

  const getChecksumLinks = (file: DownloadFile) => {
    if (file.store || !file.format || !file.arch) {
      return null;
    }
    
    const platformForUrl = file.platform || platformKey;
    const options = {
      formatPrefix: file.formatPrefix,
      platformSuffix: file.platformSuffix
    };
    const sha256Url = getChecksumUrl(platformForUrl, file.arch, file.format, 'sha256', version, options);
    const sha512Url = getChecksumUrl(platformForUrl, file.arch, file.format, 'sha512', version, options);
    
    return { sha256Url, sha512Url };
  };

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, downloadUrl: string) => {
    // For store links, allow normal navigation
    if (downloadUrl.includes('apps.apple.com') || downloadUrl.includes('play.google.com')) {
      return; // Allow normal link behavior for store links
    }

    // Allow middle-click, Ctrl+Click, Cmd+Click, and right-click to work normally
    // (user might want to open in new tab intentionally)
    if (e.ctrlKey || e.metaKey || e.button === 1 || e.button === 2) {
      return; // Allow default behavior for modifier keys and right/middle click
    }

    e.preventDefault();
    
    // Use iframe method to trigger download without navigating
    // This works well for GitHub releases and other direct file downloads
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.src = downloadUrl;
    document.body.appendChild(iframe);
    
    // Remove iframe after download starts (delay ensures download initiates)
    setTimeout(() => {
      try {
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      } catch (err) {
        // Iframe might already be removed, ignore error
      }
    }, 2000);
  };

  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -5 }}
      className={`bg-linear-to-br ${color} text-white rounded-2xl p-8 text-center transition-all duration-300`}
    >
      <Icon className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-6">{platform}</h3>
      <div className="space-y-3">
        {files.map((file, fileIndex) => {
          const downloadUrl = getFileDownloadUrl(file);
          const fileLabel = getFileLabel(file);
          const checksumLinks = getChecksumLinks(file);
          
          return (
            <div key={fileIndex} className="space-y-2">
              <motion.a
                href={downloadUrl}
                onClick={(e) => handleDownload(e, downloadUrl)}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaDownload className="text-lg" />
                <span className="text-sm md:text-base">{fileLabel}</span>
              </motion.a>
              {checksumLinks && (
                <div className="flex gap-2 justify-center text-xs">
                  <a
                    href={checksumLinks.sha256Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white/90 underline"
                    title="SHA256 Checksum"
                  >
                    SHA256
                  </a>
                  <span className="text-white/50">|</span>
                  <a
                    href={checksumLinks.sha512Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white/90 underline"
                    title="SHA512 Checksum"
                  >
                    SHA512
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

