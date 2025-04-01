import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Renders the matched child route */}
      
      </main>
      <Footer />
    </>
  )
};


export default Layout;