import Link from "next/link";

const href = "/espaldares";
const title = "Espaldares";
const description = "Convencionales y de piso";

export function Backrests() {
  return (
      <Link
        href={href}
        className={`relative block rounded-xl p-4 md:p-6 bg-[url(/images/backrest.jpeg)] bg-cover bg-center overflow-hidden h-full text-white`}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col h-full">
          <h2 className="text-lg md:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs md:text-sm opacity-80 mb-2">{description}</p>
        </div>
      </Link>
  );
}
