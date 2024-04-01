import {Outlet} from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
    </>
  )
}

export default Layout