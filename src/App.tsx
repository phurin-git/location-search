import LocationSearch from './components/LocationSearch'
import Map from './components/Map'
import { useState } from 'react'
import type { Place } from './api/Place'

function App() {
  const [place, setPlace] = useState<Place | null>(null)
  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className='cols-span-3 p-2'>
        <LocationSearch onPlaceClick={setPlace} />
      </div>
      <div className='col-span-9'>
        <Map place={place} />
      </div>
    </div>
  )
}

export default App
