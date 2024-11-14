import React, { useEffect } from 'react'

const Grid = () => {
    function generateRandomMatrix(cols, rows){
        var matrix = [];
        for(var i=0; i<cols; i++) {
            matrix[i] = [];
            for(var j=0; j<rows; j++) {
                matrix[i][j] = Math.floor(Math.random() * 7);
            }
        } 
    }

    function floodFill(image){  
        if(image[0][0] == colour) return image;
        fill_island(0, 0, image[0][0], color)
        return image;
      }
    
    function fill_island(x, y, start_colour, target_colour){
        if(x < 0 || x >= image.length() && y < 0 || y >= image[0].length()) return;
        if (image[x][y] != start_colour)  return;
        image[x][y] = target_colour;
        fill_island(x - 1, y, start_colour, target_colour);
        fill_island(x + 1, y, start_colour, target_colour);
        fill_island(x, y - 1, start_colour, target_colour);
        fill_island(x, y + 1, start_colour, target_colour);
    }
    
    function printMatrix(matrix){
        for(i=0; i<matrix.length(); i++) {
            matrix[i] = [];
            for(j=0; j<matrix[0].length(); j++) {
                console.log(matrix[i][j]);
            }
        } 
    }
    
    return (
        <div>Grid</div>
    )
}

export default Grid