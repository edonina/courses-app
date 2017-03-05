import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent},
	{path: 'home', component: HomeComponent},
	{path: 'courses', component: CoursesComponent},
	{path: '**', component: NoContentComponent},
];
