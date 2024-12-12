import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../service/email/email.service';
import { Email } from 'src/assets/models/email';
import { Subscription } from 'rxjs/internal/Subscription';
import { MudaClasseService } from '../service/mudaClasse/mudaClasse.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopMessageComponent } from '../pop-message/pop-message.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, PopMessageComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss', '../app.component.scss']
})
export class ContatoComponent implements OnInit {

  @ViewChild(PopMessageComponent) popMessageComponent!: PopMessageComponent;

  private acaoSubscription!: Subscription;
  isActive!: boolean;

  e_mail: Email = new Email();

  constructor(private mudaClasseService: MudaClasseService, private emailService: EmailService) { }

  ngOnInit() {
    this.acaoSubscription = this.mudaClasseService.acao$
      .subscribe({
        next: (estado: boolean) => {
          this.isActive = estado;
        }
      });
  }

  onSubmit() {
    this.enviarEmail();
  }

  private enviarEmail() {
    this.emailService.enviarEmail(this.e_mail)
      .subscribe({
        next: (data) => {
          console.log("teste", data);
        },
        error: (error) => {
          if (error.status === 400) {
            this.messagePop("primary", "#info-fill", error.error);
          } else {
            this.messagePop("danger", "#exclamation-triangle-fill", error.message);
          }
        }
      });
  }

  messagePop(messageType: string, messageTypeIcons: string, message: string) {
    this.popMessageComponent.showMessage(messageType, messageTypeIcons, message);
  }

  validButton(): boolean {
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
}
