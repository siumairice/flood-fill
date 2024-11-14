import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'

function App() {
  function generateRandomMatrix(cols, rows){
    var matrix = [];
    for(var i=0; i<cols; i++) {
        matrix[i] = [];
        for(var j=0; j<rows; j++) {
            matrix[i][j] = Math.floor(Math.random() * 7);
          }
      } 
    return matrix;
  }
  function printMatrix(matrix){
    for(let i=0; i<15; i++) {
      console.log(matrix[i]);
    } 
  }
let image = generateRandomMatrix(15, 15)

  return (
    <>
      <Grid matrix={image}/>
    </>
  )
}

export default App
