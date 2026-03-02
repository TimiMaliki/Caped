

import {Client , TablesDB  , Databases} from 'appwrite';

export const appwriteClient = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)



  export  const DB = new TablesDB(appwriteClient);
  export const DatabasesDB = new Databases(appwriteClient);







