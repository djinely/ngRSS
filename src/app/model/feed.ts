import { FeedEntry } from './feed-entry';

export class Feed {
	author: string;
	description: string;
	image: string;
	link: string;
	title: string;
	url: string;
  	entries: Array<FeedEntry>;

  	constructor(author, description, image, link, title, url, entries) {
  		this.author = author;
  		this.description = description;
  		this.image = image;
  		this.link = link;
  		this.title = title;
  		this.url = url;
  		this.entries = entries.map(entry => { return new FeedEntry(entry.author, entry.categories, entry.content, entry.description, entry.guid, entry.link, entry.pubDate, entry.thumbnail, entry.title) } );
  	}
}