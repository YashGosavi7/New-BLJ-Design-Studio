// Fallback declaration so TS can resolve the generated Supabase types module
// This will be overridden automatically when Supabase regenerates proper types.
declare module "./types" {
  export type Database = any;
}
