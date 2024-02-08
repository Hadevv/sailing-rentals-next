import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createBoat(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;

  await prisma.boat.create({
    data: {
      input: input,
    },
  });

  revalidatePath("/");
}
export async function updateBoat(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.boat.update({
    where: {
      id: inputId,
    },
    data: {
      input: input,
    },
  });

  revalidatePath("/");
}
export async function deleteBoat(formData: FormData) {
  "use server";

  const inputId = formData.get("inputId") as string;

  await prisma.boat.delete({
    where: {
      id: Id,
    },
  });

  revalidatePath("/");
}