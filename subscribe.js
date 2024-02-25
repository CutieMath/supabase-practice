import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

console.log("RUNNING x");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const mySubscription = supabase
  .channel("project01")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
    },
    (payload) => console.log(payload)
  )
  .subscribe();
