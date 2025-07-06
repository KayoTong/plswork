// src/components/HeroSection.js
export default function HeroSection({ title, subtitle }) {
    return (
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-lobster mb-4 drop-shadow-lg">{title}</h1>
          {subtitle && <p className="text-2xl font-semibold drop-shadow">{subtitle}</p>}
        </div>
      </section>
    );
  }