import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Talks = lazy(() => import("./pages/Talks"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Media = lazy(() => import("./pages/Media"));
const Support = lazy(() => import("./pages/Support"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-6 h-6 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
            <Route path="/talks" element={<Suspense fallback={<PageLoader />}><Talks /></Suspense>} />
            <Route path="/podcast" element={<Suspense fallback={<PageLoader />}><Podcast /></Suspense>} />
            <Route path="/media" element={<Suspense fallback={<PageLoader />}><Media /></Suspense>} />
            <Route path="/support" element={<Suspense fallback={<PageLoader />}><Support /></Suspense>} />
            <Route path="/partnerships" element={<Suspense fallback={<PageLoader />}><Partnerships /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
