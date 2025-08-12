import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log("Service Worker registered:", reg))
      .catch(err => console.log("Service Worker registration failed:", err));
  });
}

createRoot(document.getElementById("root")!).render(<App />);
