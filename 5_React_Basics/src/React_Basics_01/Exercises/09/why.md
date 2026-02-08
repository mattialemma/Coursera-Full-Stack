# Why do we use Context?

The difference becomes crucial as the application grows. Imagine if `MealsList` were inside a `Sidebar` component, which is inside a `MainLayout` component, which is inside `App`.

### With Props (Prop Drilling)
`App` -> `MainLayout` -> `Sidebar` -> `MealsList`

In this scenario, all the intermediate components (`MainLayout`, `Sidebar`) must receive and pass down the `meals` prop, even if they don't need or use the data themselves. This clutters the code and makes maintenance difficult.

### With Context
`App` (Provider) ... ... ... -> `MealsList` (Consumer)

With Context, the data "teleports" directly to the destination component, bypassing all the intermediate components.

**Summary:**
For small exercises like this one, Context might seem overkill. However, it is essential for learning the mechanism to handle state management in complex, deeply nested component structures.