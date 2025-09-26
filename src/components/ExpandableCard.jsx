import { useState, useRef, useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}

const ExpandableCard = ({ card, id, active, setActive }) => {
  const ref = useRef(null)
  const isExpanded = active === id

  useOutsideClick(ref, () => setActive(null))

  if (isExpanded) {
    return (
      <>
        {/* Full screen backdrop */}
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div
            ref={ref}
            className="relative rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
          >
            {/* Large image with overlays */}
            <div className="relative w-full h-[85vh]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              
              {/* Close button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 text-white text-xl"
              >
                ✕
              </button>
              
              {/* Text overlay with dark fading background */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8 text-white">
                <h3 className="text-4xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-200 text-xl">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 shadow-lg"
      onClick={() => setActive(id)}
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-gray-300 text-sm opacity-90">{card.description}</p>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default ExpandableCard