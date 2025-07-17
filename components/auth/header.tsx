import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export function Header({ label }: HeaderProps) {
  return (
    <div className="w-full">
      <h1 className={cn("text-3xl font-semibold text-center", font.className)}>
        Auth
      </h1>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}
