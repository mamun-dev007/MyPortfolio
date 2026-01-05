import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";



const App = () => {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Professional loading experience - 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading name="MD Mamun Mia" />;
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f0a33",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default App;
