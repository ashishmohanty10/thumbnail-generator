"use server";

import { db } from "~/server/db";
import { signUpSchema, type signUpSchemaType } from "~/zod-schemas/zodSchema";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const signupAction = async (values: signUpSchemaType) => {
  const isValid = signUpSchema.safeParse(values);

  if (isValid.error) {
    return "Error";
  }

  const user = await db.user.findUnique({
    where: {
      email: isValid.data.email,
    },
  });

  if (user) {
    return "User already exists";
  }

  const hashPassword = await bcrypt.hash(isValid.data.password, 10);

  await db.user.create({
    data: {
      name: isValid.data.name,
      email: isValid.data.email,
      password: hashPassword,
    },
  });

  redirect("/signin");
};
