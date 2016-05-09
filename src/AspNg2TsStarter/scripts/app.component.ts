import {Component} from 'angular2/core';
// Component metadata decorator (works like an attribute in other programming languages)
@Component({
    selector: 'app',
    template: 'Angular component <br />{{test}}'
})
export class AppComponent {
    test: string = "Test";
}