import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex flex-col md:flex-row items-center md:items-start gap-6 p-10 rounded-2xl shadow-md bg-gradient-to-r from-pink-50 via-white to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-all duration-500">
      {/* Foto Profil */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 to-blue-400 blur-md opacity-40"></div>
        <Image
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
          src="/puspitasari.jpg"
          alt="Puspitasari Alfaris"
          width={140}
          height={140}
        />
      </div>

      {/* Informasi Profil */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Puspitasari Alfaris
        </h1>
        <h2 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mt-1">
          Mahasiswa Teknik Informatika — <span className="font-medium">STITEK Bontang</span>
        </h2>
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-2 italic">
          Bontang Utara, Kalimantan Timur
        </p>

      </div>
    </header>
  );
}
