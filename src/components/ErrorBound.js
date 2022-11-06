import { Fallback } from "./Fallback";
import ErrorBoundary from "./Errorboundary";


function ErrorBound() {
    return (
        <ErrorBoundary>
        <Fallback />
      </ErrorBoundary>
    );
  }
  
  export default ErrorBound;
  