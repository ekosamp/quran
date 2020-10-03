import Link from "next/link";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <Header />
      <main className="container content">
        <div className="text-center text-black my-5">
          Baca Al-Qur'an dimana saja, langsung dari web browser Anda, tidak
          perlu lagi install Apps. Tanpa iklan, tanpa analitik dan GRATIS
          sepenuhnya
        </div>
        <div className="py-3 text-center">
          <h4 className="text-semibold font-lg">Terima Kasih</h4>
          <span className="block text-gray-700">Diki S, Eko Spt</span>
        </div>
        <div className="py-3 text-center">
          <h4 className="text-semibold font-lg">Sumber data</h4>
          <span className="block text-gray-700">
            <Link href="https://github.com/sutanlab/quran-api">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline px-2"
              >
                Quran API
              </a>
            </Link>{" "}
            oleh Sutan Nasution
          </span>
        </div>
        <div className="py-3 text-center">
          <h4 className="text-semibold font-lg">Teknologi Pendukung</h4>
          <span className="block text-gray-700">
            <Link href="https://nextjs.org">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline px-2"
              >
                Next.js
              </a>
            </Link>
            <Link href="https://tailwindcss.com">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline px-2"
              >
                TailwindCSS
              </a>
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}
