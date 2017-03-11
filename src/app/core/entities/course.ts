interface ICourse {
	id: number;
	title: string;
	description: string;
	creationDate: Date;
	duration: number;
}

export class Course implements ICourse{
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public creationDate: Date,
		public duration: number
	) {}
}

