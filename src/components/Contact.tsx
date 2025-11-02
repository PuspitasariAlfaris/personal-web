export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-10 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-3xl shadow-inner"
    >
      {/* === TITLE === */}
      <div className="text-center">
        <h3 className="text-sm uppercase tracking-wider font-semibold text-pink-600 dark:text-pink-400">
          Contact
        </h3>
        <p className="text-zinc-800 dark:text-zinc-200 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
          Saya selalu terbuka untuk kolaborasi dan peluang baru di bidang pengembangan web.
          Jika kamu ingin berdiskusi tentang proyek, berbagi ide kreatif, atau sekadar menyapa,
          silakan hubungi saya melalui salah satu kontak di bawah ini 💬
        </p>
      </div>

      {/* === CARD WRAPPER === */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* === EMAIL CARD === */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-pink-100 dark:border-pink-800 min-h-[220px]">
          <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
            📧 Email
          </h4>
          <p className="text-zinc-500 dark:text-zinc-300 mb-3">
            Kirim pesan langsung ke email saya:
          </p>
          <a
            href="mailto:puspitasarialfaris0@gmail.com"
            className="font-medium text-pink-600 hover:text-pink-700 hover:underline break-all"
          >
            puspitasarialfaris0@gmail.com
          </a>
        </div>

        {/* === INSTAGRAM CARD === */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-pink-100 dark:border-pink-800 min-h-[220px]">
          <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
            📸 Instagram
          </h4>
          <p className="text-zinc-500 dark:text-zinc-300 mb-3">
            Lihat keseharian dan aktivitas saya:
          </p>
          <a
            href="https://www.instagram.com/psptsri.alfrs/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pink-600 hover:text-pink-700 hover:underline"
          >
            @psptsri.alfrs
          </a>
        </div>

        {/* === YOUTUBE CARD === */}
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-pink-100 dark:border-pink-800 min-h-[220px]">
          <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
            🎥 YouTube
          </h4>
          <p className="text-zinc-500 dark:text-zinc-300 mb-3">
            Tonton konten saya di YouTube:
          </p>
          <a
            href="https://www.youtube.com/@puspitasarialfaris1880"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pink-600 hover:text-pink-700 hover:underline"
          >
            @puspitasarialfaris1880
          </a>
        </div>
      </div>
    </section>
  );
}