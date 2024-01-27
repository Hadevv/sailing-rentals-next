import React from "react";
import prisma from "../lib/db";

async function getBoat() {
  'use server'
  const boats = await prisma.boat.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      description: false,
      imageUrl: true,
      ownerId: true,
      owner: true,
      },
    },
  );

  return boats;
}

export default async function Home() {
  const boats = await getBoat();
  console.log(boats);

  return (
    <div>
      <ul>
        {boats.map((boat) => (
          <li key={boat.id}>
            <h2>{boat.name}</h2>
            <p>{boat.type}</p>
            {/* <p>{boat.description}</p> */}
            <p>{boat.imageUrl}</p>
            <p>{boat.ownerId}</p>
            <p>{boat.owner?.username}</p>
            <p>{boat.owner?.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

