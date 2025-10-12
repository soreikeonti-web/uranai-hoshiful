import Image from "next/image";

export default function Home() {
  return (
    <div className="mystical-background font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-10">
        <Image
          className="dark:invert opacity-80"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      
      <h1 className="mystical-text text-4xl font-bold text-center sm:text-left">占いサイトへようこそ！</h1>
      <p className="text-lg text-white/80 text-center sm:text-left">あなたの今日の運勢は？</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="mystical-button rounded-full transition-colors flex items-center justify-center text-white gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            占いを始める
          </a>
          <a
            className="mystical-button rounded-full transition-colors flex items-center justify-center text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            運勢を確認
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center relative z-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white/70 hover:text-white transition-colors"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          学習
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white/70 hover:text-white transition-colors"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          例
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white/70 hover:text-white transition-colors"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Next.js →
        </a>
      </footer>
    </div>
  );
}
