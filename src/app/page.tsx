export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl bg-white shadow-2xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">Great Seat</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover your perfect spot at any event – concerts, movies, games, and more. Great Seat helps you choose the best place to sit, every time.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
          Find My Seat
        </button>
      </div>
    </main>
  );
}