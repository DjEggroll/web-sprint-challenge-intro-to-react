import React from 'react'
import styled from 'styled-components';

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: black;
    font-weight: normal;
    border: 1px solid #d2d2d2;
        border-radius: 8px;
        margin-top: 16px;
        background-color: tan;
`

export default function Details(props){
    const {birth_year, eye_color, gender, height, hair_color, films} = props.details;
   
    return(
        <div className='details'>
            <Styled>
                <p>Birth Year: {birth_year}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height} cm</p>
                <p>Hair Color: {hair_color}</p>
                <div>Appearances:<ul>{films.map(film => 
                    <li>{film}</li>
                )}</ul></div>
            </Styled>
        </div>
    )
}