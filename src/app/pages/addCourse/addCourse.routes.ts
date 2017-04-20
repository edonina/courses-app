import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent }    from './addCourse.component';

// Route Configuration
const addCourseRoutes: Routes = [
	{ path: 'add-course', component: AddCourseComponent }
];

export const routes = RouterModule.forChild(addCourseRoutes);
