import SearchBar from './search-bar';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8">
            Discover the perfect property in your favorite location
          </p>

          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
