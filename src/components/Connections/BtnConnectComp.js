import React from 'react';
import styled  from 'styled-components';

function BtnConnect(props) {
    
    const Btn = styled.div`

        button {
            margin-bottom:15px;
            border: 1px solid #0084bf;
            color:#0084bf;
            padding:0px 25px 0px 25px;
            letter-spacing: 1px;
            width:${(props.size < 100)? props.size : '100'}%;
        }

        button:hover {
            background-color:#B5D1E3;
            padding:0px 25px 0px 25px;
            letter-spacing: 1px;
            cursor: pointer;
        }

    `;

    return (
             <Btn>
                <button>{props.copy}</button>
             </Btn>
    );
}

export default BtnConnect;
