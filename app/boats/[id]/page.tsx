import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const boatId = Number(id);
  const boat = await prisma.boat.findUnique({
    where: {
      id: boatId,
    },
    select: {
      name: true,
      type: true,
      description: true,
    },
  });

  return (
    <div className="">
      <h1>{boat?.name}</h1>
      <p>{boat?.type}</p>
      <p>{boat?.description}</p>
      <Link href="/">Back</Link>
    </div>
  );
}

