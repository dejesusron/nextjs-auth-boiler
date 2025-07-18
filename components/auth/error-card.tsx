import { CardWrapper } from "@/components/auth/card-wrapper";
import { TriangleAlert } from "lucide-react";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login">
      <TriangleAlert className="mx-auto text-destructive scale-150" />
    </CardWrapper>
  );
}
