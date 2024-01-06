import { Header } from "@/components/header";
import Image from "next/image";
import HomeHero from "@/assets/images/home-hero.jpg";
import AleaBrandLogo from "@/assets/images/alea-brand-logo.png";
import BoatTripsBrandLogo from "@/assets/images/boattrips-brand-logo.png";
import GoldStarBrandLogo from "@/assets/images/goldstar-brand-logo.png";
import KangarooExpressDeliveryLogo from "@/assets/images/kangarooexpress-brand-logo.png";
import LogisticsDeliveryLogo from "@/assets/images/logistics-delivery-logo.png";
import RoboticArmWarehouse from "@/assets/images/robotic arm2.jpg";
import ShipTrainPlaneTruck from "@/assets/images/ship-train-plane-truck.png";
import ContainerStacked from "@/assets/images/containers-stacked.jpg";
import ContainersDockyard from "@/assets/images/containers-dockyard.jpg";
import MonitorIcon from "@/assets/icons/monitor-icon.png";
import GlobeIcon from "@/assets/icons/globe.png";
import BossIcon from "@/assets/icons/boss.png";
import CheckedIcon from "@/assets/icons/checked.png";
import CargoShipArialView from "@/assets/images/aerial-view-cargo-ship-cargo-container-harbor.jpg";
import PersonReceivingPackage from "@/assets/images/person receiving package.png";
import WorkerInVan from "@/assets/images/young-manual-worker-talking-his-female-colleague-while-sorting-packages-shipment-delivery-van.jpg";
import AirPlaneIcon from "@/assets/icons/airplane.png";
import BrowserIcon from "@/assets/icons/browser.png";
import CargoShipIcon from "@/assets/icons/cargo-ship.png";
import DeliveryTruckIcon from "@/assets/icons/delivery.png";
import ForkliftIcon from "@/assets/icons/forklift.png";
import GlobalIcon from "@/assets/icons/global.png";
import MoneyIcon from "@/assets/icons/money.png";
import PlaneIcon from "@/assets/icons/plane.png";
import PublicTransportIcon from "@/assets/icons/public-transport.png";
import SubwayIcon from "@/assets/icons/subway.png";
import { Button } from "@/components/ui/button";
import {
  Timeline,
  TimelineItem,
  TimelineItemContent,
  TimelineItemIcon,
} from "@/components/timeline";
import HandHoldingCard from "@/assets/icons/card.png";
import { AchievementCard } from "@/components/achievement-card";
import { Faqs } from "@/components/Faqs";
import { OfferCard } from "@/components/offer-card";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="relative h-[80vh]">
          {/* HERO IMAGE AN`D OVERLAY */}
          <Image
            fill
            src={HomeHero}
            alt="Cargo ships docked"
            className="object-cover -z-10"
          />
          <div className="absolute -z-[9] inset-0 bg-black/40"></div>
          {/* END HERO IMAGE AND OVERLAY */}
          <div className="container h-full flex items-center text-white">
            <div className="max-w-xl">
              <div className="font-semibold text-sm">
                Logistics & Transportation
              </div>
              <h1 className="font-bold text-4xl leading-10 my-4">
                Digital and Trusted Transport Logistic Company
              </h1>
              <p className="text-sm">
                Our experienced team of problem solvers and a commitment to
                always align with our client&apos;s business goals and
                objectives
              </p>
            </div>
          </div>
        </section>
        {/* END HERO */}

        {/* TRUSTED BRANDS BANNER */}
        {/* TODO: MAKE THIS ELEMENT TO PAN OR SCROLL ON SMALL SCREEN SIZES */}
        <section className="bg-[#E0F0F6] overflow-x-hidden">
          <div className="container gap-6 flex items-center py-6">
            <div className="w-[180px] font-semibold text-secondary">
              We are <span className="text-primary">trusted</span> by major
              global brands
            </div>
            <div className="flex flex-1 justify-between gap-6 h-14">
              {/* BRANDS */}
              <Image
                className="object-contain"
                src={AleaBrandLogo}
                alt="Alea"
              />
              <Image
                className="object-contain"
                src={BoatTripsBrandLogo}
                alt="Boat Trips"
              />
              <Image
                className="object-contain"
                src={GoldStarBrandLogo}
                alt="Goldstar"
              />
              <Image
                className="object-contain"
                src={KangarooExpressDeliveryLogo}
                alt="Kangaroo Express Delivery"
              />
              <Image
                className="object-contain"
                src={LogisticsDeliveryLogo}
                alt="Logistics Delivery"
              />
              {/* END BRANDS */}
            </div>
          </div>
        </section>
        {/* END TRUSTED BRANDS BANNER */}

        {/* WHAT WE OFFER */}
        <section>
          <div className="container my-16">
            {/* SECTION TITLE */}
            <div className="max-w-md">
              <h2 className="font-bold text-2xl text-secondary">
                What we offer
              </h2>
              <p className="text-sm mt-2 mb-10">
                Welcome to our transportation services agency. We are the best
                at our transportation service ever.
              </p>
            </div>
            {/* END SECTION TITLE */}

            {/* SECTION CONTENT - OFFER CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEA FORWARDING */}
              <OfferCard title="Sea Forwarding" icon={CargoShipIcon}>
                At Skyline Express Delivery, we take immense pride in being your
                trusted partner for all your sea forwarding needs. Our
                unwavering commitment to efficiency, reliability, and precision
                drives us to provide a comprehensive suite of services designed
                to elevate your cargo transportation experience.
              </OfferCard>
              {/* END SEA FORWARDING */}

              {/* AIR FREIGHT FORWARDING */}
              <OfferCard title="Air Freight Forwarding" icon={AirPlaneIcon}>
                Skyline Express Delivery, is your trusted partner for all your
                air freight forwarding needs. With our unwavering commitment to
                efficiency, reliability, and precision, we offer a comprehensive
                suite of services designed to elevate your cargo transportation
                experience.
              </OfferCard>
              {/* END AIR FREIGHT FORWARDING */}

              {/* LAND TRANSPORTATION */}
              <OfferCard title="Land Transportation" icon={DeliveryTruckIcon}>
                At Skyline Express Delivery, we can be your tested and trusted
                partner for all your land transportation needs. We are committed
                to providing reliable, efficient, and comprehensive services to
                meet your cargo transportation requirements on land. With a
                focus on precision, safety, and customer satisfaction, we offer
                a diverse range of land transportation solutions designed to
                elevate your logistics experience.
              </OfferCard>
              {/* END LAND TRANSPORTATION */}

              {/* WAREHOUSE AND DISTRIBUTION */}
              <OfferCard title="Warehouse & Distribution" icon={ForkliftIcon}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                omnis reprehenderit id! Hic modi sed ratione soluta eum
                accusamus, itaque magnam autem ipsum quo voluptatum mollitia,
                nemo voluptate, sapiente vitae.
              </OfferCard>
              {/* END WAREHOUSE AND DISTRIBUTION */}

              {/* RAILWAY LOGISTICS */}
              <OfferCard title="Railway Logistics" icon={SubwayIcon}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                dolores, necessitatibus ad adipisci perferendis quibusdam
                debitis assumenda, culpa voluptatibus odio error neque pariatur
                ratione, quod nostrum rem nisi porro iure?
              </OfferCard>
              {/* END RAILWAY LOGISTICS */}

              {/* CROSS BORDER */}
              <OfferCard title="Cross Border" icon={GlobeIcon}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores eligendi animi, maxime nam nemo tempore quae! At quae
                iusto molestias totam similique praesentium minima quod
                mollitia, fugiat odit cupiditate neque.
              </OfferCard>
              {/* END CROSS BORDER */}
            </div>
            {/* END SECTION CONTENT - OFFER CARDS */}
          </div>
        </section>
        {/* END WHAT WE OFFER */}

        {/* PROUD TO DELIVER EXCELLENCE EVERY TIME */}
        <section className="bg-primary md:bg-primary/40 relative">
          <div className="container h-96 flex items-center">
            <div className="max-w-sm text-white md:text-black">
              <h2>Proud to Deliver Excellence Every Time</h2>

              <p className="mt-5 mb-12 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                commodi magnam corporis sint cumque exercitationem veniam maxime
                non! Ipsum numquam incidunt iure ipsa vero quae tenetur est
                adipisci sed molestiae.
              </p>

              <Button variant={"secondary"}>Contact Us</Button>
            </div>
          </div>

          <div className="invisible md:visible md:w-1/2 md:h-full md:absolute md:right-0 md:top-0">
            <Image
              fill
              className="-z-10 md:z-0 object-cover -scale-x-100 [clip-path:polygon(0_0,_100%_0%,_80%_100%,_0%_100%)]"
              src={ShipTrainPlaneTruck}
              alt=""
            />
          </div>
        </section>
        {/* END PROUD TO DELIVER EXCELLENCE EVERY TIME */}

        {/* HOW IT WORKS */}
        <section>
          <div className="container my-16">
            {/* SECTION TITLE */}
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-secondary">How It Works</h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                sed consectetur architecto odio doloribus aperiam quis possimus
                assumenda at et quod mollitia.
              </p>
            </div>
            {/* END SECTION TITLE */}

            {/* SECTION BODY */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-10 items-center">
              {/* SECTION FEATURED IMAGE */}
              <div className="relative pb-8">
                <Image src={ContainerStacked} alt="" />
                <div className="bg-secondary max-w-sm text-white -mt-20 py-6 px-7 mx-auto relative z-10">
                  <div className="font-semibold">
                    We have over 25 years of experience in this field
                  </div>
                  <p className="text-xs mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam eligendi enim suscipit nemo fugit minus nulla, nobis
                    quidem ipsa dolore similique!
                  </p>
                </div>
              </div>
              {/* END SECTION FEATURED IMAGE */}

              {/* HOW IT WORKS TIMELINE */}
              <div>
                <Timeline>
                  <TimelineItem>
                    <TimelineItemIcon icon={MonitorIcon} />
                    <TimelineItemContent title="Customer places order">
                      Inspection and quality check of goods
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineItemIcon icon={MoneyIcon} />
                    <TimelineItemContent title="Payment successful">
                      Payoneer, Paypal, or Visa master card
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineItemIcon icon={ForkliftIcon} />
                    <TimelineItemContent title="Warehoulse receives order">
                      Check the accuracy of the goods
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineItemIcon icon={PlaneIcon} />
                    <TimelineItemContent title="Item picked, packed & shipped">
                      Ship the goods to a local carrier
                    </TimelineItemContent>
                  </TimelineItem>
                  <TimelineItem isLast>
                    <TimelineItemIcon icon={BrowserIcon} />
                    <TimelineItemContent title="Delivered & Measure success">
                      Update order status on the system
                    </TimelineItemContent>
                  </TimelineItem>
                </Timeline>
              </div>
              {/* END HOW IT WORKS TIMELINE */}
            </div>
            {/* END SECTION BODY */}
          </div>
        </section>
        {/* END HOW IT WORKS */}

        {/* ACHIEVEMENTS COUNTER */}
        <section className="relative min-h-[400px] flex items-center py-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src={ContainersDockyard}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/95 "></div>
          </div>

          <div className="container">
            {/* SECTION TITLE */}
            <div className="text-center mx-auto max-w-lg">
              <h2 className="text-primary max-w-sm mx-auto">
                World&apos;s Leading Companies For Over 80 Years
              </h2>
              <p className="text-sm mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                necessitatibus culpa dicta esse delectus quibusdam.
              </p>
            </div>
            {/* END SECTION TITLE */}

            {/* ACHIEVEMENTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <AchievementCard icon={HandHoldingCard} number={380000}>
                Parcels Shipped Safely
              </AchievementCard>
              <AchievementCard icon={GlobeIcon} number={120000}>
                Cities Served Worldwide
              </AchievementCard>
              <AchievementCard icon={BossIcon} number={2280}>
                Satisfied Clients
              </AchievementCard>
              <AchievementCard icon={CheckedIcon} number={1200}>
                Companies We&apos;ve Helped
              </AchievementCard>
            </div>
            {/* END ACHIEVEMENTS */}
          </div>
        </section>
        {/* END ACHIEVEMENTS COUNTER */}

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section>
          <div className="container grid gap-8 grid-cols-1 md:grid-cols-[4fr_6fr] my-16 items-center">
            {/* SECTION LEFT */}
            <div>
              {/* TITLE */}
              <div>
                <h2 className="text-secondary">FAQs</h2>
                <p className="text-sm mt-3 mb-6">
                  Feeling inquisitive? Have a read through of some of our FAQs
                  or contact our supporters for help.
                </p>
              </div>
              {/* END TITLE */}

              {/* IMAGES */}
              <div className="grid grid-cols-2 gap-3">
                <Image src={CargoShipArialView} alt="" className="col-span-2" />
                <Image src={PersonReceivingPackage} alt="" />
                <Image src={WorkerInVan} alt="" />
              </div>
              {/* END IMAGES */}
            </div>
            {/* END SECTION LEFT */}

            {/* SECTION RIGHT */}
            <div>
              <Faqs />

              <div className="font-semibold border-t mt-10 pt-7">
                <p>Need more help?</p>
                <Button className="text-black mt-4">Contact Us</Button>
              </div>
            </div>

            {/* END SECTION RIGHT */}
          </div>
        </section>
        {/* END FREQUENTLY ASKED QUESTIONS */}

        {/* CALL TO ACTION BANNER */}
        <section className="relative">
          <div className="container py-14">
            <div className="text-white">Have any ideas in your mind?</div>
            <div className="text-primary font-medium text-2xl">
              Create your next project with us
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <Image
              fill
              src={CargoShipArialView}
              alt=""
              className="object-cover"
            />
            <div className="absolute z-10 inset-0 bg-secondary/95"></div>
          </div>
        </section>
        {/* END CALL TO ACTION BANNER */}

        {/* PROUD OF WORKFORCE SECTION */}
        <section>
          <div className="container my-16">
            {/* SECTION TITLE */}
            <div className="text-center max-w-sm mx-auto">
              <div className="text-sm">
                Delivering Results for Industry Leaders
              </div>
              <h2 className="mt-1 mb-10 text-secondary">
                We are proud of our workforce and have worked hard
              </h2>
            </div>
            {/* END SECTION TITLE */}

            {/* SECTION BODY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {/* SECTION FEATURED IMAGE */}
              <div className="relative">
                {/* IMAGE AND OVERLAY */}
                <div className="my-3 relative">
                  <Image
                    src={RoboticArmWarehouse}
                    alt=""
                    className="aspect-square object-cover h-[400px]"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                {/* END IMAGE AND OVERLAY */}

                <div className="-z-10 absolute top-0 w-36 bg-secondary h-full -skew-x-12 -translate-x-1/2 left-1/2"></div>
              </div>
              {/* END SECTION FEATURED IMAGE */}

              {/* SECTION CONTENT DETAILS */}
              <div>
                <div className="text-xl font-bold text-secondary">
                  Fast shipping with the most modern technology
                </div>

                <p className="text-sm mt-5 mb-7">
                  Over the years, we have worked together to expand our network
                  of partners to deliver reliability and consistency. We&aspo;ve
                  also made significant strides to tightly integrate technology
                  with our processes, giving our clients greater visibility into
                  every engagement.
                </p>

                <ul className="text-sm grid grid-cols-2 grid-rows-3 gap-y-4 gap-x-7 grid-flow-col list-image-[url(/icons/check.svg)]">
                  <li>Task tracking</li>
                  <li>Task visualisation</li>
                  <li>Meet deadline faster</li>
                  <li>Create task dependencies</li>
                  <li>Share files, discuss</li>
                  <li>Track time spent on each project</li>
                </ul>
              </div>
              {/* END SECTION CONTENT DETAILS */}
            </div>
            {/* END SECTION BODY */}
          </div>
        </section>
        {/* END PROUD OF WORKFORCE SECTION */}

        {/* GOOGLE MAP */}
        {/* END GOOGLE MAP */}
      </main>
    </>
  );
}
