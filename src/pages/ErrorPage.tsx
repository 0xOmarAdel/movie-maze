const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <p className="text-4xl text-gray-200 font-bold">An error occurred!</p>
      <p className="px-5 text-2xl text-gray-300 text-center font-semibold">
        This page doesn't exist or you don't have access to it.
      </p>
    </div>
  );
};

export default ErrorPage;
