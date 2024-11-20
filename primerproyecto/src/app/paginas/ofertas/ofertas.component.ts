import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Conjunto Team Balanza',
      descripcion: 'Talle M Unicamente Disponible         ',
      precio: 12000,
      imagen: '/balanza.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Conjunto Nike Tech',
      descripcion: 'Talle M Y L disponiblle',
      precio: 40000,
      imagen: '/nk.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Conjunto Del Milan',
      descripcion: 'Talle M Disponible',
      precio: 35000,
      imagen: '/milann.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Conjunto Lacoste',
      descripcion: 'Talles L unicamente disponible',
      precio: 89.99,
      imagen: '/rr.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Conjunto BMW Puma ',
      descripcion: 'Talles M,L Disponibles',
      precio: 20000,
      imagen: '/bmw.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Conjunto Deportivo',
      descripcion: 'Talles M unicamente disponible',
      precio: 15000,
      imagen: '/river.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}

