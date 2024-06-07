import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all">
      <nav className="container flex flex-col items-center justify-between gap-4 py-5 md:h-24 md:flex-row md:py-0">
        <ul className="flex items-center gap-10 font-medium">
          <li>
            <Link className="font-bold" href="/">
              &#123;D&#125;rondiodev.
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </li>
        </ul>

        {/* <div className="flex items-center justify-between gap-6">
          <ModeToggle />
        </div> */}
      </nav>
    </header>
  );
}
