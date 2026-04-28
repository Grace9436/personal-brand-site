import { Component, type ReactNode, type ErrorInfo } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
              <RefreshCw size="28" className="text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Something went wrong
            </h1>
            <p className="text-gray-500 mb-2">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <p className="text-xs text-gray-400 mb-8 font-mono bg-gray-50 rounded p-2 truncate">
              {this.state.error?.message}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                <RefreshCw size="16" />
                Refresh Page
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft size="16" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
