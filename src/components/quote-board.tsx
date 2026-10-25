"use client";

import { useState, type CSSProperties } from "react";
import type { Quote } from "@/lib/quotes";
import { pickScene, type Scene } from "@/lib/scenery";

type Status = "idle" | "loading" | "error";

function preload(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function SceneLayer({ scene, fadeIn }: { scene: Scene; fadeIn: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={fadeIn ? "scene-layer scene-layer-in" : "scene-layer"}
      style={{ "--scene-image": `url("${scene.src}")` } as CSSProperties}
    />
  );
}

export function QuoteBoard({
  initial,
  initialScene,
}: {
  initial: Quote;
  initialScene: Scene;
}) {
  const [quote, setQuote] = useState(initial);
  const [scene, setScene] = useState(initialScene);
  const [previousScene, setPreviousScene] = useState<Scene | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function showNextQuote() {
    setStatus("loading");

    try {
      const nextScene = pickScene(scene.id);
      const [response] = await Promise.all([
        fetch(`/api/quote?avoid=${encodeURIComponent(quote.id)}`, {
          cache: "no-store",
        }),
        preload(nextScene.src),
      ]);

      if (!response.ok) {
        throw new Error("Quote request failed");
      }

      const next = (await response.json()) as Quote;

      if (!next?.id || !next.text || !next.theme) {
        throw new Error("Quote response was incomplete");
      }

      setQuote(next);
      setPreviousScene(scene);
      setScene(nextScene);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {previousScene ? (
        <SceneLayer key="previous" scene={previousScene} fadeIn={false} />
      ) : null}
      <SceneLayer
        key={scene.id}
        scene={scene}
        fadeIn={previousScene !== null}
      />
      <div className="mx-auto flex min-h-dvh w-full max-w-[40rem] flex-col px-6">
        <header className="pt-8 md:pt-12">
          <h1 className="text-base leading-[26px] font-medium text-on-photo">
            Quote generator
          </h1>
        </header>

        <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
          <div className="border-l-4 border-sage-light pl-6">
            <blockquote
              key={quote.id}
              className="quote-line"
              aria-live="polite"
            >
              <p className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.2] text-on-photo">
                {quote.text}
              </p>
            </blockquote>
            <p className="mt-6 text-base leading-[26px] text-sage-light">
              {quote.theme}
            </p>
            {quote.source === "evanston" ? (
              <p className="mt-2 text-base leading-[26px] text-on-photo-soft">
                Life Time Evanston
              </p>
            ) : null}
          </div>

          {/* pl-7 is 28px: the quote's 24px padding plus its 4px border, so
              the button lines up with the quote text. Intentional, not off-grid. */}
          <div className="mt-16 pl-7">
            <button
              type="button"
              onClick={showNextQuote}
              disabled={status === "loading"}
              aria-busy={status === "loading"}
              className="inline-flex h-12 w-full items-center justify-center rounded-[4px] bg-shell px-8 text-base leading-[26px] font-medium text-ink transition-colors hover:bg-shell-hover active:bg-shell-active disabled:cursor-wait sm:w-auto sm:min-w-56"
            >
              {status === "loading" ? "Finding a line…" : "New quote"}
            </button>

            {status === "error" ? (
              <p
                role="alert"
                className="mt-4 max-w-sm text-base leading-[26px] text-clay-light"
              >
                Could not load a new line. Try again.
              </p>
            ) : null}
          </div>
        </main>

        <footer className="pb-8 md:pb-12">
          <p className="max-w-sm text-sm leading-6 text-on-photo-soft">
            Lines come from the Life Time Evanston page and from writing for
            this page. Backgrounds are photographs from that page. Now showing:{" "}
            {scene.label.toLowerCase()}.
          </p>
        </footer>
      </div>
    </>
  );
}
