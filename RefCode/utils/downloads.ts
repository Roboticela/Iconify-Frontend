// Download configuration with dynamic version and checksum support

export const APP_VERSION = '1.0.0';
export const GITHUB_REPO = 'Roboticela/Restaurant-Management-System';
export const GITHUB_BASE_URL = `https://github.com/${GITHUB_REPO}/releases/download/v${APP_VERSION}`;
export const GITHUB_LATEST_URL = `https://github.com/${GITHUB_REPO}/releases/latest/download`;

export interface DownloadFileConfig {
  format: string;
  arch?: string;
  label?: string;
  formatPrefix?: string;
  platformSuffix?: string;
  checksum?: {
    sha256?: string;
    sha512?: string;
  };
}

export interface PlatformConfig {
  platform: string;
  files: DownloadFileConfig[];
}

// Checksums mapping - can be fetched dynamically or updated manually
export const CHECKSUMS: Record<string, { sha256?: string; sha512?: string }> = {
  // Windows
  'restaurant-management-system-windows-x64-1.0.0.exe': {
    sha256: 'd745d84712936aca406617da719b812d71eae332ebe56695a6987ec8dd9e5c04'
  },
  'restaurant-management-system-windows-x64-msi-1.0.0.msi': {
    sha256: 'afeca9a7c4a3a9a495e485c62d014ada90efa6131f817b3465e1ddf02eaa54c8'
  },
  'restaurant-management-system-windows-aarch64-1.0.0.exe': {
    sha256: '8331d335288f932193cbcb5454da0ad8b96957d331b9c5aca614a8c416da9060'
  },
  'restaurant-management-system-windows-i686-1.0.0.exe': {
    sha256: '74217286f41a16f4c89360da21046d340d06f696abc6082e8c681c5d4bc00e87'
  },
  // Linux
  'restaurant-management-system-linux-x64-appimage-1.0.0.AppImage': {
    sha256: '88ee56668043c5be6e4e15c41258e750add048f9a67d303177334fd75e57f998'
  },
  'restaurant-management-system-linux-x64-deb-1.0.0.deb': {
    sha256: '1d2a53e72707690d8d1a11d4ad931c3bee35b1cb0457055b1d6750a66092617c'
  },
  'restaurant-management-system-linux-x64-rpm-1.0.0.rpm': {
    sha256: '8cd426af05fa8feb29378ffd0eacb43d20d8c3b1fa9472731b3305f167314505'
  },
  // macOS
  'restaurant-management-system-macos-universal-1.0.0.dmg': {
    sha256: 'dbb75aaf2aeb670423cfab4d603c324ff58fc9578ceee39866b2815fb091a612'
  },
  'restaurant-management-system-macos-arm64-1.0.0.dmg': {
    sha256: '151f01002af3fa68c08e6b05e6b97c93ae5401dfdf9b953214dda6ae8e0ff9d0'
  },
  'restaurant-management-system-macos-x64-1.0.0.dmg': {
    sha256: '84c236528180f59d15952beb73326a55681a45e3b309460c769f6ec0075042aa'
  },
  'restaurant-management-system-macos-arm64-app-1.0.0.gz': {
    sha256: '501d38f49f1ee3a6075740ae7d39e6aa54e67d1129715fb4e0457cc146b79cfb'
  },
  'restaurant-management-system-macos-x64-app-1.0.0.gz': {
    sha256: 'e763ff7a29dd46f41379a92bd266cdffa705a76494f7422d7b22e9acb4982e8b'
  },
  // Android
  'restaurant-management-system-android-aarch64-1.0.0.apk': {
    sha256: '68a9dadbc57ecee4593ccf59454ac5f479959cf43ce18931e3ac9a6fd13c0a0d'
  },
  'restaurant-management-system-android-armv7-1.0.0.apk': {
    sha256: 'ef431d4f6a1041771149ec24eee07721232e6dd8795c358aa921ddb979dbe980'
  },
  'restaurant-management-system-android-i686-1.0.0.apk': {
    sha256: '5dfb541fbbd7a4a9f275cf7e854cfd2b7be93ec22273ac1b7796b825643e9372'
  },
  'restaurant-management-system-android-x86_64-1.0.0.apk': {
    sha256: '034a65a22546bf07c34d452a39674d8ed8f5168d54b7bc0c588d0673cc84393c'
  },
  // iOS Simulator
  'restaurant-management-system-ios-simulator-aarch64-1.0.0.zip': {
    sha256: '7d4f5169c46bc673dbbb027a01ed8610b5f39634a5bab299e8f0df013be1fdf8'
  },
  'restaurant-management-system-ios-simulator-x86_64-1.0.0.zip': {
    sha256: 'bccfbdad44536400a65f25fb4eb0eefa75781fa82037d71467f8a1704989c50e'
  }
};

/**
 * Generate download URL for a file
 * Handles special naming conventions for different platforms
 */
export function getDownloadUrl(
  platform: string,
  arch: string,
  format: string,
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  // Handle platform-specific suffixes (e.g., "ios-simulator")
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  // Add architecture
  fileName += `-${arch}`;
  
  // Handle format prefixes (e.g., "msi", "appimage", "deb", "rpm", "app")
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  // Add version and format
  fileName += `-${version}.${format}`;
  
  return `${GITHUB_BASE_URL}/${fileName}`;
}

/**
 * Get checksum URL for a file
 */
export function getChecksumUrl(
  platform: string,
  arch: string,
  format: string,
  checksumType: 'sha256' | 'sha512',
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}.${checksumType}`;
  
  return `${GITHUB_BASE_URL}/${fileName}`;
}

/**
 * Get checksum file name
 */
export function getChecksumFileName(
  platform: string,
  arch: string,
  format: string,
  checksumType: 'sha256' | 'sha512',
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}.${checksumType}`;
  
  return fileName;
}

/**
 * Get full file name
 */
export function getFileName(
  platform: string,
  arch: string,
  format: string,
  version: string = APP_VERSION,
  options?: { formatPrefix?: string; platformSuffix?: string }
): string {
  let fileName = `restaurant-management-system-${platform}`;
  
  if (options?.platformSuffix) {
    fileName += `-${options.platformSuffix}`;
  }
  
  fileName += `-${arch}`;
  
  if (options?.formatPrefix) {
    fileName += `-${options.formatPrefix}`;
  }
  
  fileName += `-${version}.${format}`;
  
  return fileName;
}

/**
 * Get checksum from local mapping
 */
export function getChecksum(fileName: string, type: 'sha256' | 'sha512'): string | undefined {
  return CHECKSUMS[fileName]?.[type];
}

