import { Component } from '@angular/core';

@Component({
    selector: 'contact-us',
    templateUrl: './app/contact.component.html'
})

export class ContactComponent {
    title = 'How to Contact Us';
    phoneNumber = '1-23-456-7890';
    contactMethods = [ 'email', 'fax', 'Morse code', 'telegram', 'smoke signals'];
    officeIsOpen = true;
}