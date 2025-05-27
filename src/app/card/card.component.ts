import { Component } from '@angular/core';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cards: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Descripción de la tarjeta número 1',
      imageUrl: 'https://picsum.photos/300/200?random=1',
      buttonText: 'Ver más'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Descripción de la tarjeta número 2',
      imageUrl: 'https://picsum.photos/300/200?random=2',
      buttonText: 'Explorar'
    },
    // Agrega 10 cards más...
    {
      id: 3,
      title: 'Card 3',
      description: 'Descripción de la tarjeta número 3',
      imageUrl: 'https://picsum.photos/300/200?random=3'
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Descripción de la tarjeta número 4',
      imageUrl: 'https://picsum.photos/300/200?random=4'
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'Descripción de la tarjeta número 5',
      imageUrl: 'https://picsum.photos/300/200?random=5'
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'Descripción de la tarjeta número 6',
      imageUrl: 'https://picsum.photos/300/200?random=6'
    },
    {
      id: 7,
      title: 'Card 7',
      description: 'Descripción de la tarjeta número 7',
      imageUrl: 'https://picsum.photos/300/200?random=7'
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'Descripción de la tarjeta número 8',
      imageUrl: 'https://picsum.photos/300/200?random=8'
    },
    {
      id: 9,
      title: 'Card 9',
      description: 'Descripción de la tarjeta número 9',
      imageUrl: 'https://picsum.photos/300/200?random=9'
    },
    {
      id: 10,
      title: 'Card 10',
      description: 'Descripción de la tarjeta número 10',
      imageUrl: 'https://picsum.photos/300/200?random=10'
    },
    {
      id: 11,
      title: 'Card 11',
      description: 'Descripción de la tarjeta número 11',
      imageUrl: 'https://picsum.photos/300/200?random=11'
    },
    {
      id: 12,
      title: 'Card 12',
      description: 'Descripción de la tarjeta número 12',
      imageUrl: 'https://picsum.photos/300/200?random=12'
    }
  ];

  // Función para manejar el click del botón
  handleButtonClick(card: Card) {
    console.log(`Clicked on card ${card.id}`, card);
    // Aquí puedes agregar tu lógica de navegación o cualquier otra acción
  }
}