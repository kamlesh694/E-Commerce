import React from 'react'

export default function Loading() {
  return (
    
    <div className="flex w-full h-full items-center justify-center  bg-gray-100">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-600 text-lg font-semibold">Loading...</p>
            
        </div>
    </div>
    
    
  
  )
}
