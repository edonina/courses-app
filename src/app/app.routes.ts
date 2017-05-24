import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit/course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent},
	{path: 'login', component: LoginComponent},
	{path: 'logout', component: LoginComponent},
	{path: 'courses', component: CoursesComponent},
	{path: 'course/:id/edit', component: EditCourseComponent, data : {id : 'some value'}},
	{path: 'course/add', component: EditCourseComponent},
	{path: 'edit-course', component: EditCourseComponent, data : {id : 'some value'}},
	{path: '**', component: NoContentComponent}
];
