import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import relay from "vite-plugin-relay";
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [relay, react(), ssr()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "node:fetch": "node-fetch",
    },
}
}

export default config;
