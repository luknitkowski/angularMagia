import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailSendService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  sendMail(obj) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post('https://us-central1-magiaogrodow.cloudfunctions.net/sendMail?dest=luknitkowski@gmail.com', JSON.stringify(obj), {headers : headers})
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      )
      this.snackBar.open('Wiadomość wysłana!', 'ok', {duration: 2000,});
  }
}
