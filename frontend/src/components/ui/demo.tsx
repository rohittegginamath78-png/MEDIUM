"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-20 flex h-screen w-full  flex-col items-start justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_50%,rgba(227,253,121,0.18),transparent_60%)]" />
      </div>

      <div className="relative  z-10 w-full px-5 pb-14 text-text sm:px-8 sm:pb-20 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur">
              <span className="inline-flex size-1.5 rounded-full bg-primary shadow-[0_0_20px_rgba(227,253,121,0.6)]" />
              Blog Zone — publish, read, and grow.
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Write.
              <br />
              Share.
              <br />
              <span className="text-primary">Belong.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Blog Zone is a modern blogging space for creators—clean editor,
              fast reading, and a home for your ideas.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button className="rounded-full bg-primary px-5 py-2.5 text-background hover:opacity-95">
                Get started
                <span className="ml-1 inline-flex rounded-full bg-background/20 p-1">
                  <ArrowRight className="size-4" />
                </span>
              </Button>
              <a
                href="/blogs"
                className="rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-text backdrop-blur transition hover:bg-surface/85"
              >
                Explore posts
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="w-full max-w-md rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur">
              <div className="text-sm font-medium text-text">
                Trending on Blog Zone
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "How I write consistently without burnout",
                  "A simple guide to better headlines",
                  "My notes-to-post workflow in 10 minutes",
                ].map((title) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-text"
                  >
                    <span className="text-primary">•</span> {title}
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-muted">
                Tip: Sign in to bookmark and follow authors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

