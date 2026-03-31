import Image from "next/image";
import "../../public/profile.jpg";

export default function Home() {
  return (
    <div className="bg-[#050505f6] text-white flex min-h-screen flex-col items-center px-2 sm:px-12">
      <header className="w-full border-b border-gray-700">
        <nav className="flex items-center justify-center w-full h-20 px-8">
          <ul className="flex w-full max-w-5xl mx-auto items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <li>
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#00FF00] transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="grow flex flex-col md:flex-row items-center justify-center p-4 gap-8 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            LUIZ HENRIQUE
          </h1>
          <p className="text-[#00FF00] text-2xl md:text-3xl font-semibold mt-2">
            FULL STACK DEVELOPER
          </p>
          <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto md:mx-0">
            Transforming ideas into robust and scalable digital solutions.
          </p>
          <button className="cursor-pointer mt-8 px-8 py-3 bg-[#00FF00] text-[#050505] font-bold rounded-lg hover:bg-green-400 transition-colors duration-300">
            See Projects
          </button>
        </div>

        <div className="mt-8 md:mt-0 shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.jpg"
              alt="Luiz Henrique - Full Stack Developer"
              fill
              className="rounded-full border-4 border-[#00FF00] shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <footer className="w-full text-center py-4 mt-auto text-gray-500">
        <p>&copy; {new Date().getFullYear()} Luiz Dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
