import { StoreAddress } from "./ui/bento/StoreAddress";
import { HeroProducts } from "./ui/bento/HeroProducts";
import { Contact } from "./ui/bento/Contact";
import { Mattresses } from "./ui/bento/Mattresses";
import { Warranties } from "./ui/bento/Warranties";
import { Backrests } from "./ui/bento/Backrests";
import { Combos } from "./ui/bento/Combos";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-5 md:grid-rows-5 gap-4 h-full">
      <article className="md:row-span-4 transition-transition duration-300 hover:scale-95">
        <HeroProducts />
      </article>
      <article className="md:col-span-3 md:row-span-2 transition-transition duration-300 hover:scale-95">
        <Mattresses />
      </article>
      <article className="md:row-span-2 md:col-start-2 md:row-start-3 transition-transition duration-300 hover:scale-95">
        <Combos />
      </article>
      <article className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 transition-transition duration-300 hover:scale-95">
        <StoreAddress />
      </article>
      <article className="md:col-span-2 md:row-start-5 transition-transition duration-300 hover:scale-95">
        <Warranties />
      </article>
      <article className="md:col-span-2 md:col-start-3 md:row-start-5 transition-transition duration-300 hover:scale-95">
        <Backrests />
      </article>
      <article className="md:row-span-5 md:col-start-5 md:row-start-1 transition-transition duration-300 hover:scale-95">
        <Contact />
      </article>
    </section>
  );
}
