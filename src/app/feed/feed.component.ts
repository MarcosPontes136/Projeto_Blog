import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/assets/models/feed';
import { FeedService } from '../service/feed.service';
import { Subscription } from 'rxjs';
import { MudaClasseService } from '../service/mudaClasse.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-feed',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss', '../app.component.scss']
})
export class FeedComponent implements OnInit {

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
    this.acaoSubscription = this.mudaClasseService.acao$.subscribe((estado: boolean) => {
      this.isActive = estado;
    });

    this.BuscaFeed()
  }

  BuscaFeed(){
    this.feedService.getMessage().subscribe((data: Feed[]) => {
      this.listFeed = data
    })
  }

  cadastrarMensagem() {
    this.feedService.feedMensagem(this.feed).subscribe((data: Feed[]) => {
      this.listFeed = data;
      location.assign('/feed');
    })
  }


  validaBotao(): boolean {
    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(this.feed.nome);

    return (
      !this.feed.nome ||
      this.feed.nome.length < 3 ||
      !nomeValido ||
      !this.feed.mensagem ||
      this.feed.mensagem.length < 5
    );
  }

}
