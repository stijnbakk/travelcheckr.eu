/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RULESET_URI: string;
    readonly VITE_RULESET_SECRET: string;

    readonly VITE_QUERYLOG_URI: string;
    readonly VITE_QUERYLOG_DB_ID: string;
    readonly VITE_QUERYLOG_ORIGIN: "development" | "staging" |"production";

    readonly VITE_RULEFEEDBACK_URI: string;
    readonly VITE_RULEFEEDBACK_DB_ID: string;
    readonly VITE_RULEFEEDBACK_ORIGIN: "development" | "staging" |"production";

    readonly VITE_NEWSLETTERSIGNUP_DB_ID: string;

    readonly VITE_FEEDBACK_DB_ID: string;

    readonly VITE_DEPLOY_MODE: "development" | "beta" | "live";
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }