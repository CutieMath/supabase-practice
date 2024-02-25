import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

console.log("RUNNING x");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let { data: posts, error } = await supabase
  .from("posts")
  .insert([{ user_name: "CM", body: "Insert from the JS client" }]);

console.log(posts);
