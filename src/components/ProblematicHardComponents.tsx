import {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ProblematicHardComponents = () => {
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

const handleClickItem = (() => setItem(item + 1))
const handleClickCount = (() => setCount(count + 1))

  return (
    <div className="container">
      <p>Function running time {hardFunction(10)}</p>
      <div className='myButton'>
      <button className="btn btn-primary mr-2" onClick={handleClickCount}>Cheng count ( {count} )</button>
      <button className="btn btn-primary ml-2" onClick={handleClickItem}>Cheng item ( {item} )</button>
      </div>
    </div>
  )
}

export default ProblematicHardComponents
