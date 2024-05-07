import {useMemo, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const OptimalHardComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(0)

  const hardFunction = (value: number) => {
    const start = performance.now()
    for (let i = 0; i < 1000000000; i++) {
      value += i
    }
    const end = performance.now()
    console.log('function has completed its work')
    return end - start
  }
  const resultHardFunction = useMemo(() => hardFunction(count), [count])

  const handleClickCount = () => setCount(count + 1)
  const handleClickItem = () => setItem(item + 1)
  return (
    <div className="container">
      <p>Function running time {resultHardFunction}</p>
      <div className="myButton">
        <button className="btn btn-primary mr-2" onClick={handleClickCount}>
          Cheng count ( {count} )<hr /> function - run{' '}
        </button>
        <button className="btn btn-primary ml-2" onClick={handleClickItem}>
          Cheng item ( {item} )<hr /> function - memo{' '}
        </button>
      </div>
    </div>
  )
}

export default OptimalHardComponent
