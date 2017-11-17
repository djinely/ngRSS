import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from './model/feed';
import { FeedEntry } from './model/feed-entry';

@Injectable()
export class FeedService {

  private rssToJson: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: Http) {}

  getFeedContent(url: string) {
    return this.http.get(this.rssToJson + url)
                        .map(res => res.json())
                        .map(data => {
                          let feed = data.feed;
                          let entries: Array<FeedEntry> = data.items;
                          return new Feed(feed.author, feed.description, feed.image, feed.link, feed.title, feed.url, entries)
                        })
                        .catch(this.handleError);
  }

  private handleError(err: any) {
    console.error('Error');
    return Observable.throw('Error');
  }
}