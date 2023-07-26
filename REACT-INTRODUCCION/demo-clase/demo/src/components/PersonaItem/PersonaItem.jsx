import react from "react";

const PersonaItem = (props)=>{
    return (
        <div>
            <hr></hr>
            <p>nombre:{props.name} </p>
            <p>edad: {props.age}</p>
            <hr></hr>
        </div>
    )
}

export default PersonaItem