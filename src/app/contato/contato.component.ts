import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { Email } from 'src/assets/models/email';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import { MudaClasseService } from '../service/mudaClasse.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  private acaoSubscription!: Subscription;
  isActive!: boolean;

  mail : Email = new Email();

  constructor(private mudaClasseService: MudaClasseService, private emailService :EmailService) { }

  ngOnInit() {
    this.acaoSubscription = this.mudaClasseService.acao$.subscribe((estado: boolean) => {
      this.isActive = estado;
    });
  }

  private enviarEmail() {
    this.emailService.enviarEmail(this.mail)
      .subscribe(data => console.log(data));
  }

  onSubmit() {
    this.enviarEmail();
  }

}
