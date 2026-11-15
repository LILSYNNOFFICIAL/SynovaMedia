import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        obsidian: { value: "#07090d" },
        graphite: { value: "#10151d" },
        silver: { value: "#e7edf5" },
        mist: { value: "#a8b2c1" },
        electric: { value: "#8bbcff" },
        ice: { value: "#c6e4ff" }
      },
      fonts: {
        heading: { value: "Manrope, sans-serif" },
        body: { value: "DM Sans, sans-serif" }
      }
    }
  }
});

export const system = createSystem(defaultConfig, config);