import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState} from 'react'

const ProblematicComponents = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    console.log('cheng count' )
    setCount((value) => value + 1)
  }

  useEffect(() => console.log('function is created'), [handleClick])

  return (
    <div  className='container'>
      <p>Function is constantly being recreated {count}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Without useCallback
      </button>
    </div>
  )
}

export default ProblematicComponents
