import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid'
import InputBar from './components/InputBar';

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

  let [image, setImage] = useState(generateRandomMatrix(15, 15));
  let [colour, setColour] = useState(image[0][0]);

  function floodFill(image, colour){  
      if(image[0][0] == colour) return image;
      fill_island(0, 0, image[0][0], colour)
      return image;
  }

  function fill_island(x, y, start_colour, target_colour){
      if(x < 0 || x >= image.length && y < 0 || y >= image[0].length) return;
      if (image[x][y] != start_colour)  return;
      image[x][y] = target_colour;
      fill_island(x - 1, y, start_colour, target_colour);
      fill_island(x + 1, y, start_colour, target_colour);
      fill_island(x, y - 1, start_colour, target_colour);
      fill_island(x, y + 1, start_colour, target_colour);
  }

  useEffect(() => {
    console.log(colour);
    setImage(floodFill(image, colour));
  });


  return (
    <>
    <h1 className='font-bold mb-5'>Flood Fill</h1>
    <div className='flex gap-10 justify-center'>
      <Grid matrix={image}/>
      <InputBar setColour={setColour}/>
    </div>
    </>
  )
}

export default App
