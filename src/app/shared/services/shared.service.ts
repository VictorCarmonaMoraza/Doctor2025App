import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../../user/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlerts(message: string, type: string) {
    this._snackBar.open(message, type, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000 // 3 Segundos
    })
  }

  saveSession(sesion: Sesion) {
    localStorage.setItem("userSesion", JSON.stringify(sesion))
  }

  getSesion() {
    const sesionString = localStorage.getItem("userSesion");
    const userToken = JSON.parse(sesionString!);
    return userToken;
  }

  cleanSesion() {
    localStorage.removeItem("userSesion");
  }
}



