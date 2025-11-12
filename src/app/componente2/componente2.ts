import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceApi } from '../service-api';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css'
})
export class Componente2Component implements OnInit {

  posts = computed(() => this.api.posts());

  constructor(private api: ServiceApi) {}

  ngOnInit() {
    this.api.getPosts();
  }
}

