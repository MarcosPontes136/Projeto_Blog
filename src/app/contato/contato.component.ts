import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { Email } from 'src/assets/models/email';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  ngOnInit() {
  }

  mail : Email = new Email();

  constructor(private http: HttpClient, private emailService :EmailService) { }

  private enviarEmail() {
    this.emailService.enviarEmail(this.mail)
      .subscribe(data => console.log(data));
  }

  onSubmit() {
    this.enviarEmail();
  }

}
