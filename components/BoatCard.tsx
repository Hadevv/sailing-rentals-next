import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import catamaran from "../public/img/catamaran.jpg";

type Boat = {
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  ownerId: number;
  owner: {
    username: string;
  };
};

export default function BoatCard({ boat }: { boat: Boat }) {
  return (
    <div key="1" className="max-w-6xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="relative">
            <Image
              alt="Yacht"
              className="rounded-lg w-full"
              height="300"
              src={catamaran}
              style={{
                aspectRatio: "600/300",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-gray-300" />
            </div>
            <div className="absolute top-4 right-4 flex space-x-4">
              <ShareIcon className="text-blue-600" />
              <HeartIcon className="text-red-500" />
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-bold">
            {boat.name} - {boat.type}
          </h2>
          <p className="text-lg">
            Menorquín 100 para alquilar en costa catalana.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Detalle</h3>
            <p className="mt-2 text-sm text-gray-600">
              Menorquín 100 para alquilar en costa catalana basado en la
              elegancia de unas líneas clásicas y con las ventajas de la más
              moderna tecnología capacidad de navegación diurna para 10 personas
              o sin patrón y disfrutar de la costa. / Eslora total: 10m / Manga:
              3 mts / Calado: 0 mts / Astillero: Menorquín Yachts / Año: 2001 /
              Motorización: 2 x 2x190 Yanmar 380 HP Diesel / Año de Refit: 2013
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Teca en bañera, 2 bancos/ cofres de teca en bañera 2016.
              Plataforma de baño en teca con ducha de agua fría / caliente.
              Toldo de proa, colchonetas solárium 2016 y toldo popa en azul y
              toldo en ducha de agua perforado para verano. Comuníquese con
              nosotros para más detalles.
            </p>
            <Button className="mt-4" variant="outline">
              Ver más
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Reserva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around mb-4">
                <Button variant="outline">POR HORA</Button>
                <Button variant="outline">POR DIA</Button>
                <Button variant="outline">POR DIAS</Button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <ChevronLeftIcon className="text-gray-600" />
                <p className="text-lg font-semibold">Julio 2020</p>
                <ChevronRightIcon className="text-gray-600" />
              </div>
              <div className="grid grid-cols-7 gap-1">
                <div className="text-xs font-semibold text-center">SUN</div>
                <div className="text-xs font-semibold text-center">MON</div>
                <div className="text-xs font-semibold text-center">TUE</div>
                <div className="text-xs font-semibold text-center">WED</div>
                <div className="text-xs font-semibold text-center">THU</div>
                <div className="text-xs font-semibold text-center">FRI</div>
                <div className="text-xs font-semibold text-center">SAT</div>
                <div className="text-center py-1 rounded-full bg-gray-200">
                  1
                </div>
                <div className="text-center py-1 rounded-full bg-blue-500 text-white">
                  21
                </div>
                <div className="text-center py-1 rounded-full bg-gray-200">
                  31
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                Horarios disponibles
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
