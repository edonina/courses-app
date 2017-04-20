interface ICourse {
	id: number;
	title: string;
	description: string;
	date: Date;
	duration: any;
	topRated: boolean;
}

export class Course implements ICourse {
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public date: Date,
		public duration: any,
		public topRated: boolean
	) {}
}
