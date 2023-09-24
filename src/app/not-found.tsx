import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ForkLiftImage from "@/assets/images/1443.jpg";
import ForkLiftImage2 from "@/assets/images/404-illustration.png";

export default function NotFoundPage() {
  return (
    <main className=" min-h-[70vh] grid items-center">
      <div className="container grid grid-cols-2 items-center">
        <div>
          <Image src={ForkLiftImage2} alt="" />
        </div>
        <div className="">
          <div className="text-6xl text-secondary font-bold">404</div>
          <div className="text-secondary text-lg font-semibold">
            Oops, nothing to see here
          </div>
          <p className="text-sm mt-5 max-w-sm text-gray-500">
            Unfortunately, we couldn&apos;t find what you were looking for or
            the page no longer exists.
          </p>

          <Link
            href={"/"}
            className="inline-flex items-center space-x-2 font-bold text-sm text-secondary mt-16"
          >
            <FaArrowLeft />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
