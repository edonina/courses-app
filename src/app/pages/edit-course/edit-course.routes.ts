import { Routes, RouterModule } from '@angular/router';
import { EditCourseComponent }    from './edit-courses.component.ts';

// Route Configuration
const courseEditRoutes: Routes = [
	{ path: '/courses/:id', component: EditCourseComponent },
	{ path: '/courses/new', component: EditCourseComponent}
];

export const routes = RouterModule.forChild(courseEditRoutes);
