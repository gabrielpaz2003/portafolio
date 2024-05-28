import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css']
})
export class ProjectSliderComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Sci-Fi Blog',
      details: 'Realizado con React + Vite | NodeJS | PostgreSQL',
      videoUrl: '../../../assets/video/project1video.mp4',
      sourceCodeUrl: 'https://github.com/gabrielpaz2003/Proyecto-Blog-STW.git',
      imageUrl: 'assets/img/project1.jpg'
    },
    {
      id: 2,
      name: 'Evoluciona Gestor Documental',
      details: 'Realizado con Angular | Rust | PostgreSQL',
      videoUrl: 'url_to_video2',
      sourceCodeUrl: 'url_to_source_code2',
      imageUrl: 'assets/img/project2.jpg'
    },
    {
      id: 3,
      name: 'La Isla Misteriosa',
      details: 'Realizado con HTML | CSS',
      videoUrl: 'url_to_video3',
      sourceCodeUrl: 'url_to_source_code3',
      imageUrl: 'assets/img/project3.jpg'
    },
    {
      id: 4,
      name: 'Basic Calculator',
      details: 'Realizado con React + Vite | CSS',
      videoUrl: 'url_to_video4',
      sourceCodeUrl: 'url_to_source_code4',
      imageUrl: 'assets/img/project4.jpg'
    }
    // más proyectos...
  ];
  selectedProjectIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  openModal(index: number): void {
    console.log('index', index);
    console.log('Abriendo Modal');
    this.selectedProjectIndex = index;

  }

  closeModal(): void {
    this.selectedProjectIndex = null;
  }
}

