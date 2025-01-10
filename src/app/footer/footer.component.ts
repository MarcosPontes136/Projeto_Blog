import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { MudaClasseService } from '../service/mudaClasse/mudaClasse.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, MatIconModule, FontAwesomeModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private acaoSubscription!: Subscription;
  isActive!: boolean;

  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faGithub = faGithub

  constructor(    private mudaClasseService: MudaClasseService) { }

  ngOnInit() {
    this.acaoSubscription = this.mudaClasseService.acao$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (estado: boolean) => {
          this.isActive = estado;
        }
      });
  }

  ngOnDestroy() {
    // Completa o Subject para liberar as assinaturas
    this.destroy$.next();
    this.destroy$.complete();
  }

}
