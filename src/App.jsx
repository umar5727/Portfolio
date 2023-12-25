
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import { Skills } from './components'


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
    <>
      <RouterProvider router={router} />

      
    </>
  )
}

export default App
