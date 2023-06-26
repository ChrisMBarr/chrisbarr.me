// import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm;

  // constructor(private http: HttpClient) {}

  // ngAfterContentInit(): void {
  //   setTimeout(() => {
  //     this.contactForm.setValue({ name: 'test name', email: 'test@test.com', message: 'test message' });
  //   }, 100);
  // }

  onSubmit() {
    //   if (this.contactForm.form.valid) {
    //     console.log(this.contactForm.form.controls);
    //     const formData = {
    //       name: this.contactForm.form.controls['name'].value as string,
    //       email: this.contactForm.form.controls['email'].value as string,
    //       message: this.contactForm.form.controls['message'].value as string,
    //     };
    //     this.http.post('../../../assets/contact.asp', JSON.stringify(formData)).subscribe(
    //       (data) => {
    //         console.log('success!', data);
    //       },
    //       (error) => {
    //         console.log('error', error);
    //       }
    //     );
    //   } else {
    //     console.log('invalid!', this.contactForm);
    //   }
  }
}
