import { client } from "@/sanity/client";

interface Fortune {
  _id: string;
  date: string;
  content: string;
}

async function getFortune() {
  const query = `*[_type == "fortune"] | order(date desc)[0]`;
  const data = await client.fetch<Fortune>(query);
  return data;
}

export default async function Home() {
  const fortune = await getFortune();

  return (
    // ★★★ 最もシンプルで確実な中央揃えのコード ★★★
    <main className="flex flex-col items-center justify-center min-h-full p-4 text-center">
      <div className="relative z-10">
        <h1 className="mystical-text text-5xl md:text-6xl font-bold mb-8">
          今日の運勢
        </h1>
        
        {fortune ? (
          <div className="bg-black bg-opacity-40 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {fortune.date}
            </p>
            <p className="text-lg text-white whitespace-pre-wrap leading-relaxed">
              {fortune.content}
            </p>
          </div>
        ) : (
          <p>まだ今日の運勢が届いていないようです。</p>
        )}
      </div>
    </main>
  );
}