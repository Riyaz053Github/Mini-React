import React, { useState, useCallback, useEffect,useRef } from 'react'

function GeneratePassword()  {
 const [length, setlength] = useState(8)
 const [numberAllowed, setnumberAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);
 const [password, setPassword] = useState("")

//useref
 const passwordRef = useRef(null);

 const passwordGenerator = useCallback (() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst";
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%&*-_+=[]{}`~"

  for(let i = 1; i<=length; i++){
  let char = Math.floor(Math.random() * str.length + 1)
   pass += str.charAt(char);
  }

  setPassword(pass)

 }, [length, numberAllowed, charAllowed, setPassword]) 

 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)

 }, [password]);

 useEffect(() => {
  passwordGenerator();
 }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className='my-4'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-2'>
  <input
    type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    readOnly
    ref = {passwordRef}
  />
  <button 
  onClick={copyPasswordToClipboard}
  className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
   </div>

   <div className='flex text-sm gap-x-2'> 

   <div className='flex items-center gap-x-1'>
    <input 
    type="range" 
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e) => {setlength(e.target.value)}}
    />
    <label>Length: {length} </label>
   </div>

   <div className="gap-x-1 mb-4" style={{ display: 'inline-block', padding: '0px 10px' }}>
        <input 
          type="checkbox"
          checked={charAllowed} 
          id="charInput"
          onChange={() => setCharAllowed(prev => !prev)}
        />
        <label htmlFor="charInput" className="text-black">Numbers</label>
      </div>

      <div className="gap-x-1 mb-4" style={{ display: 'inline-block', padding: '0px 10px' }}>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => setCharAllowed(prev => !prev)} 
        />
        <label htmlFor="charInput" className="text-black">Characters</label>
      </div>
    
   </div>
   </div>
    </>
  )
}

export default GeneratePassword