# Travelpayouts Widget

## Get started

Clone repository

```
git clone git@github.com:zhenkaGo/travelpayouts-widget.git
```

Install dependencies
```
yarn install
```

Runs the app in the development mode:
```
yarn start
```
Open http://localhost:3000 to view it in the browser.
You will also see any lint errors in the console.

Builds the app for production:
```
yarn build
```

## Usage

You can see few examples how to embed widget in `index.html`. The widget is rendered in current node where you have embeded it.

```
<script src="widget.js" data-text-color="#000" async></script>
or
<script src="http://localhost:3000/widget.js" data-text-color="#000" async></script>
``` 

The widget has params to customize it.

- **data-text-color** - color of all text.
- **data-bg-color** - background color of main block.
- **data-btn-bg-color** - background color of submit button.

```
<script src="widget.js" data-btn-bg-color="red" data-bg-color="green" data-text-color="#000" async></script>
```
