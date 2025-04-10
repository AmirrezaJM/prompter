import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] px-10 py-3">
      <Link href="/">
        <div className="flex items-center gap-4 text-[#0e141b]">
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
            className="text-[#0e141b] hover:text-blue-500 text-sm font-medium leading-normal"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
        <Link className="text-sm font-medium leading-normal" href="/">
          <Button className="bg-blue-500 hover:bg-blue-800 hover:cursor-pointer text-white font-bold">
            New
          </Button>
        </Link>
        {/* <Avatar className="size-10">
          <AvatarImage
            src="https://cdn.usedgalileo.ai/sdxl10/fb503a98-e470-434d-be1b-b5ad9703a166.png"
            alt="User avatar"
          />

          <AvatarFallback>AR</AvatarFallback>
        </Avatar> */}
      </div>
    </header>
  );
}
