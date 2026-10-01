/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL that receives enquiry form submissions as JSON (POST). */
  readonly VITE_ENQUIRY_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
