import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Campera SST original',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL         ',
      precio: 35000,
      imagen: '/sst.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Campera La Jeremy Scoot',
      descripcion: 'Talles Disponibles: S,M,L,XXL',
      precio: 35000,
      imagen: '/jeremycampera.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Campera PH Original',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL',
      precio: 35000,
      imagen: '/Phcampera.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Campera Adidas Superstar',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL',
      precio: 89.99,
      imagen: '/nikeoso.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Pantalon Corto Potrero',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL',
      precio: 9000,
      imagen: '/potreroo.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Pantalon Corto Potrero',
      descripcion: 'Talles Disponibles: S,M,L,XXL',
      precio: 9000,
      imagen: '/argentinapotrero.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Pantalon Anti Seco',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL',
      precio: 8000,
      imagen: '/pantalonseco.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Musculosa Anti Seco',
      descripcion: 'Talles Disponibles: S,M,L,XL,XXL',
      precio: 8000,
      imagen: '/musculosaseco.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Zapatillas Pumas Mayze',
      descripcion: 'Talles Disponibles Del 30 al 45',
      precio: 140000,
      imagen: '/pumas.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'Zapatillas TNT Nike',
      descripcion: 'Talles Disponibles Del 30 al 45',
      precio: 35000,
      imagen: '/tntnikee.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'Zapatillas Vapor Max',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 120000,
      imagen: '/vapor.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'Zapatilla Furyosas Nike',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 140000,
      imagen: '/furiosass.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 13,
      nombre: 'Botines Nike Phantom',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 140000,
      imagen: '/botinn.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 14,
      nombre: 'Botines Adidas F50',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 120000,
      imagen: '/f5050.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 15,
      nombre: 'Botines Nike Mercurial',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 120000,
      imagen: '/nn.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 16,
      nombre: 'Botines Puma Future',
      descripcion: 'Talles Disponibles Del 40 al 45',
      precio: 120000,
      imagen: '/puma.jpg', // Asegúrate de que esta ruta sea correcta
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
