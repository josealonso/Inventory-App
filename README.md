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
