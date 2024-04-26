import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import { About, BlogDetails, Blogs, Contact, Destination, Home,Malaysia,Privacy,Singapore,Terms,Thailand,Tours } from './pages';

const App = () => {
  console.log(window.location.hostname);
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blogs/:slug' element={<BlogDetails />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/terms-condition' element={<Terms />} />
              <Route path='/privacy-policy' element={<Privacy />} />
              <Route path='/destination/thailand' element={<Thailand />} />
              <Route path='/destination/malaysia' element={<Malaysia />} />
              <Route path='/destination/singapore' element={<Singapore />} />
            </Route>
              <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App