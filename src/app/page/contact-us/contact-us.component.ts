import { animate, style } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  get name() {return this.contactForm.get('name')}
  get companyName() {return this.contactForm.get('companyName')}
  get number() {return this.contactForm.get('number')}
  get email() {return this.contactForm.get('email')}
  get desc() {return this.contactForm.get('desc')}



  constructor(private contactService: ContactService) { }

  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    companyName: new FormControl(null, Validators.required),
    number: new FormControl(null, [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    desc: new FormControl(null, Validators.required)
  })


  onSubmit() {


    if(!this.contactForm.valid) {
      return;
    }

  
    const contactInfo = this.handleForm();

    
    this.contactService.sendMessage(contactInfo).subscribe({
      next: res => { console.log(res); },
      error: err => { console.log(err); }
    })
  }


  handleForm() {
    const name = this.contactForm.value.name;
    const companyName = this.contactForm.value.companyName;
    const number = this.contactForm.value.number;
    const email = this.contactForm.value.email;
    const desc = this.contactForm.value.desc;

    const info = {
      name: name,
      companyName: companyName,
      number: number,
      email: email,
      desc: desc
    }

    return info;
  }


  animateForm = [
    style({opacity: 0, transform: 'translateY(300px)'}),
    animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'translateY(100px)'}))
  ];

}
