import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

  }

  render() {
    if (this.state.hasError) {
      return <h1 className="bg-gray-500 w-full text-red-100 border-2 px-10 py-2">Something went wrong...</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
