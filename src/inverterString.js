import React, { useState } from "react"

function InverterString() {
  const [inputString, setInputString] = useState("")
  const [invertedString, setInvertedString] = useState("")

  const handleInputChange = (event) => {
    setInputString(event.target.value)
  }

  const handleInvertClick = () => {
    let inverted = ""
    for (let i = inputString.length - 1; i >= 0; i--) {
      inverted += inputString[i]
    }
    setInvertedString(inverted)
  }

  return (
    <div>
      <h2>Inverter String</h2>
      <input
        type="text"
        placeholder="Digite uma string"
        value={inputString}
        onChange={handleInputChange}
      />
      <button onClick={handleInvertClick}>Inverter</button>
      {invertedString && (
        <div>
          <p>A string invertida é: {invertedString}</p>
        </div>
      )}
    </div>
  )
}

export default InverterString
