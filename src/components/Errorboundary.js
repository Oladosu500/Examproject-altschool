import React, { Component } from "react";
import "./style.css"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true
    };
  }

  static getDerivedStateFrontError(error) {
    return {
      hasError: false
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rep1">
          <strong>Warning!</strong> This alert box shows ErrorBoundary in
          action.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
