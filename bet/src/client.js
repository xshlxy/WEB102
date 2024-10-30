import { createClient } from '@supabase/supabase-js'

const URL = 'https://ebvvtxmmvgkchdcpncyz.supabase.co';
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(URL, API_KEY);