# iFrame Sandbox Cheat Sheet

The `<iframe>` is the inline frame element that embeds an HTML page into another page.

Apart from the global attributes, which can be a part of the `<iframe>`, major element-specific attributes are listed below.

---

## `allow`

Specifies what features or permissions are available to the frame, for example access to the microphone, camera, and other APIs.

**Examples:**

*   `allow="fullscreen"` → the fullscreen mode can be activated
*   `allow="geolocation"` → lets you access the user's location

To specify more than one feature, separate them with a semicolon.

```html
<iframe src="https://example.com/" allow="camera; microphone"></iframe>
```

## `name`

Specifies the name of the `<iframe>`.

```html
<iframe name="My Frame" width="400" height="300"></iframe>
```

## `height`

Specifies the height of the frame in CSS pixels.

*   **Default value:** 150 pixels

## `width`

Specifies the width of the frame in CSS pixels.

*   **Default value:** 300 pixels

## `referrerpolicy`

A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource.

**Common values:**

*   `no-referrer` → The referrer header will not be sent
*   `origin` → The referrer is limited to the origin of the referring page
*   `strict-origin` → The origin is sent only when using the same protocol security level (HTTPS to HTTPS)

## `sandbox`

Applies extra restrictions to the content in the `<iframe>`. To lift particular restrictions, permission tokens are used.

**Common permission tokens:**

*   `allow-downloads` → Allows the user to download an item
*   `allow-forms` → Allows form submission
*   `allow-modals` → Allows modal windows
*   `allow-orientation-lock` → Allows screen orientation lock
*   `allow-popups` → Allows popups
*   `allow-presentation` → Allows a presentation session
*   `allow-scripts` → Allows scripts to run (without creating popups)

If the value is empty, all restrictions are applied. To apply multiple permissions, use a space-separated list.

**Example:**

```html
<iframe src="page.html" sandbox="allow-forms allow-scripts"></iframe>
```

## `src`

The URL of the page to embed in the `<iframe>`.

*   Using `about:blank` embeds an empty page.

## `srcdoc`

Lets you specify inline HTML to embed in the `<iframe>`. When defined, this attribute overrides the `src` attribute.

**Example:**

```html
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>"></iframe>
```

## `loading`

Specifies when the iframe should load:

*   `eager` → loads immediately
*   `lazy` → loads only when near the visible area of the page

**Example:**

```html
<iframe src="my_iframe_src.html" loading="lazy"></iframe>
```

## `title`

Adds a description to the iframe for accessibility. The value should accurately describe the iframe’s content.

**Example:**

```html
<iframe src="history.html" title="An embedded document about the history of my family"></iframe>
```

> **✅ Tip:** Always use `title`, `sandbox`, and `loading` when possible for better accessibility, performance, and security.