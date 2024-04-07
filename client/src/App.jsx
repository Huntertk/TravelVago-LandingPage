import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import { Contact, Destination, Home,Tours } from './pages';

const App = () => {
  console.log(window.location.hostname);
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/contact' element={<Contact />} />
            </Route>
              <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App