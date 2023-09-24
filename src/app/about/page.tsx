import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DeliveryPersonLookingForAddress from "@/assets/images/delivery-african-american-man-yellow-polo-shirt-cap-holding-big-heavy-cardboard-boxes-feeling-unwell-because-heavy-weight-blue.jpg";
import DeliveryPersonShowingClipboard from "@/assets/images/caucasian-courier-delivering-order-customer-showing-data-clipboard-professional-deliveryman-carrying-yellow-backpack-packet-woman-watching-paper-delivery-service-post-concept.jpg";
import DeliveryPersonCarryingBoxes from "@/assets/images/delivery-african-american-man-yellow-polo-shirt-cap-holding-big-heavy-cardboard-boxes-feeling-unwell-because-heavy-weight-blue.jpg";
import DeliveryPersonStandingBehindCar from "@/assets/images/close-up-delivery-person-with-parcel.jpg";
import { FaGear } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi2";
import Building1 from "@/assets/images/low-angle-shot-high-rise-buildings-clear-sky-frankfurt-germany.jpg";
import Building2 from "@/assets/images/janay-peters--jVimPgmKfg-unsplash.jpg";
import Building3 from "@/assets/images/low-angle-shot-high-rise-buildings-clear-sky-frankfurt-germany.jpg";
import Building4 from "@/assets/images/skyscrapers-from-low-angle-view.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section>
        {/* HERO SECTION */}
        <section className="flex items-center justify-center">
          <div className="container">
            <div className="py-12 text-center space-y-4 bg-secondary/90">
              <div className="text-xs bg-primary text-secondary inline-block p-2">
                Who We Are
              </div>
              <div className="text-primary text-3xl font-bold">About Us</div>
              <p className="text-white text-sm leading-7 max-w-md mx-auto">
                We have been pioneering the industry in Europe for 20 years, and
                delivering value products within given timeframe, every single
                time.
              </p>
            </div>
          </div>
        </section>
        {/* END HERO SECTION */}

        <section className="mt-20">
          <div className="container">
            {/* SECTIONS GRID CONTAINER */}
            <div className="">
              {/* SECTION 1 */}
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <div className="font-semibold text-3xl text-secondary">
                    Simplifying complex shipping challenges with innovative
                    solutions
                  </div>
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi neque ipsam beatae sit sunt esse dolore, officia id
                    consectetur eos ipsa adipisci ab, assumenda fuga nostrum
                    laboriosam? Iusto, eveniet quo!
                  </p>

                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae repellat fugiat est voluptatum eos autem eum aliquam
                    nemo fuga quos nostrum sit facilis cum culpa illo suscipit,
                    ad repellendus sequi!
                  </p>
                </div>
                {/* IMAGE */}
                <div>
                  {/* TODO: REPLACE SINGLE IMAGE WITH GRID OF IMAGES AS IN THE DESIGN */}
                  <Image
                    className="object-cover aspect-square max-h-[25rem]"
                    src={DeliveryPersonLookingForAddress}
                    alt="black female courier carrying packages looking delivery address city"
                  />
                  {/* <Image />
                  <Image /> */}
                </div>
                {/* END IMAGE */}
              </div>
              {/* END SECTION 1 */}

              {/* SECTION 2 */}
              <div className="grid grid-cols-2 gap-6 items-center mt-16">
                <Image
                  src={DeliveryPersonShowingClipboard}
                  alt="Delivery person showing clipboard"
                />

                <div>
                  <div className="text-xs bg-primary text-secondary inline-block py-1 px-2 mb-1">
                    Mission
                  </div>
                  <div className="font-semibold text-2xl text-secondary">
                    Globally Connected by Large Network
                  </div>

                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque quasi, est mollitia nisi nulla eum, suscipit
                    et maiores corrupti hic sit praesentium quis possimus omnis
                    consectetur! Maiores, amet alias!
                  </p>

                  <div className="flex mt-6">
                    <div className="">
                      <div className="flex items-center space-x-2">
                        <HiOutlineChartBar />
                        <div className="font-medium">Affordable Cost</div>
                      </div>
                      <p className="text-xs">
                        The latest design trends meet hand-crafted templates.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <FaGear />
                        <div className="font-medium">Short Time Delivery</div>
                      </div>
                      <p className="text-xs">
                        The latest design trends meet hand-crafted templates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END SECTION 2 */}

              {/* SECTION 3 */}
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-xs bg-primary text-secondary inline-block py-1 px-2 mb-1">
                    History
                  </div>
                  <div className="font-semibold text-2xl text-secondary">
                    Globally Connected by Large Network
                  </div>
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi neque ipsam beatae sit sunt esse dolore, officia id
                    consectetur eos ipsa adipisci ab, assumenda fuga nostrum
                    laboriosam? Iusto, eveniet quo!
                  </p>

                  <div className="mt-10">
                    <Button variant={"secondary"} asChild>
                      <Link href={"/contact"}>Contact Us</Link>
                    </Button>
                  </div>
                </div>
                {/* IMAGE */}
                <div>
                  <Image
                    className="object-cover aspect-square max-h-[25rem]"
                    src={DeliveryPersonCarryingBoxes}
                    alt="black female courier carrying packages looking delivery address city"
                  />
                  {/* <Image />
                  <Image /> */}
                </div>
                {/* END IMAGE */}
              </div>
              {/* END SECTION 3 */}

              {/* SECTION 4 */}
              <div className="grid grid-cols-2 gap-6 items-center">
                {/* IMAGE */}
                <div>
                  {/* TODO: REPLACE SINGLE IMAGE WITH GRID OF IMAGES AS IN THE DESIGN */}
                  <Image
                    className="object-cover aspect-square max-h-[25rem]"
                    src={DeliveryPersonStandingBehindCar}
                    alt="black female courier carrying packages looking delivery address city"
                  />
                  {/* <Image />
                  <Image /> */}
                </div>
                {/* END IMAGE */}
                <div>
                  <div className="text-xs bg-primary text-secondary inline-block py-1 px-2 mb-1">
                    History
                  </div>
                  <div className="font-semibold text-2xl text-secondary">
                    We have established strong relationships with our partners
                  </div>
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi neque ipsam beatae sit sunt esse dolore, officia id
                    consectetur eos ipsa adipisci ab, assumenda fuga nostrum
                    laboriosam? Iusto, eveniet quo!
                  </p>

                  {/* <div className="mt-10">
                    <Button variant={"secondary"} asChild>
                      <Link href={"/contact"}>Contact Us</Link>
                    </Button>
                  </div> */}
                </div>
              </div>
              {/* END SECTION 4 */}
            </div>
            {/* END SECTIONS GRID CONTAINER */}
          </div>
        </section>

        {/* BRANCHES SECTION */}
        <section className="my-20">
          <div className="container">
            <div className="max-w-md mb-6">
              <h2 className="text-secondary">
                We have branches in many regions of the worlds
              </h2>
              <p className="text-sm mt-2">
                We have experience in handling the formalities and documentation
                required for your imports and exports. We work with all
                international station to guarantee that your load will safely
                reach without more delays.
              </p>
            </div>

            {/* BRANCHES GRID */}
            <div className="grid grid-cols-4 gap-5">
              {/* BRANCH CARD 1*/}
              <div className="h-[400px] relative">
                <Image
                  src={Building1}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 -mb-5 bg-secondary text-white inline-block p-4 mx-auto left-1/2 -translate-x-1/2 w-5/6">
                  {/* ICON */}
                  {/* END ICON */}

                  {/* NAME */}
                  <div className="text-lg font-semibold text-primary mb-3">
                    Transp Shipping Co. USA
                  </div>
                  {/* END NAME */}

                  {/* BRANCH DETAILS */}
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="text-primary font-medium">
                        Address:{" "}
                      </span>

                      <span>
                        123 Main Street, Suite 500, New York, NY 10001, USA
                      </span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">
                        Phone Number:
                      </span>

                      <span>+1-555-555-555</span>
                    </div>

                    <div>
                      <span className="text-primary font-medium">Email: </span>

                      <span>contact@transp.eu.com</span>
                    </div>
                  </div>
                  {/* END BRANCH DETAILS */}
                </div>
              </div>
              {/* END BRANCH CARD 1*/}

              {/* BRANCH CARD 2*/}
              <div className="h-[400px] relative">
                <Image
                  src={Building2}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 -mb-5 bg-secondary text-white inline-block p-4 mx-auto left-1/2 -translate-x-1/2 w-5/6">
                  {/* ICON */}
                  {/* END ICON */}

                  {/* NAME */}
                  <div className="text-lg font-semibold text-primary mb-3">
                    Shipping Co. Europe
                  </div>
                  {/* END NAME */}

                  {/* BRANCH DETAILS */}
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="text-primary font-medium">
                        Address:{" "}
                      </span>

                      <span>25 Avenue des Champs-Elysees, Paris, France</span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">
                        Phone Number:
                      </span>

                      <span>+1-555-555-555</span>
                    </div>

                    <div>
                      <span className="text-primary font-medium">Email: </span>

                      <span>contact.eu@transp.eu.com</span>
                    </div>
                  </div>
                  {/* END BRANCH DETAILS */}
                </div>
              </div>
              {/* END BRANCH CARD 2*/}

              {/* BRANCH CARD 3*/}
              <div className="h-[400px] relative">
                <Image
                  src={Building3}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 -mb-5 bg-secondary text-white inline-block p-4 mx-auto left-1/2 -translate-x-1/2 w-5/6">
                  {/* ICON */}
                  {/* END ICON */}

                  {/* NAME */}
                  <div className="text-lg font-semibold text-primary mb-3">
                    Transp Shipping Co. Asia Pacific
                  </div>
                  {/* END NAME */}

                  {/* BRANCH DETAILS */}
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="text-primary font-medium">
                        Address:{" "}
                      </span>

                      <span>1-2-1 Otemachi, Chiyoda-ku, Tokyo, Japan</span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">
                        Phone Number:
                      </span>

                      <span>+1-555-555-555</span>
                    </div>

                    <div>
                      <span className="text-primary font-medium">Email: </span>

                      <span>contact.jp@transp.eu.com</span>
                    </div>
                  </div>
                  {/* END BRANCH DETAILS */}
                </div>
              </div>
              {/* END BRANCH CARD 3*/}

              {/* BRANCH CARD 4*/}
              <div className="h-[400px] relative">
                <Image
                  src={Building4}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 -mb-5 bg-secondary text-white inline-block p-4 mx-auto left-1/2 -translate-x-1/2 w-5/6">
                  {/* ICON */}
                  {/* END ICON */}

                  {/* NAME */}
                  <div className="text-lg font-semibold text-primary mb-3">
                    Transp Shipping Co. Middle East
                  </div>
                  {/* END NAME */}

                  {/* BRANCH DETAILS */}
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="text-primary font-medium">
                        Address:{" "}
                      </span>

                      <span>
                        Dubai Logistics City, Building B, Office 203, Dubai, UAE
                      </span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">
                        Phone Number:
                      </span>

                      <span>+1-555-555-555</span>
                    </div>

                    <div>
                      <span className="text-primary font-medium">Email: </span>

                      <span>contact@transp.eu.com</span>
                    </div>
                  </div>
                  {/* END BRANCH DETAILS */}
                </div>
              </div>
              {/* END BRANCH CARD 4*/}
            </div>
            {/* END BRANCHES GRID */}
          </div>
        </section>
        {/* END BRANCHES SECTION */}
      </section>
    </main>
  );
}
