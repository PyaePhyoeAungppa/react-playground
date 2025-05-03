// src/lib/auth.ts
import { supabase } from './supabaseClient';

export const logIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    return null;
  }

  return data.user;
};

export const logOut = async () => {
  const {error} = await supabase.auth.signOut();
  if (error){
    console.error("Error signing out:", error.message);
    return false;
  }
  return true;
}