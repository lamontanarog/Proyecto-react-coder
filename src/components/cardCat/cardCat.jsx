import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardCatStyle.css';

function CardsCat() {
  return (
      <>
      <div className='cardStyle'>
          
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.paogi.com/uploads/picture/image/4295/AFRODITA.BLUE.jpg" />
      <Card.Body>
        <Card.Title className='titleCard'>AFRODITA WHITE</Card.Title>
        <Card.Text>El Afrodita White Oro Blanco Paladio es un anillo de oro 18 kilates con una piedra Cubic Swarovski color azul.
        </Card.Text>
        <Button className='buttonCard' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card  style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.paogi.com/uploads/picture/image/2910/ACUARIO-STONE-FRENTE.jpg" />
      <Card.Body>
        <Card.Title className='titleCard' >ACUARIO STONE ROSE</Card.Title>
        <Card.Text>Aros de Oro rosa 18k inspirados en la constelación Acuario con Cubic Swarovski.
        </Card.Text>
        <Button className='buttonCard' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card  style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.paogi.com/uploads/picture/image/3809/COLLAR-LOVE-1.jpg" />
      <Card.Body>
        <Card.Title className='titleCard' >LOVE</Card.Title>
        <Card.Text>El Love es un dije de plata 925 con un cristal Swarovski.
        </Card.Text>
        <Button className='buttonCard' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default CardsCat;