"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Screenshot from "@/components/ui/screenshot";
import Github from "@/components/logos/github";
import { siteConfig } from "@/config/site";

export default function Hero({
  title = "Give your big idea the design it deserves",
  description = "Professionally designed blocks and templates built with React, Shadcn/ui and Tailwind that will help your product stand out.",
  badge = true,
  buttons = true,
  className,
}) {
  return (
    <section className={cn("w-full py-16 sm:py-24", className)}>
      <div className="container mx-auto flex flex-col items-center gap-6 text-center sm:gap-12">
        {badge && (
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of Launch UI is out!
            </span>
            <a
              href={siteConfig.getStartedUrl}
              className="flex items-center gap-1 ml-2 font-medium"
            >
              Get started <ArrowRightIcon className="size-3" />
            </a>
          </Badge>
        )}
        <h1 className="animate-appear text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="animate-appear text-muted-foreground max-w-2xl text-base sm:text-xl font-medium opacity-0 delay-100">
          {description}
        </p>
        {buttons && (
          <div className="animate-appear flex gap-4 justify-center opacity-0 delay-300">
            <Button size="lg" asChild>
              <a href={siteConfig.getStartedUrl}>Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.links.github} className="flex items-center">
                <Github className="mr-2 size-4" />
                Github
              </a>
            </Button>
          </div>
        )}
        <div className="pt-12 w-full max-w-5xl">
          <div className="rounded-xl border bg-background p-2 shadow-md">
            <Screenshot
              srcLight="/app-light.png"
              srcDark="/app-dark.png"
              alt="Launch UI Screenshot"
              className="rounded-md"
              width={1248}
              height={765}
            />
          </div>
        </div>
      </div>
    </section>
  );
}