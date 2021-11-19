declare module "tailwindcss";

interface Helpers {
  addUtilities(...args: any[]): any;
  addComponents(...args: any[]): any;
  addBase(...args: any[]): any;
  addVariant(name: string, callback: (...args: any[]) => void): any;
  e(...args: any[]): any;
  prefix(...args: any[]): any;
  theme(...args: any[]): any;
  variants(...args: any[]): any;
  config(...args: any[]): any;
  postcss: any;
}

interface PluginOptions {
  variantPrefix?: string;
  skipAttributeNames?: boolean;
}

declare module "tailwindcss/plugin" {
  const withOptions: (
    plugin: (options: PluginOptions) => (helpers: Helpers) => void
  ) => {
    handler: (helpers: Helpers) => void;
  };
}
