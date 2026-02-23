// lib/Utils/imageUtils.ts
import { storage } from '../Utils/appwrite';

export const getAppwriteImageUrl = (imageValue: any, width = 400, height = 400): string => {
  if (!imageValue) return '';
  
  // Function to extract file ID from Appwrite URL
  const extractFileId = (url: string): string | null => {
    try {
      // Match patterns for Appwrite file URLs
      const patterns = [
        /\/files\/([a-zA-Z0-9]+)/,           // /files/FILE_ID
        /files%2F([a-zA-Z0-9]+)/,             // URL encoded: files%2FFILE_ID
        /\/buckets\/[^\/]+\/files\/([^\/\?]+)/ // Full storage path
      ];
      
      for (const pattern of patterns) {
        const matches = url.match(pattern);
        if (matches && matches[1]) {
          return matches[1];
        }
      }
      return null;
    } catch {
      return null;
    }
  };

  try {
    let fileId: string;
    
    if (typeof imageValue === 'string') {
      if (imageValue.includes('appwrite.io') || imageValue.includes('http')) {
        // It's a URL, extract the file ID
        const extracted = extractFileId(imageValue);
        if (!extracted) {
          console.error('Could not extract file ID from:', imageValue);
          return '';
        }
        fileId = extracted;
      } else {
        // Assume it's already a file ID
        fileId = imageValue;
      }
      
      // Generate clean preview URL
      const previewUrl = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
        fileId,
        width,
        height,
      );
      
      return previewUrl.toString();
    }
    
    return '';
  } catch (error) {
    console.error('Error generating image URL:', error);
    return '';
  }
};