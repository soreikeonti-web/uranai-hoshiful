import { client } from "@/sanity/client"; // ウェイターをインポート

// Sanityから受け取るデータの型を定義
interface Fortune {
  _id: string;
  date: string;
  content: string;
  author?: string;
}

// Sanityからデータを取得する関数（ウェイターの仕事）
async function getFortune() {
  // これが注文書（クエリ）です
  const query = `*[_type == "fortune"] | order(date desc)[0]`;
  const data = await client.fetch<Fortune>(query);
  return data;
}

// これがトップページ本体です
export default async function Home() {
  const fortune = await getFortune(); // ウェイターに仕事をお願いする

  return (
    <main>
      {/* ここから下は、AIが作ってくれたデザインを活かしています */}
      <div className="mystical-background font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4">
        <div className="crystal-effect" />
        <div className="row-start-2 items-center text-center relative z-10">
          <h1 className="mystical-text text-5xl md:text-6xl font-bold mb-4">
            今日の運勢
          </h1>
          
          {/* ここで占いデータを表示します！ */}
          {fortune ? (
            <div className="bg-black bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <p className="mystical-subtitle text-xl md:text-2xl text-white mb-2">
                {fortune.date}
              </p>
              <p className="text-lg text-gray-200 whitespace-pre-wrap">
                {fortune.content}
              </p>
            </div>
          ) : (
            <p>まだ今日の運勢が届いていないようです。</p>
          )}

        </div>
      </div>
    </main>
  );
}