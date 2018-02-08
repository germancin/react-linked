import React from 'react';
import styled  from 'styled-components';
import ImagesConnections from './ImagesGroupComp';

const ConnectionBox = styled.div`

    padding-top:30px;
    
    .number {
      color:#3795C6;
      font-size: 32px;
      font-weight:200;
    }
    
    .title {
      line-height: 20px;
      color: black;
      font-size: 16px;
      font-weight:bold;
    }
    
    .link {
      padding-top: 5px;
      padding-bottom: 20px;
      color: #0084bf;
    }
    
    .link:hover {
      color: #0084bf;
      text-decoration:underline;
      cursor: pointer;
    }

`;

class Connections extends React.Component {
    
      render() {
            return (
                <ConnectionBox>
                        <div className="number">443</div>
                        <div className="title">Your connections</div>
                        <div className="link">See all</div>
                        <ImagesConnections></ImagesConnections>
                </ConnectionBox>
      );}
      
}

export default Connections;
