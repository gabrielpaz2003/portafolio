import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showCvModal: boolean = false;
  isMenuOpen = false;

  constructor(private cd: ChangeDetectorRef) {}


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openCvModal(): void {
    this.showCvModal = true;
    this.cd.detectChanges(); // Forza a Angular a detectar el cambio
  }

  closeCvModal(): void {
    this.showCvModal = false;
    this.cd.detectChanges(); // Forza a Angular a detectar el cambio
  }

  downloadCv(language: string): void {
    const url = language === 'es' ? '../../../assets/documents/cv_es.pdf' : '../../../assets/documents/cv_en.pdf';
    window.open(url, '_blank');
  }
}
