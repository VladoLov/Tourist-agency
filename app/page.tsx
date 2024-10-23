import Aktivnosti from "@/components/Aktivnosti";
import Destinations from "@/components/Destinations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home({}) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <div className="mx-auto w-full max-w-7xl">
        <Hero />
        <Destinations />
        <Aktivnosti />
      </div>
    </div>
  );
}
