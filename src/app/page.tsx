import { Suspense } from "react";
import { connection } from "next/server";
import { QuoteBoard } from "@/components/quote-board";
import { pickQuote } from "@/lib/quotes";
import { pickScene } from "@/lib/scenery";

async function LiveQuote() {
  await connection();
  return <QuoteBoard initial={pickQuote()} initialScene={pickScene()} />;
}

function QuoteFallback() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[40rem] flex-col px-6">
      <header className="pt-8 md:pt-12">
        <h1 className="text-base leading-[26px] font-medium text-on-photo">
          Quote generator
        </h1>
      </header>
      <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
        <div className="border-l-4 border-sage-light pl-6">
          <p className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.2] text-on-photo-soft">
            Finding a line…
          </p>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<QuoteFallback />}>
      <LiveQuote />
    </Suspense>
  );
}
