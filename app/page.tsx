import HeroVideo from "@/components/HeroVideo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative md:-mt-20">
        <div className="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 md:gap-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            At HerbPharmsHub You'll find
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Re</p>
          <div className="flex items-center justify-center gap-10">
            <Button>Get started</Button>
            <Button className="flex items-center gap-2">
              Find stock <ArrowRight />
            </Button>
          </div>
        </div>
        <HeroVideo />
      </div>
      <div className="min-h-screen">dfgdgffgf</div>
    </div>
  );
}
