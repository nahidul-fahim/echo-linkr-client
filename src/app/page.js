"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

export default function Home() {

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl font-bold text-center">New Heading Here</h2>
      <Button variant="destructive" onClick={() => toast("New notification")
      }>Shadcn Button</Button>
    </main>
  );
}