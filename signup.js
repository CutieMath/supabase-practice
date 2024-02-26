import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

console.log("RUNNING x");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let { user, error } = await supabase.auth.signUp({
  email: "yuxin_ye+test03@protonmail.com",
  password: "banana-forest-moon",
});

console.log(user);
console.log(error);
