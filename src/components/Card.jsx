import axios from 'axios';
import React from 'react'
import { useStore } from 'react-redux';
import styled from 'styled-components';
import { deleteOne } from '../redux/modules/user';

const Name = styled.h3`    
    border-right : 3px solid whitesmoke;
    flex : 1;
`;

const DetailData = styled.div`
    flex : 3;
    display : flex;
    flex-direction : column;    
    padding-left : 0.5em;   
`;
const Content = styled.div`
margin: 0.2em; 
text-align : left;
`;

const Button = styled.button`
    width : 20px;
    height : 100%;
    font-size : 1.2em;
    background-color : #fd6e6e;
    border: none;
    cursor : pointer;
    z-index : 100;
`;

function Card({item, props}) {
    const Container = styled.div`    
    width : 97%;
    height : 70px;
    margin : 0.1em;
    border : 1px solid black;
    display : flex;
    align-items : center;    
    border-radius : 5px;
    cursor : pointer;   
    background-color : ${props.select.id === item.id ? "grey" : "white"};
    color : ${props.select.id === item.id ? "white" : "black"}; 
`;
    const handleSelect = (e)=>{
        const {setSelect} = props;
        // console.log(item);
        setSelect(item);
    }

    const handleDelete =async (e)=>{
        e.preventDefault();
        axios.delete(`https://last-server-application.herokuapp.com/user/delete/${e.target.id}`)
        const {users, deleteOne} = props;
        const filtered = users.filter(item =>{
            return item.id != e.target.id
        })
        deleteOne(filtered);
    }

    return (
        <Container onClick ={handleSelect}>
            <Name>{item.name}</Name>
            <DetailData>
                <Content>- {item.position}</Content>
                <Content>- {item.tel}</Content>
            </DetailData>            
            <Button id={item.id} onClick ={handleDelete}>-</ Button>
        </Container>
    )
}

export default Card
