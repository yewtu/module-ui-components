# module-ui-components

UI components and shared styles for Yewtu apps, both web and native

## Web

/components - UI components
/utilities - base CSS classes for grid, typography, spacing
/variables - for colours, breakpoints, spacing, font sizes
/mixins 

### View web component library

We use [Storybook](https://storybook.js.org).

One off task to install CLI:
```
yarn global add @storybook/cli
```

#### Local
To view all components locally:
```
yarn storybook
```

Then go to http://localhost:9001

#### Github pages
On [Github pages](https://yewtu.github.io/module-ui-components):.

To publish to Github pages:
```
yarn build-storybook
```

## Adding new icons

1. Download icon from [Material Icons](https://material.io/icons)
2. Save to /public/icons with a simple .svg filename eg. 'settings.svg'
3. Add the name without file extension eg. 'settings' to the [_icons.scss](https://github.com/yewtu/module-ui-components/blob/master/utilities/_icons.scss#L12-L24) file, for the colour(s) you would like. For each colour, you need to save a copy of the .svg file eg. 'settings-white.svg' and change the fill property
4. Build your app's stylesheet and you can use the icon (add a colour modifier if required):
```
<i className="icon icon--settings icon--white" />
```

## React Native

In the /react-native folder