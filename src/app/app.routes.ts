import { Routes } from '@angular/router';
import { AppComponent } from './';
import { HomeComponent } from './pages/home';
import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit-course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	/*{path: '', component: CoursesComponent},
	{path: 'login', component: LoginComponent,data: {breadcrumb: "Login"}},
	{path: 'logout', component: LoginComponent,data: {breadcrumb: "Logout"}},
	{path: 'courses', component: CoursesComponent, data: {breadcrumb: "Courses"}},
	{path: 'courses/:id', component: EditCourseComponent ,data: {breadcrumb: "Details"}},
	{path: 'courses/new', component: EditCourseComponent, data: {breadcrumb: "Add course"}},
	{path: '**', component: NoContentComponent,data: {breadcrumb: "404"}}
*/
	{
		path: "",
		component: AppComponent,
		children: [
			{
				path: "login",
				component: LoginComponent,
				data: {
					breadcrumb: "Login"
				}
			},
			{
				path: "",
				component: CoursesComponent,
				data: {
					breadcrumb: "Courses"
				}
			},
			{
				path: "courses",
				component: CoursesComponent,
				data: {
					breadcrumb: "Courses"
				}
			},
			{
				path: "courses/:id",
				component: EditCourseComponent,
				data: {
					breadcrumb: "Details"
				}
			},
			{
				path: "courses/new",
				component: EditCourseComponent,
				data: {
					breadcrumb: "Add"
				}
			},
			{
				path: "**",
				component: NoContentComponent,
				data: {
					breadcrumb: "404"
				}
			}
		]
	},
];
