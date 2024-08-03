import { INewUser } from "@/types";
import { account, appWriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";


export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(user.name)
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,
      username:user.username,
      imageurl:avatarUrl
    })
    return newUser;
  } catch (error) {
    console.log("Error creating account:", error);
    return error;
  }
}
export async function saveUserToDB(user: {
  accountId: string,
  email: string,
  name: string,
  imageurl: URL,
  username?:string,
}) {
  try {
    const newUser = databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      ID.unique(),
      user
    )
  } catch (error) {
    console.log(error)
  }
}