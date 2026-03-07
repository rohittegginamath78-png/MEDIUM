import './App.css'
import { Routes ,Route , BrowserRouter  } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/SIgnin'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
