import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle,
  } from 'reactstrap';

  const PlayerCard = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>Country: {props.country}</CardText>
            <CardText>Number of Searches: {props.searches}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default PlayerCard;