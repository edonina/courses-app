interface course {
	id: number,
	title: string,
	description: string,
	creationDate: Date,
	duration: Date
}

export class Course implements course{
	public id: number;
	public title: string;
	public description: string;
	public creationDate: Date;
	public duration: Date;

	constructor(id: number, title: string, description: string, creationDate: Date, duration: Date) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.creationDate = creationDate;
		this.duration = duration;
	}
}
