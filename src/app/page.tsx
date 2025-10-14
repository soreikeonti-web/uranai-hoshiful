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
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative z-10">
      <div className="w-full max-w-2xl">
        <h1 className="mystical-text text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          占いサイトへようこそ！
        </h1>
        <p className="mystical-subtitle text-lg sm:text-xl md:text-2xl font-medium mb-8">
          あなたの今日の運勢は？
        </p>
        
        {fortune ? (
          <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
              {fortune.date}
            </p>
            <p className="text-base sm:text-lg text-white whitespace-pre-wrap leading-relaxed">
              {fortune.content}
            </p>
            {fortune.author && (
              <p className="text-sm text-gray-300 mt-4 italic">
                🔮 {fortune.author}
              </p>
            )}
          </div>
        ) : (
          <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
            <p className="text-lg text-gray-300">
              まだ今日の運勢が届いていないようです。
            </p>
            <p className="text-sm text-gray-400 mt-2">
              しばらくしてから再度お試しください。
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          <button className="mystical-button rounded-full transition-colors flex items-center justify-center text-white gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto">
            🔮 新しい運勢を取得
          </button>
          <button className="mystical-button rounded-full transition-colors flex items-center justify-center text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto">
            📚 過去の運勢を見る
          </button>
        </div>
      </div>
    </main>
  );
}