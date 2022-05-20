// Write your Character component here
import React, {useState} from 'react'
import Details from './Details'
import styled from 'styled-components';

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: black;
    font-weight: bold;


    h1{
        width: 15%;
        display:flex;
        flex-direction: column;
        align-items:center;
        border: 1px solid #d2d2d2;
        border-radius: 8px;
        margin-top: 16px;
        padding: 16px;
        background-color: tan;
    }

    button{
        background-color: skyblue;
    }
`


export default function Character(props){
    const {character} = props;
    const [showDetails, setShowDetails] = useState(false);

    const clickDetails = () => {
        setShowDetails(!showDetails);
    }

    return(
        <div>
            <Styled className = 'characters'>
                <h1>{character.name}</h1>
                <button onClick={clickDetails}>Show Details</button>
            {showDetails ? <Details details={character} key={character.name}/> : null}
            </Styled>
        </div>
    )   
}