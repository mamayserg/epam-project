import React, { Component, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State>  {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="bg-gray-500 w-full text-red-100 border-2 px-10 py-2">
          Something went wrong...
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
