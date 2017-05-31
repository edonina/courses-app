import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent }    from './courses.component.ts';

// Route Configuration
const coursesRoutes: Routes = [
/*	{ path: 'courses', component: CoursesComponent },*/
];

export const routes = RouterModule.forChild(coursesRoutes);
