import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 15%;
`;

const Input = styled.input`
    width : 97%;
    height: 70%;
    border-radius: 10px;
    font-size: 1.5em;        
`;
function Search({onSearch}) {

    const handleSearch =(e)=>{
        e.preventDefault();        
        onSearch(e.target.value);
    }

    return (
        <Container>
        <Input 
            type="text" 
            autoFocus 
            placeholder="이름을 검색하시오"                             
            onChange = {handleSearch}
        />    
    </Container>
    )
}

export default Search
