"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

interface UploadFileResponse {
  success: boolean;
  message?: string;
}

export async function uploadFileAction(
  image: string,
): Promise<UploadFileResponse> {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return {
        success: false,
        message: "Unauthorized. User session not found.",
      };
    }

    if (!image) {
      return { success: false, message: "Invalid input. Image is required." };
    }
    await db.thumbnail.create({
      data: {
        image,
        userId: user.id,
      },
    });

    return { success: true, message: "File uploaded successfully." };
  } catch (error) {
    console.error("Error in uploadFileAction:", error);

    return {
      success: false,
      message: "An unexpected error occurred while uploading the file.",
    };
  }
}
