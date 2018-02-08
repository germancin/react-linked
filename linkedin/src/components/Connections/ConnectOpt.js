import React from 'react';
import styled  from 'styled-components';
import BtnConnect from '../Connections/BtnConnectComp';

const Options = styled.div`
    padding:4px 2px 2px 2px;
    
    .title {
        line-height: 20px;
        color: rgba(0,0,0,.9);
        font-size: 16px;
        font-weight: 600;
    }
    .withTheme {
        margin-top:10px;
        color:#8E9092;
        font-weight: normal;
        margin-bottom: 15px;
    }
 
`;

class ConnectOpt extends React.Component {
    
      render() {
            return (
                <Options>
                    <div className="title">Some of your contacts aren’t connected with you on LinkedIn</div>
                    <div className="withTheme">Connect with them and never lose touch</div>
                    
                    <BtnConnect copy="Connect" ></BtnConnect>
                </Options>
      );}
      
}

export default ConnectOpt;