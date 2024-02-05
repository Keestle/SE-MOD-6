function ErrorMessage({ error, resetErrorBoundary }) { // Receives two props error and reset ErrorBoundary from it's parent component. 

  console.error(error); /// log the error to the console for debugging purposes. 


  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  // Will work for errors caused by changing state, but not syntax errors
  return (
    <div className="ErrorMessage">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Try Again?</button>
    </div>
  );
}

export default ErrorMessage;