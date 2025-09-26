import { useState } from 'react'
import ChromaGrid from '../components/ChromaGrid'

const Projects = () => {
  const [activeTab, setActiveTab] = useState(null)

  // Frontend
  const frontendProjects = [
    {
      title: "FAST Mission and Vision",
      description: "Modern and simple card style for seamless user experience",
      image: "./assets/code1.png",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "FAST Hero Page",
      description: "Collaborative project for FAST-Club",
      image: "./assets/code2.png",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "XLM and JSON Viewer",
      description: "Interactive data viewer with beautiful visualizations",
      image: "./assets/code3.png",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "  Inventory Listing",
      description: "Item showcase with beautiful animations and interactions",
      image: "./assets/code4.png",
      gradient: "from-purple-600 to-pink-600"
    }
  ]

  // Art
  const artProjects = [
    {
      title: "Uma Musume: Goldship's Golden Victory",
      description: "Expressive Illustration exploring human emotions and expressions",
      image: "./assets/Art1.jpg",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Wuthering Waves: Overtime This!",
      description: "Bold art focusing on form, color, and texture",
      image: "./assets/Art2.jpg",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "PGR: Merciless War",
      description: "Art Illustration focusing on cinematic and overall emotional impact",
      image: "./assets/Art3.jpg",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "At Golden Hour",
      description: "Art Illustration focusing on Landscape and lighting",
      image: "./assets/Art4.jpg",
      gradient: "from-amber-500 to-orange-500"
    }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab)
  }

  return (
    <section id="work" className="c-space section-spacing scroll-mt-28 md:scroll-mt-36">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        
        <button 
          onClick={() => handleTabClick('frontend')}
          className={`grid-blue-color group relative overflow-hidden flex items-center justify-between rounded-2xl p-6 hover:-translate-y-1 duration-200 transition-all ${
            activeTab === 'frontend' ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/25' : ''
          }`}
        >
          <div className="relative z-10">
            <p className="headtext [font-family:nebulax]">Front End Development</p>
            <p className="subtext">Explore my front-end work</p>
          </div>

          <img
            src="./assets/CodeLink.png"
            alt="Code preview"
            className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
            style={{ WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)", maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
          />
        </button>

        <button 
          onClick={() => handleTabClick('art')}
          className={`grid-red-color group relative overflow-hidden flex items-center justify-between rounded-2xl p-6 hover:-translate-y-1 duration-200 transition-all ${
            activeTab === 'art' ? 'ring-2 ring-red-400 shadow-lg shadow-red-500/25' : ''
          }`}
        >
          <div className="relative z-10">
            <p className="headtext [font-family:nebulax]">Art Illustrations</p>
            <p className="subtext">See my illustration pieces</p>
          </div>
          
          <img
            src="./assets/ArtLink.png"
            alt="Art preview"
            className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
            style={{ WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)", maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
          />
        </button>

      </div>

 
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        activeTab ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {activeTab === 'frontend' && (
          <div className="animate-in slide-in-from-top duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 [font-family:nebulax]">Frontend Development Projects</h3>
              <p className="subtext max-w-xl mx-auto">
                Crafting beautiful, responsive, and interactive web experiences using modern 
                technologies and best practices.
              </p>
            </div>
            <ChromaGrid items={frontendProjects} />
          </div>
        )}

        {activeTab === 'art' && (
          <div className="animate-in slide-in-from-top duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 [font-family:nebulax]">Art & Illustration Portfolio</h3>
              <p className="subtext max-w-xl mx-auto">
                A collection of digital artworks, illustrations, and creative designs. 
                Each piece tells a story and showcases different artistic techniques.
              </p>
            </div>
            <ChromaGrid items={artProjects} />
          </div>
        )}
      </div>

      {/* Call to action */}
      {!activeTab && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg [font-family:montlight]">
            Click on the cards above to explore my projects
          </p>
        </div>
      )}
    </section>
  )
}

export default Projects