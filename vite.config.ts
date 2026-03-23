import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/curriculumvitae/',   // 注意末尾斜杠不能少
})
