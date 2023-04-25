import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { doneList , delList } from '../redux/modules/todo'
import { Link } from 'react-router-dom'


    const Sttext = styled.label`
    font-weight: 500;
    font-size: 25px;
    
    `
    const Stbox = styled.div`
    border: 4px solid rgb(0, 170, 200);
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
    margin-top: 20px;

    `
    const Listtext = styled.div`
    margin: 25px auto;
    `
    const Stdelbutton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    font-weight: 650;
    border: 2px solid red;
    cursor: pointer;
    `
    const Stdonebutton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    font-weight: 650;
    border: 2px solid rgb(0, 170, 200);
    cursor: pointer;
    `
    const StButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    `
    const Stmargin = styled.div`
    margin-top: 20px;
    `
    const ListSet = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    `
    
    
    



function List() {
    const data = useSelector((state) => {
        return state.todo.List
    })

    const dispatch = useDispatch()

    const doneButton = (id) => {
        dispatch(doneList(id))
    }

    const delButton = (id) => {
        dispatch(delList(id))
    }

    console.log(data)
   
  return (
    <>
    <Stmargin>
        <Sttext>Working...</Sttext>
    </Stmargin>
    <ListSet>
    {data.map((item) => {
         if (!item.isdone){
            return(
            <div key={item.id}>
            <Stbox>
            <Link to = {`/${item.id}`} style={
                {textDecoration : 'none',
                fontWeight : '600'
                }}>상세보기</Link>
            <h2>{item.title}</h2>
            <Listtext>{item.comment}</Listtext>
            <StButton>
            <Stdelbutton onClick={() => {delButton(item.id)}}>삭제하기</Stdelbutton>
            <Stdonebutton onClick={() => {doneButton(item.id)}}>{item.isdone ? '취소' : '완료'}</Stdonebutton>
            </StButton>
        </Stbox>
            </div>
            )
        } else{
            return null
        }
    })} 
    </ListSet>

       
    <Stmargin>
        <Sttext>Done..!</Sttext>
    </Stmargin>
    <ListSet>
    {data.map((item) => {
        if (item.isdone){
            return(
            <div key={item.id}>
            <Stbox>
            <Link to = {`/${item.id}`} style={
                {textDecoration : 'none',
                fontWeight : '600'
                }}>상세보기</Link>
            <h2>{item.title}</h2>
            <Listtext>{item.comment}</Listtext>
            <StButton>
            <Stdelbutton onClick={() => {delButton(item.id)}}>삭제하기</Stdelbutton>
            <Stdonebutton onClick={() => {doneButton(item.id)}}>{item.isdone ? '취소' : '완료'}</Stdonebutton>
            </StButton>
        </Stbox>
            </div>
            )
        } else{
            return null
        }
    })}
    </ListSet>
    </>
  )
}




export default List