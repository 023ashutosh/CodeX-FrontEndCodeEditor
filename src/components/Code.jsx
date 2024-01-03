import React from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const EditorWrap = styled(Box)`
  display: flex;
  background-color: black;
  height: 51vh;
`

const Code = () => {
  
  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)


  return (
    <EditorWrap>  
        <Editor title ="HTML" symbol="/" bgColor="red" value={html} onChange={setHtml} />
        <Editor title ="CSS" symbol="#" bgColor="blue" value={css} onChange={setCss}/>
        <Editor title ="Javasript" symbol="=" bgColor="yellow" value={js} onChange={setJs}/>
    </EditorWrap>
  )
}

export default Code
