import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ndxfxcoptorfwcpwoyhl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keGZ4Y29wdG9yZndjcHdveWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzOTcxMzcsImV4cCI6MjA0Nzk3MzEzN30.dmFUVFAyKhLvtesQxjrunhEYKTbdJfL_upWVnn3niYg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
