import {Component} from 'angular2/core';
// Component metadata decorator (works like an attribute in other programming languages)
@Component({
    selector: 'app',
    // Demonstrate use of DatePipe to format a date value to string based on medium format
    template: `
                <h2>Angular component</h2>
                <h3>{{test}}</h3>
                <p>This app was loaded at:{{dateObj | date: \'medium\'}}</p>
              `
})
export class AppComponent {
    test: string = "Test";
    // dateObj variable that sets the current date
    dateObj: Date = new Date();
}