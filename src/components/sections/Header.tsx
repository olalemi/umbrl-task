"use client";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";
import HamburgerMenu from "../ui/HamburgerMenu";
export default function Header() {
  return (
    <header className="sticky left-0 top-0 flex w-screen z-50 bg-white">
      <nav className="p-4 w-full">
        <div className="container w-full mx-auto flex items-center justify-between gap-x-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={"/assets/images/shadepro.png"}
                height={28}
                width={158}
                alt="Vector icon"
              />
            </Link>
          </div>
          <div className=" block lg:hidden mt-20">
            <HamburgerMenu />
          </div>

          <div className="hidden lg:flex items-center gap-x-3 md:gap-x-10">
            <Link className="font-semibold" href="#">
              Demos
            </Link>
            <Link className="font-semibold" href="#">
              Pages
            </Link>
            <Link className="font-semibold" href="#">
              Support
            </Link>
            <Link className="font-semibold" href="#">
              Contact
            </Link>
            <div className="w-px h-8 bg-gray-200"></div>
            <Link className="font-semibold" href="#">
              Sign In
            </Link>
            <Link href="/get-started">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
