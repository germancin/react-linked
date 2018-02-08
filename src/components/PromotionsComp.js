import React from 'react';
import styled  from 'styled-components';

const Promo = styled.div`
    padding:4px 2px 2px 2px;
    
    img {
          width:290px;
          height:auto;
    }
 
`;

class Promotions extends React.Component {
    
      render() {
            return (
                <Promo>
                  <a hrf="#"><img src="./images/promotion.png" alt="img" /></a>
                </Promo>
      );}
      
}

export default Promotions;