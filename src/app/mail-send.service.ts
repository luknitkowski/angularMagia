import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSendService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  sendMail(obj) {
    console.log(obj);
    this.snackBar.open('Wiadomość wysłana!', 'ok', {
      duration: 2000,
    });
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }
    const formData = new FormData();
    formData.append('file', obj);
    console.log(formData);
    this.http.post<any>(`https://cors-anywhere.herokuapp.com/https://us-central1-magiaogrodow.cloudfunctions.net/sendMail?dest=luknitkowski@gmail.com`, formData, options).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
