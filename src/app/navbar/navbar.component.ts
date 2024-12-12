import { Component, OnInit } from '@angular/core';
import { MudaClasseService } from '../service/mudaClasse/mudaClasse.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private mudaClasseService: MudaClasseService) { }

  ngOnInit(): void {
  }

  mudaAcao(): void {
    const banner = document.querySelector('.banner');
    const menuToggle = document.querySelector('.toggle');

    if (menuToggle && banner) {

      menuToggle.classList.toggle('active');
      banner.classList.toggle('active');

      // Verificar o estado atual da classe
      const isMenuToggleActive = menuToggle.classList.contains('active');

      // Emitir informação de mudança
      this.mudaClasseService.emitirAcao(isMenuToggleActive);
    }
  }

}
