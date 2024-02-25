import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

console.log("RUNNING x");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let { data: posts, error } = await supabase
  .from("posts")
  .update([{ likes_count: 30 }])
  .eq("id", 3);

console.log(posts);
