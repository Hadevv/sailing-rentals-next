import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       username: 'alie',
  //       email: 'alie.doe@example.com',
  //       password: 'password1234',
  //       bio: 'I love sailing and exploring the open seas.',
  //       avatarUrl: 'https://example.com/avatar.jpg',
  //     },
  //   ],
  // });

  // const boatOwners = await prisma.boatOwner.createMany({
  //   data: [
  //     {
  //       userId: users[0].id,
  //     }
      
  //   ],
  // });
  // const boatRenters = await prisma.boatRenter.createMany({
  //   data: [
  //     {
  //       userId: users[0].id,
  //     },
  //   ],
  // });

  // const boats = await prisma.boat.createMany({
  //   data: [
  //     {
  //       name: 'Sea Voyager',
  //       type: 'Sailboat',
  //       description: 'A beautiful sailboat for your ocean adventures.',
  //       imageUrl: 'https://example.com/sea_voyager.jpg',
  //       ownerId: users[0].id,
  //     },
  //   ],
  // });

  // const rentals = await prisma.rental.createMany({
  //   data: [
  //     {
  //       boatId: boats[0].id,
  //       renterId: boatRenters[0].id,
  //       startDate: new Date(),
  //       endDate: new Date(),
  //     },
  //   ],
  // });
  // const reviews = await prisma.review.createMany({
  //   data: [
  //     {
  //       rating: 4,
  //       comment: 'Great experience! Loved every moment on the Sea Voyager.',
  //       userId: users[0].id,
  //       boatId: boats[0].id,
  //     },
  //   ],
  // });

  // const notifications = await prisma.notification.createMany({
  //   data: [
  //     {
  //       content: 'You have a new message!',
  //       userId: users[0].id,
  //     },
  //   ],
  // });

  // const payments = await prisma.payment.createMany({
  //   data: [
  //     {
  //       amount: 100,
  //       method: 'Credit Card',
  //       userId: users[0].id,
  //       rentalId: rentals[0].id,
  //     },
  //   ],
  // });

  // const bookings = await prisma.booking.createMany({
  //   data: [
  //     {
  //       boatId: boats[0].id,
  //       renterId: boatRenters[0].id, 
  //       startDate: new Date(),
  //       endDate: new Date(),
  //       status: 'Confirmed',
  //     }
  //   ],
  // });

  console.log('Seed completed!');
  prisma.$disconnect();
}

seed();
