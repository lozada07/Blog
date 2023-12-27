import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
},

)
=======
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
>>>>>>> 23e87aaadce06c27604389be0cef377b03deb4d3
