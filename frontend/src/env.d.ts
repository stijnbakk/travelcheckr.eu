/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RULESET_URI: string;
    readonly VITE_RULESET_SECRET: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }