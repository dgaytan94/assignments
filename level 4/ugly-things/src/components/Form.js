//input form: title, image, description of the ugly thing

import React,{useContext} from "react";
import { UglyContext } from "./UglyContext";

function Form(props){
    const {handleChange, addUglyThing, uglyThing} = useContext(UglyContext)

    return(
       <div className="form-card">
         <form onSubmit={addUglyThing}>
           <input
           input='text'
           name="title"
           placeholder="Title"
           value={uglyThing.title}
           onChange={handleChange}
           className="input"
           />
           <input
           input='text'
           name="imgUrl"
           placeholder="Image Url"
           value={uglyThing.imgUrl}
           onChange={handleChange}
           className="input"
           />
           <input
           input='text'
           name="desctiption"
           placeholder="description"
           value={uglyThing.desctiption}
           onChange={handleChange}
           className="input"
           />

           <button className="submit-btn">Submit</button>
         </form>
       </div>
    )
}

export default Form;