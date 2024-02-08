import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const boatId = await parseInt(id.toString());
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
    </div>
  );
}
