import { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoadingSpinner from './components/Loader';

const Layout = lazy(() => import('./components/layout/Layout'));
const About = lazy(() => import('./pages/About'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const Destination = lazy(() => import('./pages/Destination'));
const Dubai = lazy(() => import('./pages/Dubai'));
const Home = lazy(() => import('./pages/Home'));
const Malaysia = lazy(() => import('./pages/Malaysia'));
const Packages = lazy(() => import('./pages/Packages'));
const PackagesDetails = lazy(() => import('./pages/PackagesDetails'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Singapore = lazy(() => import('./pages/Singapore'));
const Terms = lazy(() => import('./pages/Terms'));
const Thailand = lazy(() => import('./pages/Thailand'));
const Tours = lazy(() => import('./pages/Tours'));
const Veitnam = lazy(() => import('./pages/Veitnam'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LoadingSpinner />}>
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
              <Route path='/packages' element={<Packages />} />
              <Route path='/packages/:slug' element={<PackagesDetails />} />
              <Route path='/destination/thailand' element={<Thailand />} />
              <Route path='/destination/malaysia' element={<Malaysia />} />
              <Route path='/destination/singapore' element={<Singapore />} />
              <Route path='/destination/vietnam' element={<Veitnam />} />
              <Route path='/destination/dubai' element={<Dubai />} />
            </Route>
              <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App