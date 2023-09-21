import React from "react";
import { FaFacebook, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div>
        <div className="container flex flex-row space-x-16 pt-28 pb-14">
          {/* SUMMARISED ABOUT */}
          <div className="w-1/4">
            {/* LOGO */}
            <div>Logo</div>
            {/* END LOGO */}

            <p className="text-sm my-4">
              We fuse our global network with our depth of expertise in air
              freight, ocean freight, railway transportation, trucking, and
              multimode transportation. Also, we are providing sourcing,
              warehousing, E-Commercial fulfillment and value-added service to
              our customers including kitting, assembly, customized package and
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
      </div>

      <div className="text-xs font-light bg-[#041C2F] py-6">
        <div className="container">
          &copy; Transp Official. All right reserved
        </div>
      </div>
    </footer>
  );
}
