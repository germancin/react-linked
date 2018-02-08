import React from 'react';
import styled  from 'styled-components';
import UserComp from './UserComp';

const AllPeople = styled.div`

    .title {
      font-size: 18px;
      padding: 10px 24px 9px;
      color:#414141;
      text-align:left;
      font-weight: 100;
    }

`;

class People extends React.Component {
      state = {
        users: [
          {
            id: 1,
            name:'Davida Topel',
            carrer:'Social MEdia Manager',
            image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id: 2,
            name:'Kendal Presume',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id: 3,
            name:'Carla',
            carrer:'UX Designer',
            image: 'https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id:4,
            name:'Gagandaba Sill',
            carrer:'Training Programs Spec',
            image: 'https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id: 5,
            name:'Natali Herrera',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/789305/pexels-photo-789305.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id: 6,
            name:'Community Manang',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/314582/pexels-photo-314582.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id: 7,
            name:'Virgini Torres',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/301298/pexels-photo-301298.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id:8,
            name:'Andres Calamaro',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/39349/teens-robot-future-science-39349.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          {
            id:9,
            name:'Sofia Caiche',
            carrer:'Web Designer',
            image: 'https://images.pexels.com/photos/604694/pexels-photo-604694.jpeg?h=350&auto=compress&cs=tinysrgb',
          },
          
        ],
      };
      render() {
            return (
                <AllPeople>
                        <div className="title">People you may know</div>

                              {this.state.users.map((user) => {
                                    return  <UserComp dUser={user} key={user.id} />
                              })}

                </AllPeople>
      );}
      
}

export default People;