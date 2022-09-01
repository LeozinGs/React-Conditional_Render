import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Valor</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(20)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData