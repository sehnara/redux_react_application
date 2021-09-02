import React from 'react'
import styled from 'styled-components'
import Card from '../Card';

const Container = styled.div`
    border-top : 3px solid whitesmoke;
    display : flex;
    flex-direction : column;
    padding-top : 15px;
    height : 100%;
    overflow-y : scroll;    
`;

function List({props}) {    
    return (
        props.users?<Container>
            {
                props.users.filter(item =>{
                    const name = item.name;
                    return name.includes(props.search)
                }).map(item =>{
                    return <Card 
                        key={item.id}
                        item = {item}  
                        props = {props}                      
                    />
                })
            }
        </Container>:<div>empty</div>
    )
}

export default List
