import React from 'react'
import styled from "styled-components";
import {Route, Switch } from "react-router-dom"
import ListContainer from '../components/List/ListContainer';
import SearchContainer from '../components/Searh/SearchContainer';
import DetailsContainer from '../components/Details/DetailsContainer';
import ButtonsContainer from '../components/Buttons/ButtonsContainer';
import CreateContainer from '../components/Create/CreateContainer';
import UpdateContainer from '../components/Update/UpdateContainer';


const Container = styled.div`
    display : flex;
    width: 50%;
    height: 60vh;
    border : 3px solid grey;
    border-radius: 15px;
    padding: 15px;    
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    border-right:2px solid whitesmoke;
    padding-right :15px;
    height : 100%;
`;

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding-left:15px;    
`;

function WelcomPage() {    
    return (
        <Container>
            <Left>
              <SearchContainer/>
              <ListContainer/>
            </Left>
            <Right>
                <Switch>
                    <Route exact path = "/">
                        <DetailsContainer/>
                    </Route>
                    <Route exact path = "/create">
                        <CreateContainer/>
                    </Route>
                    <Route exact path = "/update">
                        <UpdateContainer/>
                    </Route>
                </Switch>
                <ButtonsContainer/>
            </Right>
        </Container>
    )
}

export default WelcomPage
