import { Appbar } from "../components/layout/Appbar";
import Hero from "@/components/ui/demo";

export const Landing = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-background text-foreground">
      <Appbar />
      <Hero />
    </div>
  );
};