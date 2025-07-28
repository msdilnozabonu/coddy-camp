import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/footer";

export const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
