import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#f9fafb' },
          100: { value: '#f3f4f6' },
          200: { value: '#e5e7eb' },
          300: { value: '#d1d5db' },
          400: { value: '#9ca3af' },
          500: { value: '#6b7280' },
          600: { value: '#4b5563' },
          700: { value: '#374151' },
          800: { value: '#1f2937' },
          900: { value: '#111827' },
          950: { value: '#0a0f1c' },
        },
        blue: {
          50: { value: '#eff6ff' },
          100: { value: '#dbeafe' },
          200: { value: '#bfdbfe' },
          300: { value: '#93c5fd' },
          400: { value: '#60a5fa' },
          500: { value: '#3b82f6' },
          600: { value: '#2563eb' },
          700: { value: '#1d4ed8' },
          800: { value: '#1e40af' },
          900: { value: '#1e3a8a' },
          950: { value: '#172554' },
        },
      },
      fonts: {
        heading: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
        body: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: '#000000' },
          subtle: { value: '#111827' },
          muted: { value: '#1f2937' },
        },
        fg: {
          DEFAULT: { value: '#ffffff' },
          muted: { value: '#9ca3af' },
          subtle: { value: '#6b7280' },
        },
        border: {
          DEFAULT: { value: '#374151' },
          subtle: { value: '#1f2937' },
        },
        accent: {
          DEFAULT: { value: '#3b82f6' },
          subtle: { value: '#1e40af' },
        },
      },
    },
  },
});
