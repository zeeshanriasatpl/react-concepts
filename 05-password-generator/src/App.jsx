import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@£$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 text-white text-center"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}>copy</button>
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLenght(e.target.value);
          }}
        />
        <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberinput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        ></input>
        <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberinput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        ></input>
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
