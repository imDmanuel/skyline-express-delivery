// export interface ShipmentDetail {
//   tracking_number: string;
//   origin_city: string;
//   origin_state: string;
//   origin_country: string;
//   destination_city: string;
//   destination_state: string;
//   destination_country: string;
//   ship_date: string;
//   estimated_delivery_date: string;
//   weight: number;
//   shipment_length: number;
//   shipment_width: number;
//   shipment_height: number;
//   contents: {
//     item_id: string;
//     item_name: string;
//     item_description: string;
//     item_quantity: number;
//     item_value: number;
//   }[];
//   recipient_name: string;
//   recipient_company: string;
//   recipient_address: string;
//   recipient_phone_number: string;
//   recipient_email: string;
//   shipper_name: string;
//   shipper_company: string;
//   shipper_address: string;
//   shipper_phone_number: string;
//   shipper_email: string;
//   events: {
//     event_id: string;
//     timestamp: string;
//     location: string;
//     status: string;
//     event_description: string;
//   }[];
// }

export interface Shipment {
  id: number;
  attributes: {
    tracking_number: string;
    ship_date: string;
    estimated_delivery_date: string;
    weight: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    origin_city: string;
    origin_state: string;
    origin_country: string;
    destination_city: string;
    destination_state: string;
    destination_country: string;
    shipment_length: string;
    shipment_width: string;
    shipment_height: string;
    recipient_name: string;
    recipient_address: string;
    recipient_phone: string;
    recipient_email: string;
    shipper_name: string;
    shipper_address: string;
    shipper_phone: string;
    shipper_email: string;
    contents: {
      data: ShipmentContent[];
    };
    shipment_events: {
      data: ShipmentEvent[];
    };
  };
}

export interface ShipmentContent {
  id: number;
  attributes: {
    item_name: string;
    item_description: string;
    item_quantity: string;
    item_value: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    item_id: string;
  };
}

export interface ShipmentEvent {
  id: number;
  attributes: {
    event_id: string;
    timestamp: string;
    location: string;
    status: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ShipmentApiResponse {
  data: Shipment[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
