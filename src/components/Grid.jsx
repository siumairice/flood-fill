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
    
    return (
        <div className='flex w-150 h-150'>{
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