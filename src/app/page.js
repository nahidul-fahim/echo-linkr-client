import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl font-bold text-center">New Heading Here</h2>
      <Button variant="destructive">Shadcn Button</Button>
    </main>
  );
}
