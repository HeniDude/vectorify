import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  theme: {
    colors: {
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      yellow: {
        400: "#facc15",
        500: "#eab308",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  shortcuts: {
    btn: "px-4 py-2 rounded-full font-semibold transition-colors duration-300",
    "btn-primary": "bg-black text-white hover:bg-gray-800",
  },
});
