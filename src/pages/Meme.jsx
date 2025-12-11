import { Image, PawPrint } from "lucide-react";
import React, { useState } from "react";

const Meme = () => {
  const [say, setSay] = useState("");
  const [loading, setLoading] = useState(false);
  const [meme, setMeme] = useState("");

  const generateMeme = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://cataas.com/cat/says/${say}`, {
        cache: "no-store",
      });

      const blob = await response.blob();

      const objectUrl = URL.createObjectURL(blob);

      setMeme(objectUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cat:", error);
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!meme) return;

    const link = document.createElement("a");
    link.href = meme;

    link.download = `copycat-${Date.now()}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="text-3xl font-bold text-center">MEME MAKER</h1>
      <h2 className="text-xl font-semibold text-center">
        Type Your Text Below & We'll Stamp It Onto A Completely Random Cat.{" "}
        <br />
        <span className="text-sm font-light text-gray-600">
          (You Can Generate Again & Again Till You Find Your Perfect Of The
          Cat!)
        </span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={say}
          onChange={(e) => setSay(e.target.value)}
          placeholder="What do you want cats to say?"
          className="w-[150%] px-4 py-3 outline-none border-2 border-[#3d5afe]"
        />
        <button
          onClick={generateMeme}
          className="bg-transparent border-2 border-dashed border-[#3d5afe] px-3 py-2 font-bold cursor-pointer flex items-center gap-2"
        >
          {loading ? "Loading..." : "Generate"} <PawPrint className="size-4" />
        </button>
      </div>

      {meme ? (
        <img src={meme} alt="Meme Generated" className="mb-10" />
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center gap-2 border-4 border-dashed border-[#3d5afe] px-10 py-10 sm:px-48 sm:py-48">
          <Image className="size-10 text-gray-500" />
          <p className="text-lg sm:text-xl font-light text-gray-500 text-center">
            Your Image will appear here after you click generate and when it's
            ready!
          </p>
        </div>
      )}

      <button
        onClick={handleDownload}
        className="px-3 py-2 font-semibold bg-[#ff3366] text-white mb-10 hover:scale-110 transition-all ease-in-out cursor-pointer"
      >
        Download
      </button>
    </div>
  );
};

export default Meme;
