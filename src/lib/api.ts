import { createClient } from '@supabase/supabase-js'
import { sanityClient } from './sanity'
import type { Property } from '../data/properties'
import listingsData from '../data/listings.json'

// You can find these keys in Supabase -> Settings -> API
const supabaseUrl = 'https://ogrffwfunmcrjgpicyfw.supabase.co';
const supabaseKey = 'sb_publishable_IBD-YhP_B9rbx8Xwqt-Pfg_q2Kb44G3';
const supabase = createClient(supabaseUrl, supabaseKey)

export type LeadData = {
  formType: "Contact" | "Finance" | "Appraisal" | "Property Enquiry";
  payload: Record<string, any>;
};

export async function submitLeadForm(data: LeadData): Promise<{ success: boolean; message: string }> {
  const { error } = await supabase
    .from('leads')
    .insert([{ form_type: data.formType, payload: data.payload }])

  if (error) {
    console.error("Error inserting lead:", error);
    throw new Error("Failed to submit form");
  }

  return { success: true, message: "Lead successfully recorded" };
}

export async function getProperties(): Promise<Property[]> {
  const query = `*[_type == "property"] | order(_createdAt desc) {
    "id": _id,
    title,
    address,
    suburb,
    state,
    price,
    priceLabel,
    priceType,
    beds,
    baths,
    cars,
    landArea,
    floorArea,
    type,
    category,
    status,
    features,
    shortDesc,
    description,
    "image": image.asset->url,
    "images": images[].asset->url,
    "floorPlan": floorPlan.asset->url
  }`;
  const properties = await sanityClient.fetch(query);
  return properties.map((p: any) => ({
    ...p,
    image: p.image || listingsData.find((l: any) => l.id === p.id)?.image || "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70"
  }));
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const query = `*[_type == "property" && _id == $id][0] {
    "id": _id,
    title,
    address,
    suburb,
    state,
    price,
    priceLabel,
    priceType,
    beds,
    baths,
    cars,
    landArea,
    floorArea,
    type,
    category,
    status,
    features,
    shortDesc,
    description,
    "image": image.asset->url,
    "images": images[].asset->url,
    "floorPlan": floorPlan.asset->url
  }`;
  const property = await sanityClient.fetch(query, { id });
  if (!property) return null;
  return {
    ...property,
    image: property.image || listingsData.find((l: any) => l.id === property.id)?.image || "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70"
  };
}
