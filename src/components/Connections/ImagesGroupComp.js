import React from 'react';
import styled  from 'styled-components';

const ImageConn = styled.div`

    display: flex;
    flex-direction:row;
    justify-content:center;
    padding-bottom:35px;

    img {
        width:35px;
        height:36px;
        border-radius: 50%;
        border:1px solid white;
        margin-left:-12px;
    }
    
`;

class ImagesConnect extends React.Component {
    
      state = {
            images: [
              {
                id: 1,
                url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?h=350&auto=compress&cs=tinysrgb',
              },
              {
                id: 2,
                url: 'https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?h=350&auto=compress&cs=tinysrgb',
              },
              {
                id: 3,
                url: 'https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?h=350&auto=compress&cs=tinysrgb',
              },
              {
                id:4,
                url: 'https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb',
              },

            ],
      };
    
        render() {
            return (
                <ImageConn>
                        {this.state.images.map((img) => {
                            return <img  src={img.url} key={img.id} alt="name"  />
                        })}
                </ImageConn>
        )}
      
}

export default ImagesConnect;
