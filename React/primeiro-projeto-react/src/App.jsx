/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaRocket, FaTrash } from "react-icons/fa";

import { Container, ToDoList, Input, Button, ListItem } from './styles.js';


function App() {
  // Código JavaScript:

  const [list, setList] = useState([{ id: uuid(), task: "Nada", finished: true }])
  const [task, setTask] = useState('')


  function inputMudou(event) {
    setTask(event.target.value)

    //setList([{ id: uuid(), task: event.target.value }])   ->   Adiciona um item dentro do array
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task, finished: false }])  // OU task: task
  }

  // Retorna código HTML
  return ( // Para usar javaScript aqui dentro tem q ter "{}"
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho que fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map( item => (
            <ListItem isFinished={item.finished}>
              <FaRocket />
              <li key={item.id}>{item.task}</li>
              <FaTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
