# InventoryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

There are three high level components
1. The Navigation Component
2. The Breadcrumbs Component: renders a hierarchical representation of where in the application the user currently is.
3. The Product List Component

### The Product List Component

It is a representation of a collection of products.
Each product row is composed of:
- the Product Image component would be responsible for rendering a product image, given its
image name
- the Product Department component would render the department tree, like Men > Shoes >
Running Shoes
- the Price Display component would render the price. Imagine that our implementation
customizes the pricing if the user is logged in to include system-wide tier discounts or include
shipping for instance. We could implement all this behavior into this component.

### Introduction to Data Architecture

- In Angular 1, the default option was two-way data binding. Two-way data binding is super easy
to get started: your controllers have data, your forms manipulate that data directly, and your views
show the data.
- The problem with two-way data binding is that it often causes cascading effects throughout your
application and makes it really difficult to trace data flow as your project grows.
Another problem with two-way data binding is that because you’re passing data down through
components it often forces your “data layout tree” to match your “dom view tree”. In practice, these
two things should really be separate.
- One way you might handle this scenario would be to create a ShoppingCartService , which would
be a singleton that would hold the list of the current items in the cart. This service could notify any
interested objects when an item in the cart changes.

- The recommended way in Angular, and in many modern web frameworks (such as React), is to adopt
a pattern of **one-way data binding**. That is, your data flows only down through components. If
you need to make changes, you emit events that cause changes to happen “at the top” which then
trickle down.
- One-way data binding can seem like it adds some overhead in the beginning but it saves a lot of
complication around change detection and it makes your systems easier to reason about.
Thankfully there are two major contenders for managing your data architecture:
1. Use an **Observables-based** architecture like **RxJS**
2. Use a **Flux-based** architecture
