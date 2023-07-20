import { createClient } from '@supabase/supabase-js';

//SUPABASE
export const supabase = createClient(
  'https://qtihtykvrjjjkztgiddt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aWh0eWt2cmpqamt6dGdpZGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NDk2MTEsImV4cCI6MjAwNTQyNTYxMX0.JFbgYPaGO2wkNrpDH4u3LXdefG8pdIdWbV3Weac7wFo'
);
