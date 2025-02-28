import { currentUser } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { db } from "./prisma";

export const checkUser = async () => {
  const user =  currentUser();
  if (!user) {
    return false;
  }
  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (loggedInUser) {
      return loggedInUser;
    }
    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: name,
        imageUrl: user.imageUrl,
      },
    });
    return newUser;
  } catch (error) {
    console.error(error);
  }
};
