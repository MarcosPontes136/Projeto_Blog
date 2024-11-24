import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { Email } from 'src/assets/models/email';
import { Subscription } from 'rxjs/internal/Subscription';
import { MudaClasseService } from '../service/mudaClasse.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contato',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss', '../app.component.scss']
})
export class ContatoComponent implements OnInit {

  private acaoSubscription!: Subscription;
  isActive!: boolean;

  e_mail : Email = new Email();

  emailValido = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(this.e_mail.fromEmail);

  constructor(private mudaClasseService: MudaClasseService, private emailService :EmailService) { }

  ngOnInit() {
    this.acaoSubscription = this.mudaClasseService.acao$.subscribe((estado: boolean) => {
      this.isActive = estado;
    });
  }

  private enviarEmail() {
    this.emailService.enviarEmail(this.e_mail)
      .subscribe(data => console.log(data));
  }

  validaBotao(): boolean {
    const emailValido = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/.test(this.e_mail.fromEmail);

    return (
      !this.e_mail.fromName ||
      this.e_mail.fromName.length < 3 ||
      !this.e_mail.fromEmail ||
      !emailValido ||
      !this.e_mail.subject ||
      this.e_mail.subject.length < 5 ||
      !this.e_mail.text ||
      this.e_mail.text.length < 5
    );
  }

  onSubmit() {
    this.enviarEmail();
  }

}
