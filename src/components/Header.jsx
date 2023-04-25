import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
display: flex;
border: 1px solid lightgray;
justify-content: space-between;
align-items: center;
height: 60px;
margin-top: 10px;
padding: 0 20px;
`

function Header() {
  return (
    <HeaderBox>
    <div>My Todo List</div>
    <div>React</div>
    </HeaderBox>
  )
}

export default Header