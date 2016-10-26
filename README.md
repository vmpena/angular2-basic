# Getting Started

According to the official Angular docs: 
>> "You write Angular applications by composing HTML templates with 
Angularized markup, writing component classes to manage those templates,
 adding application logic in services, and boxing components and 
 services in modules."

>> Then you launch the app by bootstrapping the root module. Angular 
takes over, presenting your application content in a browser and 
responding to user interactions according to the instructions 
you've provided."

This app is a very basic Angular 2 app including a simple implementation 
of some of the core elements mentioned above such as routing, components and modules. 

The content inside each html template is wrapped inside HTML fieldset 
tags to display the source of each page's content: 

    <fieldset>
         <legend class="marker">about.component.html</legend>
          <p>Page Header</p>
          <p>{{description}}</p>
               <p>This is the content of an html template file</p>
     </fieldset>
                                           
References/Sources:
 - [Official Docs - Architecture](https://angular.io/docs/ts/latest/guide/architecture.html#)
 - [Angular 2 - Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
 - [Angular 2 - Tour of Heroes Tutorial](https://angular.io/docs/ts/latest/tutorial/)
 - [Tour of Heroes - Source code](https://github.com/johnpapa/angular2-tour-of-heroes)

Mock API Service 
 - [JSON Server](https://github.com/typicode/json-server)