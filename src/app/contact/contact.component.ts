import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

interface IContactResult {
  result: 'success' | 'fail' | 'invalid';
  data?: {
    name: string;
    email: string;
    subject: string;
    message: string;
    good: boolean;
  };
  headers?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isSending = false;
  success = false;
  failureMessage = '';
  constructor(private http: HttpClient) {}

  onSubmit(contactForm: NgForm): void {
    if (contactForm.form.valid) {
      this.isSending = true;
      const formData = {
        name: contactForm.form.controls.name.value as string,
        email: contactForm.form.controls.email.value as string,
        subject: contactForm.form.controls.subject.value as string, //honeypot for bots
        message: contactForm.form.controls.message.value as string,
        good: true,
      };
      this.http
        .post<IContactResult>('../../assets/contact.php', JSON.stringify(formData))
        .pipe(map((res) => res))
        .subscribe({
          next: (data) => {
            this.contactSuccess(data);
          },
          error: (err: Error) => {
            this.contactError(err);
          },
        });
    }
  }

  private contactSuccess(data: IContactResult): void {
    if (data.result === 'success') {
      this.success = true;
      this.isSending = false;
      this.failureMessage = '';
    } else {
      this.success = false;
      this.isSending = false;
      if (data.result === 'invalid') {
        this.failureMessage = 'One of the fields was not filled in properly. Please try again.';
      } else {
        //fail
        this.failureMessage = 'It looks like you might be a bot! Try filling the form out again.';
      }
    }
  }

  private contactError(err: Error): void {
    this.success = false;
    this.isSending = false;
    this.failureMessage = 'Something went wrong, please try again!';
    console.error('error', err);
  }
}
