import { useState } from 'react'
import ExpandableCard from './ExpandableCard'

const ChromaGrid = ({ items }) => {
  const [active, setActive] = useState(null)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <ExpandableCard
              card={item}
              id={index}
              active={active}
              setActive={setActive}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChromaGrid