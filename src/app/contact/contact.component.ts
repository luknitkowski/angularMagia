import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser'; 
import {NgForm} from '@angular/forms';
import { MailSendService } from '../mail-send.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, private mailSendService: MailSendService, private snackBar: MatSnackBar) {
    meta.addTag({name: 'keywords', content: 'kontakt, contact'});
  }

  ngOnInit() {
  }
  onSubmit(f) {
    if (f.valid) {
      this.mailSendService.sendMail(f.value);
      f.resetForm();
    } else {
      this.snackBar.open('Niepoprawna forma!', 'ok', {
        duration: 2000,
      });
    }
  }

  scrollDownPage() {
    const maxHeight = document.body.scrollHeight;
    window.scrollTo({top: maxHeight , behavior: 'smooth'});
  }

}
