# Using the `<img>` Tag in HTML

The `<img>` tag is used to embed images into a web page. The image file is specified using the `src` attribute.

### Basic example

```html
<img src="photo.png">
```

## Setting width and height

You can control the size of an image using the `width` and `height` attributes (measured in pixels).

```html
<img src="photo.png" width="640" height="480">
```

The browser will automatically scale the image if the values are larger or smaller than the original.

### Example (50% smaller)

```html
<img src="photo.png" width="320" height="240">
```

## Keeping the correct aspect ratio

If you specify only the width (or only the height), the browser will automatically calculate the other value to preserve the image’s proportions.

```html
<img src="photo.png" width="320">
```

## Alternative text (`alt` attribute)

If the image fails to load, the browser will display the text provided in the `alt` attribute. The `alt` attribute is also essential for screen readers and accessibility.

```html
<img src="photo.png" width="320" alt="My profile photo">
```

## Using `<figure>` and `<figcaption>`

To improve accessibility and provide a visible description, images are often wrapped in a `<figure>` element with a `<figcaption>`.

```html
<figure>
  <img src="photo.png" width="320" alt="My profile photo">
  <figcaption>A photo of myself on a beach in 2015</figcaption>
</figure>
```

*   `<figure>` groups the image and its caption
*   `<figcaption>` describes the image content

## Supported image formats in web browsers

Modern browsers support several image file types, including:

*   **APNG** – Animated Portable Network Graphics
*   **AVIF** – AV1 Image Format
*   **GIF** – Graphics Interchange Format
*   **JPEG / JPG** – Joint Photographic Experts Group
*   **PNG** – Portable Network Graphics
*   **SVG** – Scalable Vector Graphics
*   **WEBP** – Web Picture Format

Images play a major role in web design. Using correct sizing and accessible descriptions ensures a better user experience for everyone.