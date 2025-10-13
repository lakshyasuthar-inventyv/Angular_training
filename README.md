



# My Angular Practice Project

This is my personal Angular project where I learned and practiced many important topics. I built this step by step, trying out features and commands myself. Here’s how I covered each topic in agent mode, with practical details and learning steps:

---

## Useful Angular Commands

- npm install
- ng serve
- ng build
- ng generate component <name>
- ng generate service <name>
- ng generate pipe <name>
- ng generate guard <name>

---

## Project setup and basic commands
Start by running `npm install` to get all dependencies. Use `ng serve` to run the development server and see changes live. For production, use `ng build`. Generate components, services, pipes, and guards with Angular CLI commands for fast, organized development. I keep my shared components and logic in the `comman` folder for easy access.

## Data binding
Practice property binding (`[value]="data"`), event binding (`(click)="doSomething()"`), and two-way binding (`[(ngModel)]="data"`). Use these in forms, buttons, and parent-child communication. I used these techniques in my user profile and account settings components to keep the UI in sync with the data.


# Comman Folder

In my project, I created a `comman` folder to organize reusable components, interfaces, and shared logic. This helps keep the codebase clean and makes it easy to find and reuse code. For example, I put shared UI components (like navbar, chatbot), common CSS, and interfaces in this folder. Whenever I need a feature that is used in multiple places, I add it to `comman` so it’s available everywhere.

## CommonModule
Always import `CommonModule` in feature modules and standalone components to use Angular directives like `*ngIf` and `*ngFor`. I made sure every shared component in the `comman` folder imports `CommonModule` so it works everywhere.

## Lifecycle hooks
Add hooks like `ngOnInit`, `ngDoCheck`, `ngAfterViewInit` to your components. Log messages or fetch data in `ngOnInit`, and use `ngDoCheck` to watch for changes. This helps you understand how Angular updates your app. I used lifecycle hooks in my user profile, chatbot, and account settings components to track and debug changes.

## RxJS
Use `BehaviorSubject` for login state and `Subject` for notifications in your services. Try out hot/cold observables and compare with Promises. Subscribe to these in your components to react to changes. I used RxJS in my AuthService and notification system, and connected it to UI components in the `comman` folder.

## Account settings and signals
Build an account settings page using Angular signals for live UI updates. Change user data and see the UI update instantly. I used signals in my account settings component and shared logic from the `comman` folder to keep everything reactive.

## Injectable services
Create services (e.g., AuthService, UserService) with `@Injectable`. Inject them in your components to share logic and data across the app. I put shared services in the `service` folder and injected them into components in `comman` and feature folders.

## Custom and built-in pipes
Use built-in pipes (`date`, `uppercase`, `async`) in your templates. Create custom pipes for special formatting and use them in your components. I made custom pipes in the `comman` folder and used them in user profile and account settings.

## Input/Output and event emitters
Use `@Input` to pass data from parent to child, and `@Output` with `EventEmitter` to send events back. Practice this in user profile and demo components. I used these patterns in shared components in the `comman` folder for flexible communication.

## Named outlets
Set up a named outlet in your main template (e.g., for a chatbot). Route components to it for global features that can open anywhere. My chatbot component lives in the `comman` folder and uses a named outlet for global access.

## Routing
Define routes for all pages and features in `app.routes.ts`. Use route parameters, guards, and lazy loading for better navigation and performance. I organized my routes to include shared components from the `comman` folder.

## Auth guards
Generate guards with `ng generate guard <name>`. Use them in your routing config to protect pages and redirect users if needed. My guards use services from the `service` folder and protect routes to components in `comman` and feature folders.

## Notification system with RxJS
Create a notification system using RxJS `Subject` and Angular Material Snackbar. Trigger notifications on login/logout and show them as toasts in the UI. I connected the notification system to shared UI components in the `comman` folder for global feedback.
