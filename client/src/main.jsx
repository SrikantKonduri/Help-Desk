import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login, Register,ConnectFB } from './components/Account.jsx';
import { AgentScreen } from './components/AgentScreen.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/connect",
    element: <ConnectFB />
  },
  {
    path: "/agent-screen",
    element: <AgentScreen /> 
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
