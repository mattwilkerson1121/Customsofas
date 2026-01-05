import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import factoryImage from "figma:asset/558c26c4079ff04e795f4f957d22f41bd72ea482.png";
import boucleImage from "figma:asset/56cb220eba917e26d54e973a33c3977cb3db66ee.png";
import wovenImage from "figma:asset/fcc56c7c2f43d1d31321bc07cb1cc7abea8bb4a8.png";
import velvetImage from "figma:asset/e8642f8cd13048aeed0144dcd9be2e9633146244.png";
import chenilleImage from "figma:asset/5760eac18cf59a9ad5f1263d4a05858dd3385327.png";
import basketWeaveImage from "figma:asset/b36fe3986d6263da771ae46f667ee4d5efcaaa1c.png";
import brushedWovenImage from "figma:asset/db35ef923c07483658e92536d7c646eef409e0d5.png";
import italianLeatherImage from "figma:asset/1083ba66bc90cbe635a0a73b1cf5b69a6f8ba021.png";
import SiteFooter from "./imports/SiteFooter-26-664";

export default function App() {
  // Define proper Unsplash photo IDs for modular styles
  const modularStyleImages = [
    "1555041469-a586c61ea9bc", // Plush
    "1586023492125-27b2c045efd7", // Winston
    "1555041469-a586c61ea9bc", // Nest
    "1555041469-a586c61ea9bc", // Collin
    "1555041469-a586c61ea9bc", // Beckham
    "1555041469-a586c61ea9bc", // Bondi
    "1555041469-a586c61ea9bc", // Malibu
  ];

  // Define proper Unsplash photo IDs for traditional styles
  const traditionalStyleImages = [
    "1586023492125-27b2c045efd7", // Ethan
    "1555041469-a586c61ea9bc", // Bowery
    "1586023492125-27b2c045efd7", // Haven
    "1555041469-a586c61ea9bc", // Ridley
    "1586023492125-27b2c045efd7", // Skylar
    "1555041469-a586c61ea9bc", // Brentwood
    "1586023492125-27b2c045efd7", // Dobson
    "1555041469-a586c61ea9bc", // Morse
    "1586023492125-27b2c045efd7", // Forbes
    "1555041469-a586c61ea9bc", // Classic
  ];

  // Cushion options data
  const cushionOptions = [
    {
      name: "Feathered Comfort",
      material: "100% Feathers",
      sitExperience: "Softest",
      description: "An enveloping experience.",
      looks: "Most relaxed",
      madeWith: "100% real feathers—washed & hypoallergenic",
      icon: "🪶",
      firmness: "soft",
    },
    {
      name: "Hybrid Comfort",
      material: "Feathers + Memory Foam",
      sitExperience: "Soft",
      description: "A memory foam experience.",
      looks: "Relaxed",
      madeWith:
        "100% real feathers with gel-infused memory foam",
      icon: "🔄",
      firmness: "medium-soft",
    },
    {
      name: "Gel-Infused Memory Foam",
      material: "Gel-Infused Memory Foam",
      sitExperience: "Medium-Soft",
      description: "Advanced cooling comfort technology.",
      looks: "Tailored",
      madeWith:
        "Density foam core with gel-infused memory foam layers",
      icon: "❄️",
      firmness: "medium-soft-plus",
    },
    {
      name: "Foam Comfort",
      material: "Layered Foam",
      sitExperience: "Medium",
      description: "A supportive, sink-in experience.",
      looks: "Tailored",
      madeWith: "Resilient foam layers",
      icon: "📦",
      firmness: "medium",
    },
    {
      name: "Core Comfort",
      material: "Foam Core",
      sitExperience: "Firm",
      description: "A supportive experience.",
      looks: "Most tailored",
      madeWith: "Super-resilient foam core",
      icon: "🎯",
      firmness: "firm",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 text-white px-3 py-2 font-bold">
                VCF
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-600"
                >
                  Furniture
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-600"
                >
                  Mattresses
                </a>
                <a href="#" className="text-red-600">
                  Custom Sofas
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-600"
                >
                  Financing
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Find A Store
              </Button>
              <Button size="sm">Chat</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 border-red-200">
                  PROUDLY MADE IN THE USA
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The sofa no one else has
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Designed by you and only you. We're just here
                  to support your individuality with custom
                  sofas and sectionals crafted in our own
                  American factory.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">
                    65+
                  </div>
                  <div className="text-sm text-gray-600">
                    Fabric Styles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Frame Styles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Made in USA
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-white px-8"
                  style={{ backgroundColor: "#393A39" }}
                >
                  Start Customizing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  View Frame Styles
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
                  alt="Custom sectional sofa"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-gray-900">
                  Made in Our Factory
                </div>
                <div className="text-xs text-gray-600">
                  North Carolina, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#393A39" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Crafted in Our Own Factory
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Every custom sofa and sectional is handcrafted
                with pride in our North Carolina facility by
                skilled artisans who take ownership in every
                piece they create.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold mb-2">
                    30+ Years
                  </div>
                  <div className="opacity-90">
                    Manufacturing Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">
                    100%
                  </div>
                  <div className="opacity-90">
                    Quality Inspected
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={factoryImage}
                  alt="Skilled craftsman working on a green upholstered chair in our North Carolina factory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-gray-900">
                  Skilled Craftsmanship
                </div>
                <div className="text-xs text-gray-600">
                  North Carolina, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Styles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sleek modern designs to versatile modular
              configurations, our 17 frame styles offer endless
              possibilities for your space.
            </p>
          </div>

          {/* Modular Styles */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Modular Styles
              </h3>
              <Badge className="bg-blue-100 text-blue-800">
                7 Styles Available
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Plush",
                  description:
                    "Deep, roomy seats with cloud-like comfort",
                },
                {
                  name: "Winston",
                  description:
                    "Multiple configurations with tons of seating",
                },
                {
                  name: "Nest",
                  description:
                    "Go-big-or-small modular potential",
                },
                {
                  name: "Collin",
                  description:
                    "Wide-track high arms for modern appeal",
                },
                {
                  name: "Beckham",
                  description:
                    "Clean, contemporary modular design",
                },
                {
                  name: "Bondi",
                  description:
                    "Wide-track arms with deep seating",
                },
                {
                  name: "Malibu",
                  description:
                    "Laidback vibe with deep seating comfort",
                },
              ].map((style, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${modularStyleImages[index]}?w=400&h=240&fit=crop`}
                        alt={style.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      {style.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {style.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Shop the Collection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Non-Modular Styles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Traditional Styles
              </h3>
              <Badge className="bg-green-100 text-green-800">
                10 Styles Available
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Ethan",
                "Bowery",
                "Haven",
                "Ridley",
                "Skylar",
                "Brentwood",
                "Dobson",
                "Morse",
                "Forbes",
                "Classic",
              ].map((style, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${traditionalStyleImages[index]}?w=300&h=200&fit=crop`}
                        alt={style}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-semibold mb-2">
                      {style}
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Shop Collection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cushion Options Section */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#393A39" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Your Perfect Cushion?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose your ideal comfort level and aesthetic from
              our five expertly crafted cushion options.
            </p>
          </div>

          {/* Firmness Scale */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-4xl mx-auto mb-4">
              <span className="text-sm text-white">SOFT</span>
              <span className="text-sm text-white">FIRM</span>
            </div>
            <div className="w-full max-w-4xl mx-auto h-2 bg-gray-700 rounded-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-yellow-400 to-red-500 rounded-full"></div>
              {cushionOptions.map((option, index) => (
                <div
                  key={index}
                  className="absolute top-0 w-4 h-4 bg-white rounded-full border-2 border-gray-900 transform -translate-y-1 -translate-x-2"
                  style={{ left: `${(index / 4) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Cushion Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {cushionOptions.map((option, index) => (
              <Card
                key={index}
                className="border-gray-700 hover:shadow-lg transition-shadow"
                style={{ backgroundColor: "#ECECEC" }}
              >
                <CardContent className="p-5 text-center">
                  {/* Icon/Visual */}
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#393A39" }}
                  >
                    <span className="text-lg">
                      {option.icon}
                    </span>
                  </div>

                  {/* Title and Material */}
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "#393A39" }}
                  >
                    {option.name}
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{ color: "#393A39", opacity: 0.7 }}
                  >
                    {option.material}
                  </p>

                  {/* Sit Experience */}
                  <div className="mb-3">
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "#393A39" }}
                    >
                      Sit Experience: {option.sitExperience}
                    </div>
                    <p
                      className="text-xs"
                      style={{ color: "#393A39", opacity: 0.7 }}
                    >
                      {option.description}
                    </p>
                  </div>

                  {/* Looks */}
                  <div className="mb-3">
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "#393A39" }}
                    >
                      Looks: {option.looks}
                    </div>
                  </div>

                  {/* Made With */}
                  <div className="mb-4">
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "#393A39" }}
                    >
                      Made with:
                    </div>
                    <p
                      className="text-xs"
                      style={{ color: "#393A39", opacity: 0.7 }}
                    >
                      {option.madeWith}
                    </p>
                  </div>

                  <div className="w-full text-center">
                    <a
                      href="#"
                      className="text-xs hover:underline"
                      style={{ color: "#393A39" }}
                    >
                      Learn More &gt;
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 px-8"
              style={{ color: "#393A39" }}
            >
              Find Your Perfect Cushion
            </Button>
          </div>
        </div>
      </section>

      {/* Fabric Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customize with Color & Texture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from over 65 fabric styles and colors,
              including eco-performance options and premium
              Italian leather selections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Bouclé", type: "Textured" },
              { name: "Woven", type: "Eco-Performance" },
              { name: "Velvet", type: "Luxury" },
              { name: "Chenille", type: "Soft Touch" },
              { name: "Italian Leather", type: "Premium" },
              { name: "Brushed Woven", type: "Natural" },
              {
                name: "Performance Fabric",
                type: "Family-Friendly",
              },
              { name: "Basket Weave", type: "Contemporary" },
            ].map((fabric, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="w-full h-32 rounded-lg mb-3 overflow-hidden">
                    {fabric.name === "Bouclé" ? (
                      <img
                        src={boucleImage}
                        alt="Bouclé fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Woven" ? (
                      <img
                        src={wovenImage}
                        alt="Woven fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Velvet" ? (
                      <img
                        src={velvetImage}
                        alt="Velvet fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Chenille" ? (
                      <img
                        src={chenilleImage}
                        alt="Chenille fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Italian Leather" ? (
                      <img
                        src={italianLeatherImage}
                        alt="Italian Leather texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Brushed Woven" ? (
                      <img
                        src={brushedWovenImage}
                        alt="Brushed Woven fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : fabric.name === "Basket Weave" ? (
                      <img
                        src={basketWeaveImage}
                        alt="Basket Weave fabric texture"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                    )}
                  </div>
                  <h4 className="font-semibold">
                    {fabric.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {fabric.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-white px-8"
              style={{ backgroundColor: "#393A39" }}
            >
              Explore All Fabrics & Colors
            </Button>
          </div>
        </div>
      </section>

      {/* Eco-Performance Fabrics Banner */}
      <section
        className="py-12"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-gray-900 text-white border-gray-900">
                    CUSTOMIZE RESPONSIBLY
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Eco-Performance Fabrics
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Choose sustainable fabrics that don't
                    compromise on performance. Our eco-friendly
                    options deliver superior stain resistance,
                    durability, and comfort while supporting
                    environmental responsibility.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        ♻️
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      Recycled Materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        💧
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      Spill & Stain Resistant
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        🌱
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      Sustainably Sourced
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        💪
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      Enhanced Durability
                    </span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    size="lg"
                    className="text-white px-8"
                    style={{ backgroundColor: "#393A39" }}
                  >
                    See Why Eco Matters
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-600 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop"
                    alt="Eco-performance fabric sustainability"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">
                    Eco-Friendly
                  </div>
                  <div className="text-xs text-gray-600">
                    Sustainable &amp; Performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Protection Banner */}
      <section
        className="py-12 text-white"
        style={{ backgroundColor: "#393A39" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-white text-gray-900 border-white">
                    PROTECT YOUR INVESTMENT
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    Furniture Protection Plan
                  </h2>
                  <p className="text-lg text-white opacity-90 leading-relaxed">
                    Your custom sofa is a significant
                    investment. Protect it with our
                    comprehensive furniture protection plan that
                    covers stains, spills, and wear for years to
                    come.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm text-white">
                      Stain & Spill Protection
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm text-white">
                      Rips & Tears Coverage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm text-white">
                      5-Year Extended Warranty
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm text-white">
                      Professional Cleaning
                    </span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8"
                  >
                    Learn More About Protection
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-600 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"
                    alt="Protected furniture with family"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">
                    Peace of Mind
                  </div>
                  <div className="text-xs text-gray-600">
                    Protected &amp; Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Design Your Perfect Sofa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your customization journey today. Choose from
            17 frame styles, 65+ fabrics, and create furniture
            that's uniquely yours.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-white px-8"
              style={{ backgroundColor: "#393A39" }}
            >
              Schedule Design Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}