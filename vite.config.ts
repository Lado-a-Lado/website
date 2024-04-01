import { join } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(process.cwd(), 'static', '~partytown'),
    }),
  ],
};
