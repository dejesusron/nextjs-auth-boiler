"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export function Social() {
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button variant="outline" className="w-full">
        <Github />
        Login with Github
      </Button>
      <Button variant="outline" className="w-full">
        <Mail />
        Login with Google
      </Button>
    </div>
  );
}
