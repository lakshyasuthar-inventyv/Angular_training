# Angular Training Repository

This repository contains multiple Angular projects and tasks for learning and practicing Angular development. Each folder is a separate project or task, covering different aspects of Angular, including components, services, RxJS, signals, routing, and more.

## Repository Structure

- `Task-1/` — Foundational Angular concepts and practice
- `Task-2/` — Advanced rendering, change detection, and signals
- `FinalTask/` — Capstone project with backend integration

## Getting Started

Clone the repository and install dependencies for any task/project:

```bash
git clone <repo-url>
cd <project-folder>
npm install
ng serve
```

## Useful Angular CLI Commands

- `ng generate component <name>` — Create a new component
- `ng generate service <name>` — Create a new service
- `ng generate pipe <name>` — Create a new pipe
- `ng generate guard <name>` — Create a new route guard
- `ng build` — Build the project for production
- `ng test` — Run unit tests
- `ng e2e` — Run end-to-end tests

---

## Task-1: Angular Basics

Practice project covering:
- Data binding (property, event, two-way)
- Component communication (`@Input`, `@Output`)
- RxJS basics (Subject, BehaviorSubject)
- Custom and built-in pipes
- Lifecycle hooks (`ngOnInit`, `ngDoCheck`, etc.)
- Shared logic in the `comman` folder

See `Task-1/README.md` for details.

---

## Task-2: Advanced Rendering & Signals

Project focused on:
- Angular signals for reactive state
- Zoneless rendering and manual change detection
- Standalone components and CommonModule usage
- Advanced RxJS patterns
- Material UI integration

See `Task-2/README.md` for setup and usage.

---

## FinalTask: Capstone Project

Comprehensive Angular project with:
- Backend integration (see `FinalTask/backend/`)
- Advanced routing and guards
- Notification system with RxJS and Angular Material
- Account settings and live UI updates with signals
- Production-ready build and testing

See `FinalTask/README.md` for instructions.

---

## Shared Concepts

- **Comman Folder:** Reusable components, interfaces, and logic for all tasks
- **CommonModule:** Always import for Angular directives (`*ngIf`, `*ngFor`)
- **Lifecycle Hooks:** Use for debugging and data fetching
- **RxJS:** For state management, notifications, and async operations
- **Signals:** For instant UI updates and reactive state
- **Services:** Shared logic and data access
- **Routing & Guards:** Secure and organize navigation

---

## License

This repository is for educational purposes and personal learning. Feel free to use, modify, and share.
