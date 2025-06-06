import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IFormSpreeResult {
  next: string;
  ok: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly http = inject(HttpClient);

  isSending = false;
  success = false;
  failureMessage = '';

  onSubmit(contactForm: NgForm): void {
    if (contactForm.form.controls.subject.value !== '') {
      this.failureMessage = `It looks like you're a bot!`;
    } else {
      if (contactForm.form.valid) {
        this.failureMessage = '';
        this.isSending = true;
        const formData = {
          name: contactForm.form.controls.name.value as string,
          email: contactForm.form.controls.email.value as string,
          message: contactForm.form.controls.message.value as string,
        };
        this.http.post<IFormSpreeResult>('https://formspree.io/f/mwkdkank', JSON.stringify(formData)).subscribe({
          next: (data) => {
            // console.log(data);
            if (data.ok) {
              this.success = true;
              this.isSending = false;
              this.failureMessage = '';
            } else {
              this.formError();
            }
          },
          error: (err: Error) => {
            console.error('error', err);
            this.formError();
          },
        });
      }
    }
  }

  private formError(): void {
    this.success = false;
    this.isSending = false;
    this.failureMessage = 'Something went wrong, please try again!';
  }
}
