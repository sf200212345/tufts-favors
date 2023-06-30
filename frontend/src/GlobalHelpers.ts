// template code taken from https://supabase.com/docs/guides/getting-started/tutorials/with-expo#initialize-a-react-native-app
// This is a config and initializer for the supabase client and other global values
import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient, Session } from '@supabase/supabase-js';
import { createContext } from 'react';

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

// session can be accessed using useContext hook
const GlobalSession = createContext<Session | null>(null);

/* making default function for all api calls
async function getProfile({ session, setLoading, supabaseFunc, }) {
    try {
        setLoading(true);
        if (!session?.user) throw new Error('No user on the session!');

        let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', session?.user.id)
            .single();
        if (error && status !== 406) {
            throw error;
        }

        if (data) {
            setUsername(data.username);
            setWebsite(data.website);
            setAvatarUrl(data.avatar_url);
        }
    } catch (error) {
        if (error instanceof Error) {
            Alert.alert(error.message);
        }
    } finally {
        setLoading(false);
    }
}*/

export { supabase, GlobalSession };
