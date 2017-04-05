interface ICourse {
	id: number;
	title: string;
	description: string;
	creationDate: Date;
	duration: any;
	topRated: boolean;
}

export class Course implements ICourse {
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public creationDate: Date,
		public duration: any,
		public topRated : boolean
	) {}
}
