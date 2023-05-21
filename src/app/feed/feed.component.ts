import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/assets/models/feed';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) {
    this.listFeed = [];
    this.feed;
  }

  listFeed: Feed[];
  feed: Feed = new Feed;

  ngOnInit() {
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
