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

## React Native

In the /react-native folder