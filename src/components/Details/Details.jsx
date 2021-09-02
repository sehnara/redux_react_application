import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;    
    justify-content : center;
    padding-top : 1em;
    /* border : 1px solid black; */
`;
const Data = styled.div`
    font-size:1.2em; 
    padding-bottom : 0.3em;
    margin-bottom : 1em;
    border-bottom : 2px solid whitesmoke;
    text-align : left;
`;
function Details({select}) {
    return (  
    <Container>
        <Data>Name : {select.name} </Data>
        <Data>Position : {select.position}</Data>
        <Data>Telephone : {select.tel}</Data>                        
        <Data>Email : {select.email}</Data>                        
    </Container>      
       
    )
}

export default Details
