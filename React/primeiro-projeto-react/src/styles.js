import styled from 'styled-components'

export const Container = styled.div`    // TEM QUE COMEÇAR COM LETRA MAIUSCULA. É OBRIGATORIO
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 30px;
    border-radius: 5px;
    width: 541px;

    ul {
        padding: 0;
        margin-top: 50px;
    }
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    margin-right: 30px;
`

export const Button = styled.button`
    background: rgba(128, 82, 236, 1);
    width: 130px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-weight: 900;
    line-height:2px ;
    color: white;
`

export const ListItem = styled.div`
    height: 60px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, .2);
    border-radius: 5px;
    background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;

    li {
        list-style: none;
    }
`