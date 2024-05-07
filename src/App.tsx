import './App.css';
import ProblematicComponents from './components/ProblematicComponents'
import OptimalComponent from './components/OptimalComponent'
import ProblematicHardComponents from './components/ProblematicHardComponents'
import OptimalHardComponent from './components/OptimalHardComponent'

function App() {
  return (
    <div className="App">
      <h2>Work with useCallback</h2>
      <ProblematicComponents />
      <OptimalComponent />
      <h2>Work with useMemo</h2>
      <ProblematicHardComponents />
      <OptimalHardComponent />
    </div>
  );
}

export default App;
