import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
