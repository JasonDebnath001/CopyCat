/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Treadmill } from "ldrs/react";
import "ldrs/react/Treadmill.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://cataas.com/cat", {
        cache: "no-store",
      });

      const blob = await response.blob();

      const objectUrl = URL.createObjectURL(blob);

      setCatUrl(objectUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cat:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();

    return () => {
      if (catUrl) URL.revokeObjectURL(catUrl);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="text-3xl font-bold text-center">
        ORIGINALITY IS OVERRATED
      </h1>
      <h2 className="text-xl font-semibold text-center">
        The Infinite cat replication Engine Is Online. Generate, Caption, and
        Distribute.
      </h2>
      <div>
        {loading ? (
          <div className="mt-20">
            <Treadmill size="70" speed="1.25" color="black" />
          </div>
        ) : (
          <img
            src={catUrl}
            alt="Random generated cat"
            className="max-w-md w-full shadow-lg"
          />
        )}
      </div>

      <div className="mb-20 mt-10">
        <button
          className="bg-transparent border border-dashed px-3 py-2 font-bold cursor-pointer"
          onClick={() => navigate("/meme")}
        >
          Generate Cat Meme
        </button>
      </div>
    </div>
  );
};

export default Hero;
