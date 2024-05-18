## Interface

An interface in TypeScript is a way to define a contract or blueprint for the shape and structure of an object. It specifies the properties, methods, and their types that objects implementing the interface should have. In essence, an interface defines a set of rules that an object must follow to be considered valid according to that interface.

### Shape Definition:

Interfaces specify object structure, including property names, types, and optional/required status.

### Contract:

Objects or classes adhering to an interface must implement its defined structure and methods.

### Type Checking:

TypeScript checks if objects meet the interface's requirements, catching type errors early.

### Code Clarity:

Interfaces document expected object properties and enhance code readability, aiding object usage understanding.

Here's a basic example of an interface definition:

```typescript
interface PersonEx1 {
  name: string;
  age: number;
}

const John: PersonEx1 = {
  name: "John",
  age: 30,
};
```
## Interface Usage in TypeScript:

1. **Defining Data Structure:**
   - Interfaces like `PersonEx1` define the structure of data objects by specifying properties and their types, such as `name` (string) and `age` (number).

2. **Specifying Function Signatures:**
   - Interfaces can also specify the shape of function parameters and return values. This helps ensure that functions adhere to a specific format.

3. **Enforcing Consistency:**
   - By implementing interfaces, TypeScript enforces consistency in class definitions and object structures throughout the codebase.

4. **Code Maintainability and Collaboration:**
   - Interfaces enhance code maintainability by documenting expected object properties and function signatures. This aids in understanding and collaborating on code, especially in larger projects.


`---------------------------------------------------------------------`
# Interface Method And Parameters
In TypeScript, an interface can define not only the structure of an object but also the signature of functions or methods that objects adhering to the interface should have. This allows you to specify not just the properties but also the methods and their parameters and return types that should be present in objects implementing the interface.

```typescript
// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Sarah.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!
```
## Interface Declaration: 

We define an interface named `PersonEx2` with three members:
- `name`: A property of type string.
- `age`: A property of type number.
- `greet`: A method that takes a parameter of type string and returns void (indicating that it doesn't return any value).

## Object Creation: 

We create an object `alice` that adheres to the `PersonEx2` interface. It has properties `name` and `age`, as well as a `greet` method that takes a message and logs it to the console.

## Method Invocation: 

We call the `greet` method on the `alice` object, passing in a message. The method uses the object's properties to construct a greeting message and logs it to the console.

`---------------------------------------------------------------------`
# ReOpen The Interface And Use Cases
interface reopening in TypeScript is a valuable technique for gradually building and extending interfaces as your project grows, promoting modularity and code organization. It enables you to create versatile, flexible, and consistent object structures.

```typescript
// Homepage Interface Declaration
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page Interface Reopening
interface Settings {
  sidebar: boolean;
}

// Contact Page Interface Reopening
interface Settings {
  external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
};
```
## Interface Declaration: 

We start by defining an initial interface called `Settings` for the Homepage, which includes properties like `theme` and `font`. The `theme` property is read-only.

## Interface Reopening - Articles Page: 

We reopen the `Settings` interface to add a `sidebar` property specific to the Articles Page. This demonstrates how interfaces can be extended as different parts of the application require additional properties.

## Interface Reopening - Contact Page: 

The `Settings` interface is reopened again, this time for the Contact Page, where an `external` property is introduced, tailored to that section.

## Object Creation: 

We create an object named `userSettings` that complies with the merged `Settings` interface, including properties from all the interface declarations: `theme`, `font`, `sidebar`, and `external`. This object represents user settings, incorporating attributes from different parts of a website.

## Use Cases:

### Modular Development: 

Interface reopening enables modular development, allowing different parts of a project to contribute to interface definitions. Each section focuses on its specific properties, promoting code organization.

### Progressive Enhancement: 

As your application evolves, you can extend interfaces to accommodate new features or settings. This incremental approach ensures backward compatibility and code flexibility.

### Clear Separation of Concerns: 

Interface reopening maintains a clear separation of concerns between different sections or modules of your application while ensuring consistent data structures.


`---------------------------------------------------------------------`
# built-in interface
In TypeScript, a built-in interface refers to an interface that is predefined and provided by the TypeScript language or the underlying JavaScript runtime environment. These interfaces define the shape and behavior of objects or values for specific use cases and are used to ensure type safety and compatibility in TypeScript code.

Examples of built-in interfaces in TypeScript include:

**HTMLElement Interfaces**: TypeScript provides built-in interfaces for HTML elements, such as HTMLElement, HTMLDivElement, HTMLAnchorElement, etc. These interfaces define the properties and methods available for working with elements in the Document Object Model (DOM).

`---------------------------------------------------------------------`
## HTMLImageElement

In TypeScript, `HTMLImageElement` is a built-in interface that represents an HTML `<img>` element. This interface extends the `HTMLElement` interface and provides additional properties and methods specifically related to images.

### Properties:
- `alt`: A string representing the alternate text for the image.
- `height`: The height of the image in pixels.
- `src`: The source URL of the image.
- `width`: The width of the image in pixels.

### Methods:
- `complete`: A boolean value indicating whether the image has finished loading.
- `decode(): Promise<void>`: A method that returns a promise and resolves once the image is decoded.
- `naturalHeight`: The intrinsic height of the image in pixels.
- `naturalWidth`: The intrinsic width of the image in pixels.

By using the `HTMLImageElement` interface in TypeScript, you can access and manipulate properties and methods related to `<img>` elements in a type-safe manner when working with the Document Object Model (DOM) in web applications. This helps catch potential errors and provides better code assistance in modern code editors.

**Example of using HTMLImageElement in TypeScript:**
```typescript
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
```
In this example, we create an HTMLImageElement, set its properties, and work with some of its methods in a TypeScript context.
`---------------------------------------------------------------------`