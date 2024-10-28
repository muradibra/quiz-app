import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  if (!user || user.role !== Role.ADMIN) {
    return redirect("/");
  }

  return <div>{children}</div>;
};

export default DashboardLayout;
