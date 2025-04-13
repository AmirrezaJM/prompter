"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export default function Header() {
  const { setTheme } = useTheme();
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-b border-[#e7edf3] dark:border-[#2a2e35] px-6 sm:px-10 py-3 bg-white dark:bg-[#0e141b]">
      <Link href="/">
        <div className="flex items-center gap-4 text-[#0e141b] dark:text-white">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
            Prompty
          </h2>
        </div>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            className="text-sm font-medium text-[#0e141b] dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
        <div className="space-x-3 justify-center items-center flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link className="text-sm font-medium leading-normal" href="/">
            <Button className="bg-blue-500 hover:bg-blue-800 hover:cursor-pointer text-white font-bold">
              New
            </Button>
          </Link>
        </div>
        {/* <Link href="/sign-up">
          <Avatar className="size-10">
            <AvatarImage
              src="https://cdn.usedgalileo.ai/sdxl10/fb503a98-e470-434d-be1b-b5ad9703a166.png"
              alt="User avatar"
            />

            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </Link> */}
      </div>
    </header>
  );
}
