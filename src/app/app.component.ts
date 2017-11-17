import { Component, OnInit } from '@angular/core';
import { AppSettings } from './settings';
import { FeedService } from './rss.service';
import { Feed } from './model/feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedService, AppSettings]
})
export class AppComponent implements OnInit {
	constructor(private feedService: FeedService) {};
	feed: Feed;
	titleLen = AppSettings.TITLE_L;
	descLen = AppSettings.DESC_L;

	ngOnInit() {
		this.loadFeed();
	}

	loadFeed() {
		this.feedService.getFeedContent(AppSettings.FEED_URL).subscribe(
			feed => { this.feed = feed; },
            error => console.log(error)
		);
	}
}
