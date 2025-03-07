import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'doctor2025App';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5065/api/User').subscribe({
      // next: response => this.users = response,
      // error: error => console.log(error),
      // complete: () => console.log('La solicitud esta completa')

      //NUEVO
      next: (response) => {
        // Añadimos a la lista de elementos nuestro nuevos valores
        this.users = response;
        console.log(this.users);
      },
      error: (error) => {
        console.error('Error al crear el elemento:', error);
      },
      complete: () => {
        //Recragamos la lista de elementos en pantalla
        console.log('La solicitud esta completa')
      }
      //FIN NUEVO
    })
  }

}
