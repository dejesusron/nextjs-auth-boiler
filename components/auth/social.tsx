"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

export function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onClick("github")}>
        <Github />
        Login with Github
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => onClick("google")}>
        <Mail />
        Login with Google
      </Button>
    </div>
  );
}
