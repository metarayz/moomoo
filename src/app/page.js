"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Smooth scroll helper
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

console.log("MOO");

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handler for overlay click
  const handleOverlayClick = (e) => {
    // Only close if click is on the overlay itself, not inside the menu
    if (e.target.id === "burger-overlay") {
      setMenuOpen(false);
    }
  };

  return (
    <div className="font-body scroll-smooth">
      {/* nav */}
      <div className="absolute top-10 left-0 w-full z-10 md:block hidden">
        <div className="max-w-[2000px] md:p-8 p-5 md:px-12 flex mx-auto justify-between items-start">
          <div className="max-w-max items-center gap-2 rounded-md text-4xl font-bold flex">
            <div className="md:block hidden absolute top-8 left-20">
              <img className="max-w-[700px] mb-2 mt-5" src="/logo-text.png" />
              <a
                href="https://archived.moe/biz/thread/10248178/#q10248178"
                target="_blank"
                rel="noreferrer noopener"
                className="text-right font-black text-[#025702] text-[30px] italic pr-3  hover:scale-105 hover:text-[#800]"
              >
                <div className="right-5 relative">The OG 4Chan Bull</div>
              </a>
            </div>
          </div>

          <div className="flex gap-3 items-center absolute right-20 top-14">
            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://x.com/moomoo4chan"
                target="_blank"
                rel="noopener noreferrer"
                className="size-20 relative"
              >
                <Image src="/x.svg" fill alt="x" />
              </a>
            </div>
            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://t.me/moomooeth"
                target="_blank"
                rel="noopener noreferrer"
                className="size-22 relative"
              >
                <Image src="/tg.svg" fill alt="tg" />
              </a>
            </div>
            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://dexscreener.com/ethereum/0xf43147f9f1bc40511bfe62097e18c948839b3b31"
                target="_blank"
                rel="noopener noreferrer"
                className="size-22 relative"
              >
                <Image src="/dexscreener.svg" fill alt="tg" />
              </a>
            </div>
            <button
              className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              type="button"
            >
              <div className="h-2 w-full bg-[#800] transition-all duration-200" />
              <div className="h-2 w-full bg-[#800] transition-all duration-200" />
              <div className="h-2 w-full bg-[#800] transition-all duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay and burger menu */}
      {menuOpen && (
        <div
          id="burger-overlay"
          className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300"
          onClick={handleOverlayClick}
        >
          {/* Burger menu */}
          <div
            ref={menuRef}
            className={`fixed md:left-1/2 w-full top-0 z-50 transition-all md:text-left text-center duration-500 md:translate-x-[-50%] translate-y-0 opacity-100 pointer-events-auto md:w-[400px] bg-[#fee8ca] shadow-2xl md:rounded-b-2xl flex flex-col items-center py-10`}
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing when clicking inside menu
          >
            <button
              className="absolute top-4 right-8 text-4xl transition hover:scale-125 cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              ×
            </button>
            <nav className="flex flex-col gap-6 mt-8 text-2xl font-bold text-[#800]">
              <a
                href="#hero"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("hero");
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("about");
                }}
              >
                About
              </a>
              <a
                href="#tokenomics"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("tokenomics");
                }}
              >
                Tokenomics
              </a>
              <a
                href="#howtobuy"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("howtobuy");
                }}
              >
                How to Buy
              </a>
              <a
                href="#roadmap"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("roadmap");
                }}
              >
                Roadmap
              </a>
              <a
                href="#memes"
                className="transition hover:scale-110 hover:text-[#c00] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection("memes");
                }}
              >
                Memes
              </a>
            </nav>
          </div>
        </div>
      )}

      <div className="h-10 items-center absolute w-full z-10 flex md:text-lg font-extrabold bg-[#f8e304] shadow-lg border-y-1 md:border-y-2 md:border-t-0 border-[#800]">
        <Marquee speed={150} direction="right">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-2 uppercase text-[#800]"
            >
              THE ORIGINAL 4chan bull
              <span className="inline-block size-6 mx-2 align-middle relative">
                <Image
                  src="/4chan.png"
                  alt="clover"
                  fill
                  className="object-cover rounded object-center scale-x-[-1]"
                  style={{ minWidth: 0, minHeight: 0 }}
                />
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* hero */}
      <div id="hero" className="h-[100dvh] relative overflow-x-hidden">
        <div
          className="absolute inset-0 mt-10 overflow-hidden bg-no-repeat bg-cover bg-center md:block hidden"
          style={{ backgroundImage: "url('/herofinal.webp')" }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0) 60%)",
            }}
          />
          <div className="bg-[transparent] text-white font-bold absolute md:bottom-26 bottom-30 left-1/2 translate-x-[-50%] w-full text-center md:text-5xl text-2xl p-0 px-10 z-20">
            2 hours before mumu... <br />
            <div className="md:text-7xl text-4xl whitespace-nowrap">
              there was{" "}
              <strong className="text-[#800] [text-shadow:2px_2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff,-2px_-2px_0_#fff,2px_0px_0_#fff,0px_2px_0_#fff,-2px_0px_0_#fff,0px_-2px_0_#fff]">
                moomoo
              </strong>
              .
            </div>
          </div>

          <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-col items-center z-20">
            <a
              href="#about"
              className="animate-bounce cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m0 0l-7-7m7 7l7-7"
                    stroke="#f8e304"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* hero mobile */}
        <div className="mt-5 md:hidden">
          <div className="flex gap-2 justify-center mt-22">
            <img src="/logo-text.png" className="w-[300px] object-contain" />
          </div>

          <div className="mt-3">
            <a
              href="https://archived.moe/biz/thread/10248178/#q10248178"
              target="_blank"
              rel="noreferrer noopener"
              className="text-center relative font-black text-[#025702] text-[20px] italic pr-3 hover:scale-105 hover:text-[#800]"
            >
              <div>THE OG 4CHAN BULL</div>
            </a>
          </div>
          <div className="px-5">
            <img src="/herofinal.webp" className="object-cover rounded-xl " />
          </div>

          <div className="flex gap-2 items-center px-5 mt-5 relative z-10">
            <button
              className="p-2 h-[50px] flex-1 flex border-none items-center justify-center flex-col gap-1 text-white font-black border-2 bg-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              type="button"
            >
              OPEN MENU
            </button>
            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://t.me/moomooeth"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 relative"
              >
                <Image src="/tg.svg" fill alt="tg" />
              </a>
            </div>

            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://dexscreener.com/ethereum/0xf43147f9f1bc40511bfe62097e18c948839b3b31"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 relative"
              >
                <Image src="/dexscreener.svg" fill alt="x" />
              </a>
            </div>

            <div className="p-2 size-[50px] flex items-center justify-center flex-col gap-1 bg-[#fee8ca] border-2 border-[#800] aspect-square shadow-lg transition hover:scale-110 cursor-pointer">
              <a
                href="https://x.com/moomoo4chan"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 relative"
              >
                <Image src="/x.svg" fill alt="x" />
              </a>
            </div>
          </div>

          <div className="text-black font-bold  w-full text-center text-xl p-0 px-10 mt-12">
            2 hours before mumu... <br />
            <div className="text-3xl whitespace-nowrap">
              there was <strong className="text-[#800]">moomoo</strong>.
            </div>
            <div className="flex justify-center absolute bottom-10 left-1/2 translate-x-[-50%] z-10">
              <a
                href="#about"
                className="animate-bounce cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                <span className="">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14m0 0l-7-7m7 7l7-7"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* hero.png as faint background */}
      <div className="absolute bottom-[-50vh] w-full h-full md:hidden">
        <Image
          src="/hero.png"
          alt="hero background"
          fill
          className="object-cover opacity-10"
          priority={false}
          draggable={false}
          style={{ pointerEvents: "none", userSelect: "none" }}
        />
      </div>

      {/* about */}
      <div
        id="about"
        className="relative bg-[#fee8ca] py-20 pb-10 flex items-center justify-center md:border-t-2 border-t-2 border-black"
      >
        {/* hero.png as faint background */}
        <div className="absolute inset-0 w-full h-full md:top-0 hidden md:block">
          <Image
            src="/hero.png"
            alt="hero background"
            fill
            className="object-cover opacity-4 overflow-visible"
            priority={false}
            draggable={false}
            style={{ pointerEvents: "none", userSelect: "none" }}
          />
        </div>
        {/* about content goes here */}
        <div className="relative z-10 max-w-[1300px] mx-auto text-center space-y-8 flex flex-col items-center px-5">
          <h1 className="md:text-[70px] text-5xl font-black text-[#800]">
            ORIGINS
          </h1>

          <p className="md:text-2xl text-lg font-semibold px-4 max-w-[950px]">
            This {"isn’t"} a derivative. This is the origin story that sparked
            it all.{" "}
            <a
              href="https://archived.moe/biz/thread/10248178/#q10248178"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#025702] font-bold underline"
            >
              On Thu 12 Jul 2018 at 17:47:28
            </a>
            , the first-ever mention of moomoo was created and posted on 4chan
            by an anonymous user to troll the Business & Finance section of the
            site.
          </p>
          <div className="py-6">
            <Image
              src="/first-mention.webp"
              alt="hero"
              width={1200}
              height={500}
              className="mx-auto md:shadow-xl"
              priority={false}
              draggable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            />
          </div>
          <p className="md:text-2xl text-lg px-2 max-w-[1000px] font-medium">
            What started as a joke instantly resonated with the community and
            hours later many iterations of him were made with a different color
            palette, stripe, and name. But there is no question that this moomoo
            is the original meme that was overlooked.
          </p>
        </div>
      </div>

      <img
        src="/stupid.webp"
        className="md:h-[500px] w-[300px] md:w-auto object-contain mx-auto z-10 relative"
      />

      {/* tokenomics */}
      <section
        id="tokenomics"
        className="relative bg-[#fff8ef] py-24 flex flex-col items-center justify-center border-t-2 border-black"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:text-2xl font-bold text-black space-y-4 text-center md:text-left">
            <h2 className="md:text-5xl md:text-left text-center text-5xl font-extrabold text-[#800] mb-8 tracking-tight">
              TOKENOMICS
            </h2>

            <div className="md:hidden">
              <div className="flex-shrink-0 mt-8 md:mt-0 flex items-center justify-center max-w-max mx-auto rounded-full aspect-square animate-bounce-slow">
                <Image
                  src="/tokenomics.png"
                  alt="Standing Bull"
                  width={200}
                  height={200}
                  className="object-contain"
                  priority={false}
                  draggable={false}
                  style={{ pointerEvents: "none", userSelect: "none" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 my-8 w-full max-w-xl mx-auto">
              <div className="bg-white border-1 border-[#800] rounded shadow p-6 py-2 flex flex-col items-start">
                <span className="text-lg font-semibold text-[black]">
                  Ticker
                </span>
                <span className="md:text-2xl text-lg font-bold text-[black]">
                  $MOOMOO
                </span>
              </div>
              <div className="bg-white border-1 border-[#800] rounded shadow p-6 py-2 flex flex-col items-start">
                <span className="text-lg font-semibold text-[black]">
                  Total Supply
                </span>
                <span className="md:text-2xl text-lg font-bold text-[black]">
                  777,777,777
                </span>
              </div>
              <div className="bg-white border-1 border-[#800] rounded shadow p-6 py-2 flex flex-col items-start break-all">
                <span className="text-lg font-semibold text-[black]">CA</span>
                <span
                  className="font-bold md:text-lg text-xs select-all text-[black]"
                  id="contract-address"
                >
                  0x64442fe778f00b7d7ed1863b9327ca29342cf461
                </span>
              </div>
            </div>

            <div className="mt-10">
              <button
                className="px-4 py-2 rounded border-2 bg-[#800] text-white border-[#800] md:w-[300px] w-full cursor-pointer font-bold hover:bg-[#800] hover:text-[#fee8ca] transition hover:scale-105"
                onClick={() => {
                  const ca = "0x64442fe778f00b7d7ed1863b9327ca29342cf461";
                  navigator.clipboard.writeText(ca);
                  window.alert("Contract address copied to clipboard!");
                }}
                type="button"
              >
                COPY CA
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 mt-8 md:mt-0 ml-10 hidden md:flex p-5 items-center justify-center rounded-full aspect-square animate-bounce-slow">
            <Image
              src="/tokenomics.png"
              alt="Standing Bull"
              width={400}
              height={400}
              className="object-contain"
              priority={false}
              draggable={false}
              style={{ pointerEvents: "none", userSelect: "none" }}
            />
          </div>
        </div>
      </section>

      {/* how to buy */}
      <section
        id="howtobuy"
        className="relative bg-[#ebf5eb] py-24 flex flex-col items-center justify-center border-t-2 border-black overflow-hidden"
      >
        {/* 4chan background */}
        <div className="absolute inset-0 w-full h-full opacity-10 z-0 pointer-events-none select-none ">
          <Image
            src="/pattern.webp"
            alt="4chan background"
            fill
            className="object-cover"
            priority={false}
            draggable={false}
            style={{ pointerEvents: "none", userSelect: "none" }}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full relative z-10 px-5">
          <div>
            <h2 className="md:text-5xl text-5xl font-extrabold text-[#800] mb-8 tracking-tight text-center">
              HOW TO BUY
            </h2>
            <ol className="md:text-2xl font-bold text-[#800] space-y-6 max-w-2xl mx-auto list-decimal list-inside text-left bg-[white] rounded-xl p-10 shadow-lg">
              <li>
                Download and set up a crypto wallet like{" "}
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#025702] transition hover:scale-105 cursor-pointer"
                >
                  MetaMask
                </a>
                .
              </li>
              <li>Fund your wallet with ETH using an exchange or on-ramp.</li>
              <li>
                Go to{" "}
                <a
                  href="https://app.uniswap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#025702] transition hover:scale-105 cursor-pointer"
                >
                  Uniswap
                </a>
                .
              </li>
              <li>
                Connect your wallet and paste the $moomoo contract address:
                <br />
                <span className="break-all font-mono md:text-lg bg-[#fee8ca] px-2 py-1 rounded border border-[#800] inline-block mt-2 w-full text-center">
                  0x64442fe778f00b7d7ed1863b9327ca29342cf461
                </span>
              </li>
              <li>
                Swap ETH for <span className="font-extrabold">$moomoo</span> and
                join the moovement!
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* roadmap section */}
      <section
        id="roadmap"
        className="relative bg-[#fee8ca] py-20 border-t-2 border-black flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="max-w-[1100px] w-full flex flex-col items-center px-5">
          <h2 className="md:text-5xl text-5xl font-black text-[#800] mb-12 tracking-tight text-center drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
            ROADMAP
          </h2>

          <div className="flex-shrink-0 md:hidden mb-10">
            <div className="size-[220px] relative">
              <div className="absolute top-0 rounded-full border-black">
                <Image
                  src="/rocket.png"
                  alt="Roadmap Cow"
                  width={240}
                  height={240}
                  className="aspect-square object-contain"
                  draggable={false}
                  style={{ pointerEvents: "none", userSelect: "none" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:space-x-10 md:flex-row items-center gap-10 w-full">
            <div className="flex-shrink-0 hidden md:block">
              <div className="rounded-full ">
                <Image
                  src="/rocket.png"
                  alt="Roadmap Cow"
                  width={400}
                  height={400}
                  className="aspect-square object-contain animate-rocket-shake"
                  draggable={false}
                  style={{ pointerEvents: "none", userSelect: "none" }}
                />
              </div>
            </div>
            <ul className="md:space-y-4 space-y-3 text-left w-full md:text-xl text-shadow-lg">
              <li className="bg-[white] border-l-4 border-[#800] px-6 py-4 rounded-md shadow flex items-center gap-4">
                <span className="md:text-3xl text-2xl font-extrabold text-[#800]">
                  1.
                </span>
                <span>
                  Launch stealthily.
                  <span className="ml-2">🕵️‍♂️</span>
                </span>
              </li>
              <li className="bg-[white] border-l-4 border-[#800] px-6 py-4 rounded-md shadow flex items-center gap-4">
                <span className="md:text-3xl text-2xl font-extrabold text-[#800]">
                  2.
                </span>
                <span>
                  Tell everybody.
                  <span className="ml-2">🗣️</span>
                </span>
              </li>
              <li className="bg-[white] border-l-4 border-[#800] px-6 py-4 rounded-md shadow flex items-center gap-4">
                <span className="md:text-3xl text-2xl font-extrabold text-[#800]">
                  3.
                </span>
                <span>
                  Shock the masses.
                  <span className="ml-2">😱</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* memes section */}
      <section
        id="memes"
        className="relative bg-[#fff8ef] py-16 border-t-2 border-black"
      >
        <h2 className="text-5xl font-extrabold text-[#800] mb-8 tracking-tight text-center">
          MEMES
        </h2>
        <div className="w-full overflow-hidden">
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
            {[
              "/meme1.webp",
              "/meme2.webp",
              "/meme3.webp",
              "/meme4.webp",
              "/meme5.webp",
              "/meme6.webp",
              "/meme1.webp",
              "/meme2.webp",
              "/meme3.webp",
              "/meme4.webp",
              "/meme5.webp",
              "/meme6.webp",
            ].map((src, i) => (
              <div key={i} className="md:mx-6 mx-2 flex items-center ">
                <div className="size-[300px] md:size-[400px] aspect-square relative">
                  <Image
                    src={src}
                    alt={`meme ${i + 1}`}
                    fill
                    className="rounded-xl shadow-lg border-2 border-[#800] bg-white"
                    draggable={false}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full border-t-2 border-black py-8 flex flex-col items-center gap-4 relative z-20">
        <div className="flex flex-col items-center gap-2">
          {/* Logo */}

          <img
            className="md:max-w-[280px] max-w-[200px] mb-4 mt-5"
            src="/logo-text.png"
          />

          <div className="flex gap-4">
            <a
              href="https://dexscreener.com/ethereum/0xf43147f9f1bc40511bfe62097e18c948839b3b31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="tg"
              className="hover:scale-110 transition cursor-pointer"
            >
              <span className="block md:hidden">
                <Image src="/dexscreener.svg" alt="tg" width={28} height={28} />
              </span>
              <span className="hidden md:block">
                <Image src="/dexscreener.svg" alt="tg" width={40} height={40} />
              </span>
            </a>

            <a
              href="https://x.com/moomoo4chan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="hover:scale-110 transition cursor-pointer z-10"
            >
              <span className="block md:hidden">
                <Image src="/x.svg" alt="X" width={28} height={28} />
              </span>
              <span className="hidden md:block">
                <Image src="/x.svg" alt="X" width={40} height={40} />
              </span>
            </a>

            <a
              href="https://t.me/moomooeth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="tg"
              className="hover:scale-110 transition cursor-pointer"
            >
              <span className="block md:hidden">
                <Image src="/tg.svg" alt="tg" width={28} height={28} />
              </span>
              <span className="hidden md:block">
                <Image src="/tg.svg" alt="tg" width={40} height={40} />
              </span>
            </a>

            <a
              href="https://archived.moe/biz/thread/10248178/#q10248178"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="4chan"
              className="hover:scale-110 transition cursor-pointer"
            >
              <span className="block md:hidden">
                <Image
                  src="/4chan.png"
                  alt="4chan"
                  width={28}
                  height={28}
                  className="rounded"
                />
              </span>
              <span className="hidden md:block">
                <Image
                  src="/4chan.png"
                  alt="4chan"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="text-black font-semibold mt-2 text-center md:text-base text-sm">
          &copy; {new Date().getFullYear()} $moomoo. All rights reserved. <br />{" "}
          Not affiliated with 4chan.
        </div>
      </footer>
    </div>
  );
}
