import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ADD THIS PART BELOW *********** vvvvv
  server: {
    watch: {
      usePolling: true,
    },
  },
  // END OF PART TO ADD *********** ^^^^^^^^
});
