"use client";

import {Client , TablesDB ,Storage} from 'appwrite';

export const appwriteClient = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)



  export  const DB = new TablesDB(appwriteClient);
export const storage = new Storage(appwriteClient);


 storage.getFilePreview({
    bucketId: 'photos',
    fileId: 'sunset.png',
    width: 1800,
    height: 1200,
    borderWidth: 5,
    borderColor: 'CDCA30',
    borderRadius: 15,
    background: 'FFFFFF'
});




