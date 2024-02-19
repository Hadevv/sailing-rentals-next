import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoatCard from "@/components/BoatCard";
const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: number } } ) {
  const { id } = params;
  const boatId = Number(id);
  const boat = await prisma.boat.findUnique({
    where: {
      id: boatId,
    },

  });

  <BoatCard boat={boat || { id: 0, name: "", type: "", description: "", imageUrl: null, ownerId: "" }} />
}