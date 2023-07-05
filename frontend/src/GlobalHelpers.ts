// template code taken from https://supabase.com/docs/guides/getting-started/tutorials/with-expo#initialize-a-react-native-app
// This is a config and initializer for the supabase client and other global values
import 'react-native-url-polyfill/auto';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { createClient, Session } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { useSupabaseProps } from './';

// needed by the supabase client to store the JWT auth token locally
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

// making default function for all api calls. The calling function must also be async.
// setLoading is a state set in the calling function, use it to make a loading animation. Can have a value of null if not desired
// supabaseFunc is the function of the form () => supabase.from('profiles').upsert(updates), for example
async function useSupabase({ setLoading, supabaseFunc }: useSupabaseProps) {
    const session = useContext(GlobalSession);
    let returnData = null;
    try {
        console.log('in useSupabase');
        if (setLoading) {
            setLoading(true);
        }

        if (!session?.user) throw new Error('No user on the session!');

        console.log('Trying to get data');
        let { data, error, status } = await supabaseFunc();

        if (error || status >= 300) throw error;
        console.log('data received:');
        console.log(data);
        if (data) returnData = data;
    } catch (error) {
        if (error instanceof Error) {
            Alert.alert(error.message);
        }
    } finally {
        if (setLoading) {
            setLoading(false);
        }
        return returnData;
    }
}

export { supabase, GlobalSession, useSupabase };
