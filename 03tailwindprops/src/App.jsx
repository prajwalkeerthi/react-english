
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name:'Prajwal',
    age:'27',
    address:{
      city:'Bengaluru',
      state:'karnataka',
      country:"India"
    }
  }

  let newArr = [1,2,3,4,5,6,7,8,9] 

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>hi prajwal</h1>
      <Card username="prajwal" myArr={newArr}/>
      <Card username='jone' post='staff Eng'/>
      <Card username='jone' post='staff Eng'/>
    </>
  )
}

export default App
