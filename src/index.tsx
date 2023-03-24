
import {createRoot} from 'react-dom/client';
import App from './components/App';
const el = document.getElementById('root');

const root = createRoot(el!);

const searchApiEndPoint = "https://registry.npmjs.org/-/v1/search?text=react";




root.render(<App />);