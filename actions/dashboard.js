"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server";
import { revalidatePath } from "next/cache";

const serilazeTransactions = (obj) => {
  const serialzed = { ...obj };

  if (obj.balance) {
    serialzed.balance = obj.balance.toNumber();
  }
};

export async function createAccount(data) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("User is not authenticated");
    }
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });
    if (!user) {
      throw new Error("User is not found");
    }
    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance");
    }
    const existingAccount = await db.account.findMany({
      where: {
        userId: user.id,
      },
    });
    const shouldBeDefault =
      existingAccount.length === 0 ? true : data.isDefault;
    if (shouldBeDefault) {
      await db.account.updateMany({
        where: {
          userId: user.id,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }
    const account = await db.account.create({
      data: {
        userId: user.id,
        name: data.name,
        balance: balanceFloat,
        isDefault: shouldBeDefault,
      },
    });

    const serialzedAcccount = serilazeTransactions(account);
    revalidatePath("/dashboard");
    return serialzedAcccount;
  } catch (error) {
    console.error(error);
  }
}
