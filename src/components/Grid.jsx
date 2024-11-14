import React, { useEffect } from 'react'

const Grid = (props) => {
    let image = props.matrix;

    let color_map = {
        0: "#ef4444", // red
        1: "#fb923c", // orange
        2: "#fde047", // yellow
        3: "#10b981",
        4: "#3b82f6", // blue
        5: "#8b5cf6",
        6: "#06b6d4"  //cyan
    }

    // function floodFill(image){  
    //     if(image[0][0] == colour) return image;
    //     fill_island(0, 0, image[0][0], color)
    //     return image;
    // }

    // function fill_island(x, y, start_colour, target_colour){
    //     if(x < 0 || x >= image.length && y < 0 || y >= image[0].length) return;
    //     if (image[x][y] != start_colour)  return;
    //     image[x][y] = target_colour;
    //     fill_island(x - 1, y, start_colour, target_colour);
    //     fill_island(x + 1, y, start_colour, target_colour);
    //     fill_island(x, y - 1, start_colour, target_colour);
    //     fill_island(x, y + 1, start_colour, target_colour);
    // }
    
    
    let count = 0;
    return (
        <div className='flex w-150'>{
        image.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className={"col-" + rowIndex}> { 
                row.map((val, colIndex) => { 
                    return (
                        <div 
                            key={rowIndex + " " + colIndex} 
                            className={"w-10 h-10"}
                            style={{ backgroundColor: color_map[val] }}>
                        </div>
                    )
                })  
                } 
            </div>
            ) 
        })
        } </div>
        
    )
}

export default Grid