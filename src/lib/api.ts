import { createClient } from '@supabase/supabase-js'

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
