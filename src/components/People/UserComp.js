import React from 'react';
import styled  from 'styled-components';
import BtnConnect from '../Connections/BtnConnectComp';

const User = styled.div`
    width: 184px;
    float:left;
    border: 1px solid #CDCFD2;
    background-color: white;
    padding-top:10px;
    border-left: 0.5px solid #CDCFD2;
    border-right: 0px solid #CDCFD2;
    
    &:hover {
        background-color: #f3f6f8;
    }

    img {
        width: 104px;
        height: 104px;
        border-radius: 50%;
    }
    
    .name {
        font-weight: 600;
        color: black;
        margin-top:8px;
    }
    
    .name:hover {
        text-decoration:underline;
        cursor: pointer;
    }
    
    .career, .relConnection {
        font-weight: 400;
        font-size: 12px;
        color:#8E9092;
    }
    
    .career:hover {
        cursor: pointer;
    }

    .relConnection {
        padding: 0px 15px; 0px; 15px;
        line-height: 1;
        margin-bottom: 15px;
    }
    .relConnection:hover {
        text-decoration:underline;
        cursor: pointer;
    }
    
    .aro-icon {
        width:15px;
        height:auto;
        margin-right:3px;
        padding-bottom:4px;
    }
`;

class UserComp extends React.Component {

      render() {
            return (
                <User>
                    <img src={this.props.dUser.image} alt={this.props.dUser.name} />

                    <div className="name">{this.props.dUser.name}</div>
                    
                    <div className="career">{this.props.dUser.carrer}</div>
                    
                    <div className="relConnection">
                       <img src="./images/aro-icon.png" className="aro-icon" alt="aro-icon"/> 
                       Dafne Arevalo and 32 others
                    </div>
                    
                    <BtnConnect copy="Connect" size="75" ></BtnConnect>
                </User>
      );}
      
}

export default UserComp;
