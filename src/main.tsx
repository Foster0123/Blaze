import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
          createBrowserRouter, 
          RouterProvider, 
          Route 
} from 'react-router-dom';
import App from './App';
import Error from './components/shared/404';
import './assets/css/index.css';

const router = createBrowserRouter([
 {
  path:"/",
  element: <App />,
  errorElement: <Error />
  
 }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
