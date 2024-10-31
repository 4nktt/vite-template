import { ShieldQuestion } from "lucide-react";

import { Card, CardHeader } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="relative mx-auto mt-20 max-w-md">
      <CardHeader>
        <p className="flex items-center justify-center gap-2 text-2xl">
          <ShieldQuestion />
          This page cannot be found.
        </p>
      </CardHeader>
    </Card>
  );
}
