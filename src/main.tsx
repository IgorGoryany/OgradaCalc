import ReactDOM from 'react-dom/client';

import App from './app/App.tsx';
import './index.scss';
import { FenceProvider } from './app/providers/FenceProvider/FenceProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FenceProvider>
    <App />
  </FenceProvider>,
);
