import { useCallback, useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const OptimalComponent = () => {

  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('count is chenged') 
   setCount((value) => value + 1)}, [])

   useEffect(() => console.log('function is created'), [handleClick])

  return (
    <div className='container'>
      <p>Function is not recreated {count}</p>
      <button className="btn btn-primary" onClick={handleClick} >
        With useCallback
      </button>
    </div>
  )
}

export default OptimalComponent
