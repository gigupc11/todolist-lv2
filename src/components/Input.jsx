import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addList } from '../redux/modules/todo'
import styled from 'styled-components'
import nextId from 'react-id-generator'

const Inputarea = styled.div`
  background-color: rgb(237, 237, 237);
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;

`
const Sttext = styled.label`
  margin: 0 20px;
  font-weight: 600;
`
const Stinput = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  padding: 0 12px;
`
const Stbutton = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  border-radius: 10px;
  color: white;
  background-color: rgb(0, 170, 200);
  border: 0px;
  margin: 0 20px;
  cursor: pointer;
`

function Input() {

  const id = nextId()

  const dispatch = useDispatch()

  const [list,setList] = useState({
    id : 0,
    title : '',
    comment : '',
    isdone : false
    })

  const ListChangeHandler = (event) => {
    setList({
      ...list,[event.target.name] : event.target.value
    })
  }




  const addButtonHandler = () => {
    dispatch(addList({...list , id}))
    setList({
      id : 0,
      title : '',
      comment : '',
      isdone : false
    })
  }
  


  return (
    <Inputarea>
      <div>
        <Sttext>제목</Sttext>
        <Stinput name = 'title' value={list.title} onChange={ListChangeHandler}/>
        <Sttext>내용</Sttext>
        <Stinput name = 'comment'value={list.comment} onChange={ListChangeHandler}/>
      </div>
      <div>
        <Stbutton onClick={addButtonHandler}>추가하기</Stbutton>
      </div>
    </Inputarea>
  )
}

export default Input