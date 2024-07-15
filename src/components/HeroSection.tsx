"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="h-[50rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-20 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Transform Your Life <br /> with Yoga
          </h1>
          <p className="mt-6 text-lg font-normal text-neutral-300 max-w-lg mx-auto md:mx-0">
            Join our community and embark on a journey of health, peace, and
            self-discovery.
          </p>
          <div className="flex items-center justify-center md:justify-start mt-8">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore courses
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-96 h-80 mx-auto md:mx-0"
            src="https://im.rediff.com/news/2022/jun/21yoga-day28.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
