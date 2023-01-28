import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-800 text-white flex justify-center items-center h-[777px] flex-col font-bold text-3xl gap-10'>
      <p className='text'> COUNT: {count}</p>
     
      <div className='flex w-40 justify-between'>
      <button onClick={()=>setCount(count + 1)} className='flex items-center justify-center h-10 p-5 bg-neutral-800 rounded-xl border-2 border-gray-700'>+</button>
      <button onClick={()=>setCount(count - 1)} className='flex items-center justify-center h-10 p-5  bg-neutral-800 rounded-xl border-2 border-gray-700'>-</button>
      
      
      </div>
      
    </div>
  )
}

export default App
