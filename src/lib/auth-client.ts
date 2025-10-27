import { supabase } from '@/lib/supa';

export async function signUp({ name, email, phone, password }: { name: string; email: string; phone?: string; password: string; }) {
  return supabase.auth.signUp({ email, password, options: { data: { name, phone } } });
}

export async function signIn({ email, password }: { email: string; password: string; }) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}
