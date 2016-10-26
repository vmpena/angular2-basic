import { Component } from '@angular/core';

@Component({
    selector: 'about-us',
    templateUrl: './app/about.component.html'
})

export class AboutComponent {
    title = 'About Us';
    description = 'This is the description property of AboutComponent.';
}