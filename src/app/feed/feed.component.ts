import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/assets/models/feed';
import { FeedService } from '../service/feed.service';
import { Subscription } from 'rxjs';
import { MudaClasseService } from '../service/mudaClasse.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
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

    this.FindFeed()
  }

  FindFeed(){
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


}
