import Link from "next/link";

const href = "/combos";
const title = "Combos Populares";
const description = "Productos totalmente nuevos y garantizados";

export function Combos() {
  return (
      <Link
        href={href}
        className={`block relative rounded-xl p-4 md:p-6 bg-[url(/images/combos/3.jpeg)] bg-cover bg-center overflow-hidden h-full text-white`}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex flex-col h-full relative">
          <h2 className="text-lg md:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs md:text-sm opacity-80 mb-2">{description}</p>
        </div>
      </Link>
  );
}
