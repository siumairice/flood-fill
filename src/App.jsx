import { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid'
import InputBar from './components/InputBar';

function App() {
  let rows = 15, cols = 15;

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

  let [image, setImage] = useState(generateRandomMatrix(rows, cols));
  let [colour, setColour] = useState(image[0][0]);

  function floodFill(img, colour){  
      if(img[0][0] == colour) return img;
      fill_island(0, 0, img[0][0], colour, img);
      return img;
  }

  function fill_island(x, y, start_colour, target_colour, img){
      if (x < 0 || x >= rows|| y < 0 || y >= cols) return;
      if (img[x][y] != start_colour)  return;
      img[x][y] = target_colour;
      fill_island(x - 1, y, start_colour, target_colour, img);
      fill_island(x + 1, y, start_colour, target_colour, img);
      fill_island(x, y - 1, start_colour, target_colour, img);
      fill_island(x, y + 1, start_colour, target_colour, img);
  }

  useEffect(() => {
    setImage(floodFill(image.map((r) => [...r]), colour));
  }, [colour]);


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
