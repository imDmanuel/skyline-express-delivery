"use client";

import React from "react";
import ContactForm from "@/components/contact-form";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function ContactPage() {
  return (
    <main>
      {/* CONTACT FORM */}
      <section>
        <div className="container my-10">
          <div className="flex">
            <div className="bg-[#E0F0F6] p-20">
              <h2 className="text-secondary">Get in Touch with Our Company</h2>
              <p className="text-sm mt-4 mb-7">
                Have questions or want to chat? Fill out our contact form, and
                we&apos;ll put you in touch with the right people.
              </p>
              <ContactForm />
            </div>

            <div className="bg-primary/30 px-12 flex items-center">
              <div>
                <div className="text-lg font-semibold text-secondary mb-8">
                  Headquarters
                </div>

                <div className="bg-white p-7">
                  {/* TODO: REPLACE WITH LOGO */}
                  <div>Transp</div>

                  <p className="my-3">
                    4517 Washingtin Ave. Manchester. Kentucky 39495
                  </p>

                  <div className="space-y-3 mb-7">
                    <div className="flex space-x-2 text-sm items-center font-light">
                      <HiOutlinePhone className="text-primary" />

                      <div>+01-246-357 (Anytime 27/7)</div>
                    </div>
                    <div className="flex space-x-2 text-sm items-center font-light">
                      <HiOutlineEnvelope className="text-primary" />

                      <div>contact@trasp.eu.com</div>
                    </div>
                  </div>

                  <hr />

                  <div className="font-semibold mt-7">
                    Hours: 8:00 -17:00, Mon - Sat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CONTACT FORM */}
    </main>
  );
}
