const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3">
      <h1 className="text-black font-bold text-2xl text-center mb-2">Loading Application...</h1>
      <div className="h-8 w-8 border-b-2 border-blue-700 animate-spin rounded-full"></div>
    </div>
  );
}

export default Loader;