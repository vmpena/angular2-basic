/*
    Import declarations are used to import entities from other modules and provide
    bindings for them in the current module.
    https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#11.3.2

    These import declarations are from the ES2015 module syntax.
    http://babeljs.io/docs/learn-es2015/#modules
*/

// The root component that Angular uses to bootstrap the app
import { Component } from '@angular/core';

/*
    A Decorator is a special kind of declaration that can be attached
    to a class declaration, method, accessor, property, or parameter.
    Decorators use the form @expression, where expression must
    evaluate to a function that will be called at runtime with
    information about the decorated declaration.

    Decorators are a proposed feature in the next version of
    JavaScript (ES7), but they are implemented as part of TypeScript.
    https://www.typescriptlang.org/docs/handbook/decorators.html
*/
@Component({
    selector: 'app-main',
    templateUrl: './app/app.component.html'
})

/*
    An export declaration declares one or more exported module members. Exported members
    of a module can be imported in other modules using import declarations
    https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#1134-export-declarations
*/
export class AppComponent {
    title = 'Angular 2 - Basic app';
    description = 'Brief overview of features';
}