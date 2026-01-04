# Open Graph Protocol

## Overview

When you share a link on social networks, a preview of the page is displayed (title, image, description). These previews don't use the classic SEO meta tags, but specific meta tags for social media, defined by the **Open Graph Protocol**, introduced by Facebook in 2010.

The Open Graph Protocol uses meta tags inserted in the `<head>` HTML, but instead of the `name` attribute it uses the `property` attribute. Each property starts with the prefix `og:` and the value is defined with `content`.

---

## Required Open Graph Meta Tags

Every page must include four fundamental properties:

- **`og:title`** → title shown in the preview
- **`og:type`** → type of content (website, article, video, etc.)
- **`og:url`** → permanent URL of the page
- **`og:image`** → image displayed in the preview

These tags allow social networks to generate a clear and consistent preview of the shared link.

---

## Optional Open Graph Meta Tags

- **`og:description`** → brief description of the page
- **`og:locale`** → language and territory (e.g., en_US)
- **`og:site_name`** → name of the main website

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="How Meta Tags Improve Social Sharing">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.example.com/blog/meta-tags-social-sharing">
    <meta property="og:image" content="https://www.example.com/images/meta-tags-preview.jpg">

    <!-- Open Graph Optional Meta Tags -->
    <meta property="og:description" content="Learn how Open Graph meta tags create rich previews on social networks and increase clicks.">
    <meta property="og:site_name" content="Web Dev Blog">
    <meta property="og:locale" content="en_US">

    <title>How Meta Tags Improve Social Sharing</title>
</head>
<body>
    <h1>How Meta Tags Improve Social Sharing</h1>
    <p>Article content...</p>
</body>
</html>
```

---

## Key Benefits

- **Enhanced Social Sharing**: Creates visually appealing previews on Facebook, Twitter, LinkedIn, and other platforms
- **Increased Click-Through Rates**: Rich previews with images and descriptions attract more clicks
- **Brand Consistency**: Control how your content appears when shared across social networks
- **SEO Complement**: Works alongside traditional SEO meta tags for comprehensive web presence
