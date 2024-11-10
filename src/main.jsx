import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'

// localStorage.clear() 
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  // </StrictMode>,
)
