export default function UnderConstruction() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-6">
        Portfolio Under Construction
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 text-center animate-pulse">
        Emmanual is leveling up!
      </p>

      <div className="mt-12 w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
    </div>
  );
}
