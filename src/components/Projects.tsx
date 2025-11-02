"use client";
import Image from "next/image";

export default function Projects() {
  // === DATA PROJECTS ===
  const projectsList = [
    {
      id: 1,
      img: "/Aplikasi Scarlett Store.jpg",
      title: "Toko Scarlett Store",
      category: "PHP, MySQL, HTML, CSS",
      desc: "Scarlett Store adalah aplikasi web berbasis PHP dan MySQL yang dirancang untuk mengelola sistem penjualan produk kecantikan secara efisien dan modern. Aplikasi ini memiliki tampilan elegan dengan nuansa pink lembut, menciptakan kesan feminin dan profesional.",
      href: "https://github.com/PuspitasariAlfaris/Proyek-UAS-PemWeb-202312032.git",
    },
    {
      id: 3,
      img: "/crud-laravel-11.jpg",
      title: "CRUD Laravel - Pembelajaran Matkul",
      category: "Laravel, SQLite, PHP",
      desc: "Ini adalah projek dari pembelajaran prmograman berbasis framework Bagian ini merupakan halaman data mahasiswa yang menampilkan informasi berupa daftar mahasiswa dalam bentuk tabel Tabel ini memiliki desain modern dengan warna gradasi ungu di bagian header dan tampilan tombol berwarna mencolok yang memudahkan pengguna dalam melakukan aksi",
      href: "https://github.com/PuspitasariAlfaris/crud---laravel11.git", 
    },
  ];

  // === DESAIN PROJECTS ===
  return (
    <section id="projects" className="py-12">
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 p-8 space-y-8">

        {/* Header */}
        <h3 className="text-lg uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-200 border-b pb-3 border-zinc-300 dark:border-zinc-600">
          Projects
        </h3>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-700">
          {projectsList.map((p) => (
            <div
              key={p.id}
              className="min-w-[320px] md:min-w-[560px] bg-white/80 dark:bg-zinc-900/80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 snap-center group"
            >
              {/* Gambar yang bisa diklik */}
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </a>

              {/* Deskripsi */}
              <div className="p-6 flex flex-col justify-between">
                {/* Judul yang bisa diklik */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-sky-400 transition-colors duration-300">
                    {p.title}
                  </h4>
                </a>

                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                  {p.desc}
                </p>
                <span className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 italic">
                  {p.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}