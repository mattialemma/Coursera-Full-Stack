# Video and Audio

## Standard import
```jsx
import video from "src/assets/video.mp4";

function VideoComponent() {
    return (
        <video src={video} height="200" width="200" controls />
    )
}
```

Thi approch can't work easy with external providers like youtube, vimeo, etc.

## External providers
```jsx
function VideoComponent() {
    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
}
```

- For more libraries, you can visit NPM. 

**React Player:**
https://www.npmjs.com/package/react-player
