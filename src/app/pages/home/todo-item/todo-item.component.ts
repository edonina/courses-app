import { Component, ViewEncapsulation, Input } from '@angular/core';
import { TodoItem } from '../../../core/entities';
import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course',
	templateUrl: 'todo-item.component.html',
	styles: ['./todo-item.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent {
	@Input() public todo: TodoItem;

	constructor() {
	}

	public calculateStatusClass(status): string {
		return todoStatusClasses[status];
	}
}
