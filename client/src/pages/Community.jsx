import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {

  const [creations, setCreations] = useState([])

  const {user} = useUser()

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData)
  }
  useEffect(() =>{
    if(user){
      fetchCreations()
    }
  },[user])

  return (
  <div className='flex-1 h-full flex flex-col gap-4 p-6'>
    <h2 className="text-xl font-semibold">Creations</h2>
    <div className='bg-white w-full rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto'>
      {creations.map((creation, index) => (
        <div key={index} className='relative group w-full'>

          <img src={creation.content} alt="" className='w-full h-auto object-cover rounded-lg' />

          <div className='absolute inset-0 flex gap-2 items-end justify-end group-hover:justify-between p-3
            group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg
            select-none pointer-events-none group-hover:pointer-events-auto'>

            <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
            <div className='flex gap-1 items-center'>
              <p>{creation.likes.length}</p>
              <Heart
                onClick={() => {/* handle like click */}}
                className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creation.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'}`}
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
)

}

export default Community
