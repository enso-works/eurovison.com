import React, { useState, useEffect } from 'react';
import { Trophy, Sparkles, Crown, Music2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FloatingCat = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [speed] = useState(() => 10 + Math.random() * 20);
  const [showMeow] = useState(() => Math.random() > 0.5);

  useEffect(() => {
    const moveToNewPosition = () => {
      // Safe zone: 100px from edges, avoiding center area
      const safeX = Math.random() * (window.innerWidth - 200) + 100;
      const safeY = Math.random() * (window.innerHeight - 200) + 100;

      // Avoid center area (where the main content is)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // If position is in center area, adjust it
      if (Math.abs(safeX - centerX) < 300 && Math.abs(safeY - centerY) < 200) {
        if (safeX > centerX) {
          setPosition({ x: centerX + 300, y: safeY });
        } else {
          setPosition({ x: centerX - 300, y: safeY });
        }
      } else {
        setPosition({ x: safeX, y: safeY });
      }
    };

    moveToNewPosition();
    const interval = setInterval(moveToNewPosition, speed * 1000);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div
      className="fixed text-white text-2xl select-none z-10 flex items-center gap-2"
      style={{
        left: position.x,
        top: position.y,
        transition: `all ${speed}s ease-in-out`,
        pointerEvents: 'none',
        color: 'rgb(250 204 21 / var(--tw-text-opacity))',
      }}
    >
      ~(^._.)
      {showMeow && <span className="animate-pulse">meow</span>}
    </div>
  );
};

function App() {
  const [imageError, setImageError] = useState(false);
  const [catCount] = useState(() => Math.floor(Math.random() * 13) + 2);

  return (
    <>
      <Helmet>
        <title>Eurovision 2024 - Baby Lasagna Fan Page</title>
        <meta
          name="description"
          content="Celebrating Croatia's Baby Lasagna and their iconic Eurovision 2024 song 'Rim Tim Tagi Dim'. The real winner in our hearts!"
        />
        <meta
          name="keywords"
          content="Eurovision 2024, Baby Lasagna, Croatia, Rim Tim Tagi Dim, Eurovision Song Contest"
        />
        <link rel="canonical" href="https://eurovison.com" />
        <meta property="og:title" content="Eurovision 2024 - Baby Lasagna Fan Page" />
        <meta
          property="og:description"
          content="Celebrating Croatia's Baby Lasagna at Eurovision 2024"
        />
        <meta property="og:url" content="https://eurovison.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div
        className={`min-h-screen text-white ${
          imageError ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900' : ''
        }`}
        style={{
          backgroundImage: !imageError
            ? 'url("https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5f17c1fb-e453-42d8-8932-d08f6d5ba6ee_1414x1034.png")'
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {Array.from({ length: catCount }).map((_, index) => (
          <FloatingCat key={index} />
        ))}
        <div className="min-h-screen backdrop-blur-sm bg-black/40">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold mb-8">
                Eurovision 2024
                <Crown className="inline-block ml-4 text-yellow-400" size={48} />
              </h1>
              <h2>Real winner</h2>

              <div className="space-y-8">
                <div
                  className="bg-black/50 p-8 rounded-xl max-w-2xl mx-auto backdrop-blur-sm relative z-50 
                          transition-transform duration-300 hover:scale-105 hover:bg-black/60"
                >
                  <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
                    <Sparkles className="text-yellow-400 mr-2" />
                    Croatia's Baby Lasagna
                    <Sparkles className="text-yellow-400 ml-2" />
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-2xl mb-4">
                    <Music2 className="text-yellow-400" />
                    <span className="font-bold">"Rim Tim Tagi Dim"</span>
                    <Music2 className="text-yellow-400" />
                  </div>

                  <p className="text-sm mt-4 text-gray-300">
                    * Disclaimer: The only reason the first place has gone to Swiss is that Europe
                    got a fucking woke virus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
