import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register'

import App from './app/App.tsx';
import './app/styles/global/index.scss';
import { FenceProvider } from './app/providers/FenceProvider/FenceProvider.tsx';

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FenceProvider>
    <App />
  </FenceProvider>,
);
