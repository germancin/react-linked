import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import styled  from 'styled-components';
import Connections from './components/Connections/ConnectionsComp';
import ConnectOpt from './components/Connections/ConnectOpt';
import People from './components/People/PeopleComp';
import Promotions from './components/PromotionsComp'

const AppContainer = styled.div`
    font-size: 14px;
    text-align: center;
    color: #E2E2E2;
    border: 1px solid black;
    border-spacing: 0;
    background-color:#F5F5F5;
    height:100%;
    letter-spacing: 1px;
    padding-bottom:25px;
  }
`;

const Header = styled.div`
    background-color: #243641;
    height: 40px;
    padding: 15px 0px 10px 0px;
    color: white;
    font-size:18px
    
`;

const Container = styled.div`
    width: 1120px;
    min-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    
    .box-style {
      border-radius: 3px;
      background-color:#ffffff;
      margin-top: 10px;
      border: 1px solid #CDCFD2;
    }
`;

const LeftBox = styled.div`
    width: 218px;
    min-width: 220px;
    box-sizing: border-box;
    height:220px;
    
    .inner {
        margin-top: 0px;
        border-radius: 0px 0px 2px 2px;
        margin-left:-1px;
        padding-top:15px;
        padding-left:15px;
        padding-right:15px;
        
    }

`;

const ContentBox = styled.div`
    border: 1px dotted green;
    width: 554px;
    min-width: 552px;
    box-sizing: border-box;
`;

const RightBox = styled.div`
    border: 1px dotted brown;
    width: 302px;
    min-width: 300px;
    box-sizing: border-box;
    height: 255px;
`;


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          
        </Header>
        
        <Container>

            <LeftBox  className="box-style">
                <Connections></Connections>
                <LeftBox  className="box-style inner">
                    <ConnectOpt></ConnectOpt>
                </LeftBox>
            </LeftBox>
            
            <ContentBox className="box-style">
                <People></People> 
            </ContentBox>
            
            <RightBox className="box-style">
                <Promotions></Promotions> 
            </RightBox>

        </Container>
        
      </AppContainer>
    );
  }
}

export default App;
