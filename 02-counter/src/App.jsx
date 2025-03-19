import Card from "./components/Card";
import BgColor from "./components/BgColor";

import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 py-3 m-5">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {" "}
          <button
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-4xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor('blue')}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-4xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor('green')}
          >
            green
          </button>

        </div>
      </div>
    </div>
  );

  // const [counter, setCounter] = useState(0)
  // const handleCount = () => {
  //   setCounter(counter + 1)
  // }

  // const handleCountDecrement = () => {
  //   counter > 0 ? setCounter(counter - 1) : 0
  // }
  // return (
  //   <>

  //   <>
  //   <><h1 className='bg-green-400 text-black p-10 m-5 rounded-2xl'>Counter: {counter} </h1></>
  //   <button className='p-10 m-5' onClick={handleCount}>Increment</button>
  //   <button className='p-10 m-5' onClick={handleCountDecrement}>Decrement</button>
  //   <br />
  //   <Card username = 'Zeeshan'/>
  //   {/* <BgColor color='olive' /> */}
  //   </>

  //   </>
  // )
}

export default App;
