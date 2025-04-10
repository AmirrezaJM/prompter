"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Prisma } from "@/generated/prisma";
import { Mood } from "@/generated/prisma";
const promptSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  mood: z.enum(["CHILL", "HAPPY", "SAD", "STUDENT"], {
    errorMap: () => ({
      message: "Mood must be one of: CHILL, HAPPY, SAD, STUDENT",
    }),
  }),
  isFavorite: z.boolean({
    invalid_type_error: "isActive must be a boolean",
  }),
});

type State = {
  errors?: {
    title?: string[];
    description?: string[];
    mood?: string[];
    isFavorite?: string[];
  };
  message?: string | null;
};

export async function addPrompt(_: State, formData: FormData): Promise<State> {
  const parsed = await promptSchema.safeParseAsync({
    title: formData.get("title"),
    description: formData.get("description"),
    mood: formData.get("mood"),
    isFavorite: formData.get("isFavorite") === "false",
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { title, description, mood, isFavorite } = parsed.data;

  try {
    await db.prompt.create({
      data: { title, description, mood, isFavorite },
    });

    revalidatePath("/");
    return { message: "Prompt added successfully!" };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { message: "A prompt with this title already exists." };
    }

    return { message: "Database error: Failed to create prompt." };
  }
}

export async function getPrompt() {
  try {
    const prompts = await db.prompt.findMany({
      orderBy: { createdAt: "desc" },
    });

    return { prompts };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Database error: Could not fetch prompts." };
  }
}

export async function getFavoritePrompt() {
  try {
    const favoritePrompts = await db.prompt.findMany({
      where: { isFavorite: true },
    });

    return { favoritePrompts };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Database error: Could not fetch prompts." };
  }
}

export async function deletePrompt(promptId: number) {
  try {
    await db.prompt.delete({
      where: { id: promptId },
    });

    revalidatePath("/");
    return { message: "Prompt deleted successfully." };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Failed to delete prompt." };
  }
}

export async function EditFavoritePrompt(promptId: number, isFavorite: boolean) {
  try {
    await db.prompt.update({
      where: { id: promptId },
      data: {
        isFavorite: isFavorite,
      },
    });

    revalidatePath("/");
    return { message: "Changed Favorite successfully." };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Failed to Added." };
  }
}

export async function EditPrompt(promptId: number,title:string,description: string,mood:string) {
  try {
    await db.prompt.update({
      where: { id: promptId },
      data: {
        title: title,
        description: description,
        mood: mood as Mood,
      },
    });

    revalidatePath("/");
    return { message: "Edited prompt successfully." };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Failed to Added." };
  }
}
