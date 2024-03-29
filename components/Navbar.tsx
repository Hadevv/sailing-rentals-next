"use client";

import React from "react";
import Link from "next/link";
import { ShipWheel } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Navbar() {
  return (
    <nav className="bg-accent p-4 w-full shadow">
      <div className="flex justify-between items-center">
        <ShipWheel size={40} />

        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/boats">Boats</Link>
          <Link href="/"></Link>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
