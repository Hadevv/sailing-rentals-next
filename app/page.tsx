import React from "react";
import prisma from "../lib/db";
import { Boat } from "@prisma/client";

async function getBoat(): Promise<Boat[]> {
  "use server";

  const boats = await prisma.boat.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      description: true,
      imageUrl: true,
      ownerId: true,
      owner: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
        },
      },
    },
  });

  return boats;
}

export default async function Home() {
  const boats = await getBoat();
  console.log(boats);

  return (
    <div>
      <h1>Boats</h1>
      <ul>
        {boats.map((boat) => (
          <li key={boat.id}>
            <h2>{boat.name}</h2>
            <p>{boat.type}</p>
            <p>{boat.description}</p>
            <>{boat.imageUrl}</>
            <p>{boat.ownerId}</p>
            <p>{boat.owner.user.username}</p>
            <p>{boat.owner.user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
