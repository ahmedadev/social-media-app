import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// قراءة متغيرات البيئة
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const endpoint = import.meta.env.VITE_APPWRITE_URL;

console.log("AppwriteConfig.projectId:", projectId);
console.log("AppwriteConfig.url:", endpoint);

if (!projectId || !endpoint) {
  throw new Error(
    "Missing Appwrite configuration. Please check your environment variables.",
  );
}

const client = new Client();
client.setProject(projectId).setEndpoint(endpoint);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
