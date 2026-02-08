# Assets

Assets are files that are not part of the React code, such as images, videos, and audio files.

You have to create a folder named `assets` in the `src` folder and place all the assets in it.

```jsx
function ImageComponent() {
    return (
        <img src="src/assets/image.jpg" alt="Image" />
    )
}
```

You can also use the `import` keyword to import assets.

```jsx
import image from "src/assets/image.jpg";

function ImageComponent() {
    return (
        <img src={image} alt="Image" />
    )
}
```