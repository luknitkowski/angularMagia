import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MailSendService } from '../mail-send.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, private mailSendService: MailSendService,
              private snackBar: MatSnackBar, public googleAnalyticsService: GoogleAnalyticsService) {
    meta.addTag({name: 'keywords', content: 'kontakt, contact'});
  }

  ngOnInit() {
  }
  onSubmit(f) {
    if (f.valid) {
      this.mailSendService.sendMail(f.value);
      f.resetForm();
      this.googleAnalyticsService.eventEmitter('kontakt', 'email', 'wyslane');
    } else {
      this.snackBar.open('Niepoprawna forma!', 'ok', {
        duration: 2000,
      });
      this.googleAnalyticsService.eventEmitter('kontakt', 'email', 'niepoprawna walidacja');
    }
  }

  scrollDownPage() {
    const maxHeight = document.body.scrollHeight;
    window.scrollTo({top: maxHeight , behavior: 'smooth'});
  }

}
