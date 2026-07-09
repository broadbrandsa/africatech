"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FloorplanDialog({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="group mt-8 flex items-center gap-4 rounded-xl border bg-card p-3 pr-5 text-left transition-colors duration-100 hover:border-brand/50">
        <span className="relative block h-16 w-24 shrink-0 overflow-hidden rounded-md">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="96px"
          />
        </span>
        <span>
          <span className="block text-sm font-semibold">{caption}</span>
          <span className="block text-xs text-muted-foreground group-hover:text-foreground">
            View the Halls 1–4 floor plan
          </span>
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Halls 1–4 — CTICC, Cape Town</DialogTitle>
          <DialogDescription>
            Official Africa Tech Festival 2026 floor plan. DSG stand location
            to be confirmed once booking is secured.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-auto rounded-lg border bg-white">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1100}
            className="h-auto w-full"
            sizes="(min-width: 896px) 896px, 100vw"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
