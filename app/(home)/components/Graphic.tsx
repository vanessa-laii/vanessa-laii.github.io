import Image from 'next/image'
import { useState } from 'react'
 
function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Center the green circle behind the image */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 opacity-20 blur-[100px] z-[-1]"></div>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src="/heroGraphic.png"
          alt="Landscape picture"
          height={500}
          width={500}
        />
        
        {/* Speech Bubble that follows mouse */}
        {isHovered && (
          <div 
            className="absolute z-10 pointer-events-none transition-all duration-150 ease-out"
            style={{
              left: mousePosition.x,
              top: mousePosition.y - 60,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="relative bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
              <p className="text-gray-900 font-medium whitespace-nowrap">Thanks for visiting! 🫶🏻 </p>
              {/* Speech bubble tail */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-1px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
 
export default Home