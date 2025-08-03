"use client";

import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "He8S8wC7KQUH7qGWAaLRNFpjqrVyQBwUud34Eyj82AZo"; // Replace with actual contract address

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="h-[100dvh] bg-gradient-to-br from-[#8E4CDF] via-[#b182eb] to-[#8E4CDF] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="absolute inset-0 md:bottom-0 bottom-[15vh]">
        <Image
          src="/img/hero2.png"
          className="object-contain object-bottom"
          alt="Background"
          fill
        />
      </div>

      <div className="h-6.5 w-full text-yellow-400 font-black bg-[#5d2b99]">
        <Marquee speed={100}>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
          <span className=" text-sm mx-8">MOOMOO IS NOW ON SOLANA!</span>
        </Marquee>
      </div>

      {/* Header */}
      <header className="relative z-10 flex md:justify-between justify-center items-center p-2 px-5">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <div className="w-[150px] h-[100px] relative items-center justify-center md:flex hidden">
            <Image
              src="/img/text.png"
              className="object-contain"
              alt="Logo"
              fill
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-2 md:mt-0 mt-3">
          <a
            href="https://x.com/moomoo4chan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] md:hover:scale-[1.05] rounded-md p-2 transition-colors"
          >
            <Image
              src="/img/x.svg"
              className="size-6"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://t.me/moomoo_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] md:hover:scale-[1.05] rounded-md p-2 transition-colors"
          >
            <Image
              src="/img/tg.svg"
              className="size-6"
              alt="TG"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.tiktok.com/@moomoo4chan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] md:hover:scale-[1.05] rounded-md p-2 transition-colors"
          >
            <Image
              src="/img/tiktok.png"
              className="size-6"
              alt="TikTok"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.youtube.com/@MooMooTheBull/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] md:hover:scale-[1.05] rounded-md p-2 transition-colors"
          >
            <Image
              src="/img/youtube.svg"
              className="size-6"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/moomoo4chan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] md:hover:scale-[1.05] rounded-md p-2 transition-colors"
          >
            <Image
              src="/img/ig.svg"
              className="size-6"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </header>

      <div className="flex justify-center md:hidden mt-2">
        <div className="w-[80vw] relative items-center justify-center">
          <img src="/img/text.png" className="object-contain" alt="Logo" />
        </div>
      </div>

      {/* Main Content */}
      <main
        className="absolute md:bottom-20 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end "
        onClick={copyToClipboard}
      >
        {/* Contract Address */}
        <div className="bg-[#5d2b99]  md:rounded-lg md:max-w-max w-full px-5 py-3">
          <p className="text-yellow-300/80 uppercase text-sm mb-2 text-center font-medium">
            Contract Address
          </p>
          <div className="bg-gradient-to-r from-[#FDD530] to-[#F2BF29] rounded-lg p-4 cursor-pointer hover:bg-yellow-200 transition-all duration-200 hover:border-white/40">
            <p className="text-black font-mono font-semibold md:text-base text-xs break-all text-center whitespace-nowrap overflow-ellipsis overflow-hidden">
              {contractAddress}
            </p>
          </div>
          <p className="text-white text-sm mt-2 text-center font-bold uppercase">
            {copied ? "✅ Copied!" : "👆 Click to copy"}
          </p>
        </div>
      </main>
    </div>
  );
}
