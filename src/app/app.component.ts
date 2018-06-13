import { Component } from '@angular/core';    
import { Student } from './models/student';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// tu uzywam interfejsu Student do stworzenia obiektu konkretnego studenta
	//nadaje mu domyślne wartości
	student: Student = {name: '', lastName: '', index: 0, university: ''};
	//tworze przykładową tablicę napisów, gdzie będą przechowywane miasta
	universities: string[] = ["Gdańsk", "Warszawa", "Kraków"];

	setUniversity(university: string){
		this.student.university = university;
	}

	submitForm(): void {

	}

}