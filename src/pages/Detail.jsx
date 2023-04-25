import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { findId } from '../redux/modules/todo'

    const Stbox = styled.div`
    border: 1px solid lightgray;
    height: 300px;
    width: 500px;
    padding: 20px;
    `

    const Stbutton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: white;
    border: 2px solid lightgray;
    cursor: pointer;
    `

    const Stlayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    `

    const Stheader = styled.div`

    display: flex;  
    justify-content: space-between;
    `





function Detail() {

    const dispatch = useDispatch()
    const list = useSelector((state) => state.todo.newList)



    const {id} = useParams()



    useEffect(() => {
        dispatch(findId(id))
    },[dispatch,id])

    console.log(list)


  return (
    <Stlayout>
    <Stbox>
        <Stheader>
            <div>id:{list.id}</div>
            <Link to='/'><Stbutton>이전으로</Stbutton></Link>
        </Stheader>
        <h2>{list.title}</h2>
        <div>{list.comment}</div>
    </Stbox>
    </Stlayout>

  )
}

export default Detail