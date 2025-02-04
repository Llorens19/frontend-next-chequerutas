const SpinnerLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="flex space-x-2">
      <div
        className="w-4 h-4 bg-white rounded-full animate-bounce"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="w-4 h-4 bg-white rounded-full animate-bounce"
        style={{ animationDelay: '0.1s' }}
      ></div>
      <div
        className="w-4 h-4 bg-white rounded-full animate-bounce"
        style={{ animationDelay: '0.2s' }}
      ></div>
      <div
        className="w-4 h-4 bg-white rounded-full animate-bounce"
        style={{ animationDelay: '0.3s' }}
      ></div>
    </div>
  </div>
  );
};

export default SpinnerLoading;