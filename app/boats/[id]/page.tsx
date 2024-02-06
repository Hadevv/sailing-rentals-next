import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStaticPaths() {
  const boats = await prisma.boat.findMany({
    select: {
      id: true,
    },
  });

  const paths = boats.map((boat) => ({
    params: { id: boat.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const boat = await prisma.boat.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return { props: { boat } };
}

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
