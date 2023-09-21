"use client";

import React, { useEffect } from "react";
import axios from "axios";

export default function Page() {
  useEffect(() => {
    async function test() {
      const response = await axios.get(
        `http://localhost:1337/api/shipments/?filters[tracking_number][$eq]=dkfjdlkfj`,
        {
          headers: {
            authorization: `Bearer 83a97f6aa57e9f31f6ec7d0c37519f94ddc2a95552a88d9bcfd441906bb17eb37dd1c4820049d1e1438faf5a93c17a80c0aa0ab7796a544b7ac6b134c12f25f71eda69b6839eee1e072b5286e56ccc073b9284d597736a7582ebaca48196ff71af77bb07306f2d5ad8186c981f41b4fc04b79358d99709a514dbff13779703b6`,
          },
        }
      );

      console.log(await response.data);
    }

    test();
  }, []);

  return <div>test page</div>;
}
