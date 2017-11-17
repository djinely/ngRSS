export class FeedEntry {
	author: string;
	categories: Array<string>;
	content: string;
	description: string;
	guid: string;
	link: string;
	pubDate: Date;
	thumbnail: string;
	title: string;

	constructor(author, categories, content, description, guid, link, pubDate, thumbnail, title) {
		this.author = author;
		this.categories = categories;
		this.content = content;
		this.description = description;
		this.guid = guid;
		this.link = link;
		this.pubDate = pubDate;
		this.thumbnail = thumbnail;
		this.title = title;
	}
}