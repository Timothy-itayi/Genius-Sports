import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0B0D17] text-white font-roboto min-h-screen">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <img
            src="https://placehold.co/50x50"
            alt="Genius Sports Logo"
            className="h-10"
          />
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-white">
            Why Genius?
          </a>
          <a href="#" className="text-white">
            Products
          </a>
          <a href="#" className="text-white">
            Customers
          </a>
          <a href="#" className="text-white">
            Learn
          </a>
          <a href="#" className="text-white">
            Company
          </a>
        </nav>
        <button className="bg-gray-700 text-white py-2 px-4 rounded-full">
          Contact Sales
        </button>
      </header>

      <main className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Welcome to the intelligent sports era.
        </h1>
        <p className="mt-4 text-lg">
          We capture the smartest sports data and transform it into even smarter
          tech and fan experiences. What will you build?
        </p>
        <button className="mt-8 bg-white text-black py-2 px-6 rounded-full">
          Explore Genius
        </button>
      </main>

      <section className="mt-20 flex justify-center">
        <div className="bg-black w-3/4 h-64 flex items-center justify-center">
          <p className="text-yellow-400 text-2xl">A new</p>
        </div>
      </section>

      <footer className="bg-white py-6 mt-20">
        <div className="flex justify-center space-x-8">
          {[...Array(9)].map((_, index) => (
            <img
              key={index}
              src={`https://placehold.co/100x50`}
              alt={`Logo ${index + 1}`}
              className="h-10"
            />
          ))}
        </div>
      </footer>
    </div>
  );
}
