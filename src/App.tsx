const LISTING_URL = 'https://www.namecheap.com/market/buynow/eurovison.com/';

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-neutral-950 text-white px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold">eurovison.com</h1>
      <p className="text-xl text-gray-300">This domain is for sale.</p>
      {LISTING_URL && (
        <a
          href={LISTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
        >
          Buy this domain
        </a>
      )}
    </main>
  );
}

export default App;
