import listingsData from "./listings.json";

export type PriceType = "fixed" | "contact" | "offers" | "from";
export type PropertyCategory = "House & Land" | "Dual Key" | "Land" | "Development Opportunity";
export type PropertyStatus = "For Sale" | "For Rent" | "Sold" | "Leased";
export type PropertyType = "House" | "Unit" | "Townhouse" | "Villa" | "Duplex" | "Land";

export type Property = {
  id: string;
  title: string;
  address: string;
  suburb: string;
  state: string;
  price: number;
  priceLabel: string;
  priceType: PriceType;
  beds: number;
  baths: number;
  cars: number;
  landArea: number;
  floorArea: number | null;
  type: PropertyType;
  category: PropertyCategory;
  status: PropertyStatus;
  features: string[];
  shortDesc: string;
  description: string;
  image: string;
  images?: string[];       // up to 5 gallery images from Sanity
  floorPlan?: string;      // optional floor plan image URL
};

export const properties = listingsData as Property[];

/** All unique suburbs from real listings */
export const SUBURBS = [...new Set(properties.map((p) => p.suburb))].sort();

/** All unique states */
export const STATES = [...new Set(properties.map((p) => p.state))].sort();

/** All categories */
export const CATEGORIES: PropertyCategory[] = [
  "House & Land",
  "Dual Key",
  "Land",
  "Development Opportunity",
];

/** Price bracket options */
export const PRICE_BRACKETS = [
  { label: "Any", value: 0 },
  { label: "Under $500K", value: 500000 },
  { label: "Under $750K", value: 750000 },
  { label: "Under $1M", value: 1000000 },
  { label: "Under $1.5M", value: 1500000 },
  { label: "Under $2M", value: 2000000 },
];
