import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dyixhjfuaqsffsmmyaol.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5aXhoamZ1YXFzZmZzbW15YW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MjkzNTEsImV4cCI6MjAyMTAwNTM1MX0.cxK-Sy7xD-tEXSauWezZ92t3LIhIzcyqaYg6JY0JOLU";
export const supabase = createClient(supabaseUrl, supabaseKey);
