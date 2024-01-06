"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { trackPackage } from "@/lib/actions";
import { routes } from "@/lib/routes";
import { useToast } from "./ui/use-toast";
import { FaSpinner } from "react-icons/fa6";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

function Header() {
  const { toast } = useToast();
  const { pending } = useFormStatus();

  const onTrackPackage = async (formData: FormData) => {
    // setTimeout(async () => {
    const status = await trackPackage(formData);
    if (status?.success === false) {
      toast({
        title: "Error",
        description: status.message,
        variant: "destructive",
      });
    }
    // }, 3000);
  };

  // console.log(fetchingData);

  return (
    <header className="bg-white h-20 flex items-center overflow-hidden border-b">
      <div className="container flex items-center justify-between gap-5 font-medium">
        {/* LOGO */}
        <Link href={"/"}>
          <Image src={Logo} alt="Brand Logo" className="max-sm:w-40" />
        </Link>
        {/* END LOGO */}

        {/* NAV MENU */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-sm">
            {routes.map(({ title, href }) => (
              <li key={href}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* END NAV MENU */}

        <Popover>
          <PopoverTrigger>
            {/* TRACK PACKAGE POPUP BUTTON */}
            <Button>Track package</Button>
            {/* END TRACK PACKAGE POPUP BUTTON */}
          </PopoverTrigger>
          <PopoverContent>
            {/* TRACKING FORM */}
            <div>
              <h3 className="font-medium text-secondary">
                Find the status of your shipment!
              </h3>
              <form action={onTrackPackage} className="mt-3">
                <div className="mb-2">Tracking ID</div>
                <Input
                  type="text"
                  name="trackingId"
                  placeholder="Enter your tracking number"
                />

                <Button
                  disabled={pending}
                  variant={"secondary"}
                  className="mt-2 w-full"
                >
                  {pending ? <FaSpinner className="animate-spin" /> : "Track"}
                </Button>
              </form>
            </div>
            {/* END TRACKING FORM */}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

export { Header };
