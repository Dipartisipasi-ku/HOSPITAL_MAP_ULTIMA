// env.js - TEMPLATE KONFIGURASI
// JANGAN commit file ini dengan nilai asli ke Git
// Duplikat menjadi env.local.js atau set via server environment
// File ini HANYA untuk development, di production inject via server

window.ENV = window.ENV || {};

// Ganti dengan URL & Anon Key project Supabase kamu
// Cara aman: set via backend injection, bukan hardcode di repo public
window.ENV.SUPABASE_URL = "https://hgxtsgiabjkofimgbwek.supabase.co"; // contoh: "https://xxxxxxxx.supabase.co"
window.ENV.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneHRzZ2lhYmprb2ZpbWdid2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MTA4NDQsImV4cCI6MjEwMzk4Njg0NH0.MDW8sDk04fzxko8ZN8piEWBYE7zxTDzExdjQNafTXxY"; // contoh: "eyJhbGciOi..."

// Untuk Vite/Node, kamu bisa pakai import.meta.env:
// export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
// export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
