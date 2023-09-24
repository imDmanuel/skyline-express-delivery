import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaLocationPin,
  FaPhone,
  FaSkype,
  FaTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { HiOutlineEnvelope, HiOutlinePhone, HiPhone } from "react-icons/hi2";
import { LuLandmark } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container flex flex-row flex-wrap gap-x-16 pt-28 pb-14">
        {/* SUMMARISED ABOUT */}
        <div className="min-w-[250px] max-w-[35%]">
          {/* LOGO */}
          <div>Logo</div>
          {/* END LOGO */}

          <p className="text-sm my-4">
            We fuse our global network with our depth of expertise in air
            freight, ocean freight, railway transportation, trucking, and
            multimode transportation. Also, we are providing sourcing,
            warehousing, E-Commercial fulfillment and value-added service to our
            customers including kitting, assembly, customized package and
            business inserts, etc.
          </p>

          {/* SOCIALS */}
          <div className="text-primary text-sm">Follow Us</div>
          <ul className="flex space-x-6 mt-2">
            <li>
              <Link href={"#"}>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <FaSkype />
              </Link>
            </li>
          </ul>
          {/* END SOCIALS */}
        </div>
        {/* END SUMMARISED ABOUT */}

        {/* CONTACT DETAILS */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            {/* ICON */}
            <div className="rounded-full grid place-items-center shrink-0 w-14 aspect-square bg-primary">
              <LuLandmark className="text-secondary text-xl" />
            </div>
            {/* END ICON */}

            <div>
              {/* TITLE */}
              <div className="font-medium text-primary text-sm">Address</div>
              {/* END TITLE */}
              {/* DETAILS */}
              <div className="text-xs">
                65 Allerton Street 901 N Pitt Str, USA
              </div>
              {/* END DETAILS */}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* ICON */}
            <div className="rounded-full grid place-items-center shrink-0 w-14 aspect-square bg-primary">
              <HiOutlineEnvelope className="text-secondary text-xl" />
            </div>
            {/* END ICON */}

            <div>
              {/* TITLE */}
              <div className="font-medium text-primary text-sm">Email</div>
              {/* END TITLE */}
              {/* DETAILS */}
              <div className="text-xs">contact@transp.com</div>
              {/* END DETAILS */}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* ICON */}
            <div className="rounded-full grid place-items-center shrink-0 w-14 aspect-square bg-primary">
              <HiOutlinePhone className="text-secondary text-xl" />
            </div>
            {/* END ICON */}

            <div>
              {/* TITLE */}
              <div className="font-medium text-primary text-sm">Telephone</div>
              {/* END TITLE */}
              {/* DETAILS */}
              <div className="text-xs">
                (+380) 50 318 47 07 - (+182) 50 318 47 07
              </div>
              {/* END DETAILS */}
            </div>
          </div>
        </div>
        {/* END CONTACT DETAILS */}

        {/* LINKS */}
        <div>
          <div className="text-lg text-primary">Quick Links</div>
          <ul className="text-sm space-y-2 mt-3">
            {routes.map(({ title, href }) => (
              <li key={href} className="hover:text-gray-500">
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* END LINKS */}

        {/* SERVCIES */}
        <div>
          <div className="text-lg text-primary">Services</div>
          <ul className="text-sm space-y-2 mt-3">
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Railway Freight</li>
            <li>Warehousing</li>
            <li>Distribution</li>
            <li>Value added</li>
          </ul>
        </div>
        {/* END SERVCIES */}
      </div>

      <div className="text-xs font-light bg-[#041C2F] py-6">
        <div className="container">
          &copy; Transp Official. All right reserved
        </div>
      </div>
    </footer>
  );
}
