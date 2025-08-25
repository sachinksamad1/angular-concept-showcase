# Angular Concepts Showcase 🚀
This project is a beginner-friendly mini-application designed to demonstrate a wide range of core and advanced Angular concepts. Each concept is isolated within its own dedicated component, making it easy to understand and explore the specific code for each feature.

## ✨ Core Concepts Covered
This showcase provides hands-on examples for the following Angular features:

 1. Templates and Content Projection

      - `ng-template`: Defining reusable template blocks.

      - `ng-container`: A grouping element that doesn't render in the DOM.

      - `ng-content`: Projecting content from a parent component (Content Projection).

      - `NgTemplateOutlet`: Dynamically rendering templates.

 2. Directives

    - Structural Directives: `*ngIf` and `*ngFor`.

    - Attribute Directives: Custom directives using `HostBinding` and `HostListener` to manipulate host element properties and listen to events.

 3. Component Interaction & Queries

    - View Queries: Accessing child components defined in a component's own template using @ViewChild and @ViewChildren.

    - Content Queries: Accessing child components projected into a component using @ContentChild and @ContentChildren.

 4. DOM Manipulation
    - Renderer2: A safe, platform-agnostic API for manipulating DOM elements.

    - ElementRef: A wrapper around a native element to be used with Renderer2.

 5. Dynamic Component Loading

    - ViewContainerRef: A container where components can be dynamically attached.

    - Dynamically creating and rendering components at runtime without defining them in the template.

 6. Change Detection

    - ChangeDetectionStrategy.OnPush: Using the OnPush strategy for performance optimisation.

    - ChangeDetectorRef: Manually triggering change detection within OnPush components.

## 📂 Project Structure
The project is organized by feature into distinct components, allowing you to easily navigate to the concept you're interested in.

```
/src/app/
|
├── components/template-projection/    # Demos ng-content, ng-template, etc.
├── components/directives-demo/        # Demos *ngIf, *ngFor, and custom directives.
├── components/queries-demo/           # Demos @ViewChild and @ViewChildren.
├── components/dom-manipulation/       # Demos Renderer2 and ElementRef.
├── components/dynamic-loader/         # Demos dynamic component loading.
├── components/change-detection/       # Demos ChangeDetectorRef with OnPush.
└── ... and more
```

## 🛠️ Setup and Installation
Follow these steps to run the project locally on your machine.

Clone the repository:

```
git clone https://github.com/sachinksamad1/angular-concept-showcase.git
cd angular-concepts-showcase
```

Install dependencies:
```
npm install
```

Run the development server:
```
ng serve
```
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## 📖 How to Use
Once the application is running, open your browser to http://localhost:4200. Each numbered section on the page corresponds to one of the core concepts listed above.

To understand how a feature works:

Interact with the UI in the browser.

Open the corresponding component's folder in your code editor (e.g., `src/app/components/directives-demo/`).

Examine the .ts (TypeScript) and .html files to see the implementation. Browser developer tools are also useful for inspecting the console logs and DOM changes.
