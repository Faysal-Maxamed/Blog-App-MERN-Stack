import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // saxan halkan!
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Toaster } from 'react-hot-toast'
import UseContext, { UserProvider } from './hooks/useUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// isticmaal ReactDOM.createRoot sidaan:
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);

export default router;
