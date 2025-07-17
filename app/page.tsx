import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="grid h-full place-items-center">
      <div>
        <h1
          className={cn("text-6xl font-semibold text-center", font.className)}>
          Auth Boiler
        </h1>
        <p className="text-lg text-center mb-5">
          A simple authentication boiler plate
        </p>
        <div className="grid place-items-center">
          <LoginButton>
            <Button variant="secondary" size="lg" className="cursor-pointer">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
