import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
    const cardComponent = robots.map((username, i) => {
        return (<Card 
        key={i} 
        id={robots[i].id}
        name={robots[i].name} 
        username={robots[i].uersname} 
        email={robots[i].email}
        />)
    });
    return (
        <div>
           {cardComponent}
        </div>
    );
}
export default CardList;