import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="max-w-md mx-auto text-center">
        <div className="text-7xl sm:text-8xl font-bold text-brand-200 tracking-tight mb-4">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
        >
          <ArrowLeft size="16" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
