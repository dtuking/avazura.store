import { Component } from '@angular/core';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
    email: string = '';

    submitEmail() {
        // Save the value and clear the input field
        console.log('Submitted email:', this.email);
        this.email = '';
    }
}
