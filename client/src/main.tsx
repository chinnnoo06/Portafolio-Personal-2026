import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/Router'
import { CursorTrail } from './components/ui/CursorTrail'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorTrail />
    <AppRouter/>
  </StrictMode>,
)
