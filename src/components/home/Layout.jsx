import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0a0a',
      color: '#ffffff',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '64px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;