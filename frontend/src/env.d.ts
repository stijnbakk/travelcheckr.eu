/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RULESET_URI: string;
    readonly VITE_RULESET_SECRET: string;

    readonly VITE_QUERYLOG_URI: string;
    readonly VITE_QUERYLOG_DB_ID: string;
    readonly VITE_QUERYLOG_ORIGIN: "development" | "staging" |"production";
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }