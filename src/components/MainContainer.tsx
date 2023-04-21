import Navbar from './Navbar';
import Footer from './Footer';

interface Container {
  children: React.ReactNode;
}

export default function MainContainer ({children}:Container) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}