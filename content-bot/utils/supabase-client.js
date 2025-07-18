import { createClient } from '@supabase/supabase-js';
import { logger } from './logger.js';

let supabase;

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials. Please check your .env file.');
    }

    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}

export async function testSupabaseConnection() {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client.from('categories').select('count').limit(1);
    
    if (error) throw error;
    
    logger.info('Supabase connection successful');
    return true;
  } catch (error) {
    logger.error('Supabase connection failed:', error.message);
    return false;
  }
}

export async function getCategories() {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data;
}

export async function createPage(pageData) {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('pages')
    .insert([pageData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getRecentPages(limit = 10) {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('pages')
    .select('title, slug')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}