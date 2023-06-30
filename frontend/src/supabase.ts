// template code taken from https://supabase.com/docs/guides/getting-started/tutorials/with-expo#initialize-a-react-native-app
// This is a config and initializer for the supabase client
import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
        return SecureStore.getItemAsync(key);
    },
    setItem: (key: string, value: string) => {
        SecureStore.setItemAsync(key, value);
    },
    removeItem: (key: string) => {
        SecureStore.deleteItemAsync(key);
    }
};

// url and anon from supabase project settings > API
const supabaseUrl = 'https://nwmtddhsyijxsmoqsizg.supabase.co';
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bXRkZGhzeWlqeHNtb3FzaXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjQyODMsImV4cCI6MjAwMzY0MDI4M30.0o3QUKQL03mz9G8IFreiVpV6E3BM96mTWkHO9TbvTLg';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: ExpoSecureStoreAdapter as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
});

export default supabase;