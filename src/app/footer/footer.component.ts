import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { MudaClasseService } from '../service/mudaClasse.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, MatIconModule, FontAwesomeModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private acaoSubscription!: Subscription;
  isActive!: boolean;

  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faGithub = faGithub

  constructor(    private mudaClasseService: MudaClasseService) { }

  ngOnInit(): void {
    this.acaoSubscription = this.mudaClasseService.acao$.subscribe((estado: boolean) => {
      this.isActive = estado;
    });
  }

}
