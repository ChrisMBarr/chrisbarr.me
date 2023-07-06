import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

interface IContactResult {
  result: 'success' | 'fail' | 'invalid';
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;
  success = false;
  failureMessage = '';
  constructor(private http: HttpClient) {}

  //responses: success | invalid | fail
  //client: valid

  onSubmit(): void {
    if (this.contactForm.form.valid) {
      const formData = {
        name: this.contactForm.form.controls['name'].value as string,
        email: this.contactForm.form.controls['email'].value as string,
        subject: this.contactForm.form.controls['subject'].value as string, //honeypot for bots
        message: this.contactForm.form.controls['message'].value as string,
        good: true,
      };
      this.http
        .post<IContactResult>('http://chrisbarr.me/assets/contact.php', JSON.stringify(formData))
        .pipe(map((res) => res))
        .subscribe({
          next: (data) => {
            if (data.result === 'success') {
              this.success = true;
              this.failureMessage = '';
            } else {
              this.success = false;
              this.fail(data.result);
            }
          },
          error: (err: Error) => {
            this.success = false;
            this.error(err);
          },
        });
    } else {
      console.log('invalid!', this.contactForm);
    }
  }

  private fail(result: 'fail' | 'invalid'): void {
    if(result === 'invalid'){
      this.failureMessage = 'One of the fields was not filled in properly. Please try again.'
    } else {
      //fail
      this.failureMessage = 'It looks like you might be a bot! Try filling the form out again.'
    }
  }

  private error(error: Error): void {
    this.failureMessage = 'Something went wrong, please try again!'
    console.error('error', error);
  }
}
