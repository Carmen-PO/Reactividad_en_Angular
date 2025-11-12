import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Componente2Component } from '../componente2/componente2';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [RouterLink, CommonModule, Componente2Component],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1Component {
  mostrarHijo = false;
}

