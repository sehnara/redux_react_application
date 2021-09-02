import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'


const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex; 
    flex-direction : column;    
    align-items : center;
    
    padding-top : 1.5rem;
`;

const Label = styled.label`
    font-size : 1.2em;
`;
const Input = styled.input`
    width : 100%;
    height : 30px;
    font-size : 1.4em;
    margin-bottom : 1em;
`;

const Submit_Input = styled(Input)`
    font-size: 1.3em;
    height : 45px;
    width : 103.5%;
    background-color : #afafaf;
    border  : none;
    border-radius : 15px;
    margin-top : 0.7em;
    color   : white;
    cursor : pointer;
`;

function Create({onCreate}) {
    const history = useHistory()
    const newUser = {
        name : "",
        email : "",
        position : "",
        tel : ""
    }

    const handleCreate = (e)=>{
        e.preventDefault();
        // console.log(newUser);
        onCreate(newUser)
        history.push("/")
    }

    return (
        <Container>
            <form>
                <div>
                    <Label>Name</Label><br/>
                    <Input type="text"  onChange={(e)=>{newUser.name = e.target.value}}/>
                </div>
                <div>
                    <Label>Email</Label><br/>
                    <Input type="text"  onChange={(e)=>{newUser.email = e.target.value}}/>
                </div>
                <div>
                    <Label>Position</Label><br/>
                    <Input type="text"  onChange={(e)=>{newUser.position = e.target.value}}/>
                </div>
                <div>
                    <Label>Tel.</Label><br/>
                    <Input type="text"   onChange={(e)=>{newUser.tel = e.target.value}}/>
                </div>
                <Submit_Input type="submit" value ="Submit" onClick ={handleCreate} />
            </form>
        </Container>
    )
}

export default Create
