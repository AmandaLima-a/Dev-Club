/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Rocket, Titulo } from './styles.js';


function App() {
  // Código JavaScript:

  const [list, setList] = useState([])
  const [task, setTask] = useState('')


  function inputMudou(event) {
    setTask(event.target.value)

    //setList([{ id: uuid(), task: event.target.value }])   ->   Adiciona um item dentro do array
  }

  function cliqueiNoBotao() {
    if (task) { // se o setTask existir fara isso:
      setList([...list, { id: uuid(), task, finished: false }])  // OU task: task
    } // senão não fara nada
    
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item // procura item com o mesmo id da tarefa clicada e troca SÒ O FINISHED o resto cnt igual, caso id diferente permanece igual
    ))

    setList(newList)
  }

  function deletarTarefa(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  // Retorna código HTML
  return ( // Para usar javaScript aqui dentro tem q ter "{}"
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho que fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Rocket onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <Titulo>Não há itens na lista</Titulo>
            )
             }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
