import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="container-fluid p-0 bg-light">
      <NavigationBar />
      <section>
        <div id="app">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RootLayout;
