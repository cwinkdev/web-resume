'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-base text-baseText"
          role="alert"
          aria-live="assertive"
        >
          <h1 className="text-4xl font-bold mb-4 text-accent">
            Something went wrong
          </h1>
          <p className="text-lg mb-4 text-baseText">
            We&apos;re sorry, but something unexpected happened.
          </p>
          {this.state.error && (
            <details className="mt-4 p-4 bg-base2 rounded-lg max-w-2xl">
            <summary className="cursor-pointer text-accent mb-2">
              Error details
            </summary>
            <pre className="text-sm text-left overflow-auto">
              {this.state.error.toString()}
            </pre>
          </details>
          )}
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="mt-6 px-6 py-3 bg-primary text-base rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base"
            aria-label="Reload the page to try again"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


