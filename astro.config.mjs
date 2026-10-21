import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agomesadvogados.com.br',
  output: 'static',
  build: { format: 'directory' },
});
