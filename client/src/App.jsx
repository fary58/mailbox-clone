
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inbox from './components/Inbox'
import Body from './components/Body'
import Mail from './components/Mail'
import { useEffect } from 'react'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
    ]
  },
  
])

function App() {
  

  return (
    <div className='bg-[#F6F8FC] h-screen'>
      
      <RouterProvider router={appRouter} />
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
      </div>
    </div>
  )
}

export default App
