// para utilizar syleComponents primero se instala (npm i Styled-components)

// importamos ( import styled from "styled-components")

//definimos 
const titulo = styled.h1`
color: red;
font-size:5em;


`

const tarjeta = ()=>{
    return (
        <div className ="container">
            <titulo>estas son tarjetas</titulo>
            <p>testo 1</p>
        </div>
    )
}

// exportamos y luego ejecutamos para guardar cambios 