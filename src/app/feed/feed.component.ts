import { Component, OnInit, ViewChild } from '@angular/core';
import { Feed } from 'src/assets/models/feed';
import { FeedService } from '../service/feed/feed.service';
import { Subscription } from 'rxjs';
import { MudaClasseService } from '../service/mudaClasse/mudaClasse.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopMessageComponent } from "../pop-message/pop-message.component";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, FormsModule, PopMessageComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../app.component.scss']
})
export class FeedComponent implements OnInit {

  @ViewChild(PopMessageComponent) popMessageComponent!: PopMessageComponent;


  private acaoSubscription!: Subscription;
  isActive!: boolean;

  constructor(
    private feedService: FeedService,
    private mudaClasseService: MudaClasseService
  ) {
    this.listFeed = [];
    this.feed;
  }

  listFeed: Feed[];
  feed: Feed = new Feed;

  ngOnInit() {
    this.acaoSubscription = this.mudaClasseService.acao$
      .subscribe({
        next: (estado: boolean) => {
          this.isActive = estado;
        }
      });
      this.searchFeed()
  }

  searchFeed() {
    this.feedService.getMessage()
      .subscribe({
        next: (data: Feed[]) => {
          this.listFeed = data
        },
        error: (error) => {
          this.messagePop("danger", "#exclamation-triangle-fill", error.message);
        }
      });
  }

  registerMessage() {
    this.feedService.feedMessage(this.feed)
      .subscribe({
        next: (response: Feed) => {
          this.listFeed.push(response);
          this.messagePop("success", "#check-circle-fill", "Mensagem enviada com sucesso!");
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
    const nameValid = /^[A-Za-zÀ-ÿ\s]+$/.test(this.feed.nome);

    return (
      !this.feed.nome ||
      this.feed.nome.length < 3 ||
      !nameValid ||
      !this.feed.mensagem ||
      this.feed.mensagem.length < 5
    );
  }

}
