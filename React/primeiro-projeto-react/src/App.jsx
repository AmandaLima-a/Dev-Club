import { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  // Código JavaScript:

  const [list, setList] = useState([{ id: uuid(), task: "Nada" }])


  function inputMudou(event) {
    console.log(event.target.value)
    setList([{ id: uuid(), task: event.target.value }])   // Adiciona um item dentro do array

    console.log(list)
  }

  function cliqueiNoBotao() {
    console.log('Cliquei')
  }

  // Retorna código HTML
  return ( // Para usar javaScript aqui dentro tem q ter "{}"
    <div>
      <input onChange={inputMudou} placeholder="O que tenho que fazer..." />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
