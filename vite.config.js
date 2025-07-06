import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
 

  theme:{
    extend:{
      clipPath: {
        custom: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)', // Example: angled bottom
      },
      keyframes:{
        blob:{
          '0%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1)'},
          '66%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(1)'},
        },
      },
      animation:{
        blob: 'blob 10s infinite'
      },
    },
  }
})
