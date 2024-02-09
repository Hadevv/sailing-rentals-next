import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoatCard from "@/components/BoatCard";


const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const boatId = Number(id);
  const boat = await prisma.boat.findUnique({
    where: {
      id: boatId,
    },
  });

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <Link href="/">
        <Button>
          <ArrowLeft size={20} />
          Back
        </Button>
      </Link>
      <BoatCard boat={boat} />
    </div>
  );
}