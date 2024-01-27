/*
  Warnings:

  - You are about to drop the `BoatOwner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BoatRenter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Boat" DROP CONSTRAINT "Boat_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "BoatOwner" DROP CONSTRAINT "BoatOwner_userId_fkey";

-- DropForeignKey
ALTER TABLE "BoatRenter" DROP CONSTRAINT "BoatRenter_userId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_renterId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_renterId_fkey";

-- DropTable
DROP TABLE "BoatOwner";

-- DropTable
DROP TABLE "BoatRenter";

-- AddForeignKey
ALTER TABLE "Boat" ADD CONSTRAINT "Boat_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
