import { useEffect, useState} from "react";
import Colour from "./Colour";

const colors = [
    {
        hex: "#FF5154",
        name:"Tart-Orange"
    },

    {
        hex:"#80FF72",
        name:"Screaming-Green" 
    },

    {
        hex: "#91A6FF",
        name:"Cornflower-Blue"
    },

    {
        hex: "#FF88DC",
        name:"Persian-Pink"
    }
]

function ColourPicker (){
    const [backgroundColor, setBackgroundColor] = useState('white')
    useEffect(()=>{document.body.style.backgroundColor=backgroundColor},[backgroundColor])
    return (
         <div className="page" style={{backgroundColor}}>
          {colors.map(color => (<Colour Key={color.hex} hex={color.hex} name={color.name} setBackgroundColor={setBackgroundColor}/>
            ))
          }
         </div>
        
        
    )
}

export default ColourPicker;