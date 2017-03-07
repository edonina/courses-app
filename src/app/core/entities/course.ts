interface ICourse {
	id: number;
	title: string;
	description: string;
	creationDate: Date;
	duration: Date;
}

export class Course{
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public creationDate: Date,
		public duration: Date
	) {}
}

