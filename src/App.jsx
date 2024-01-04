
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import { Skills } from './components'
import NavContextProvider from './components/context/navcontext/NavContextProvider'


function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = '/Portfolio/' element={<Layout />}>
          <Route path='/Portfolio/' element={<Home />} />
          <Route path='/Portfolio/' element={<Skills />} />
        </Route>

    )
)


  return (
    <NavContextProvider>
      <RouterProvider router={router} />

      
    </NavContextProvider>
  )
}

export default App
