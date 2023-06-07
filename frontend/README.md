# Frontend for the favor-exchanging app

Using React Native with Expo. Using Prettier for code formatting.

## Setup

Replicate the development environment using `npm install` on a cli.

-   Make sure to install/update nodejs and npm globally first, or the command line will probably give you errors
-   You can verify if you have these installed globally with `nodejs --version` and `npm --version`
-   Using nodejs 12.22.9 and npm 9.6.7

`npm install` should locate the package.json file and install all necessary dependencies automatically.

-   See more here: https://stackoverflow.com/questions/8367031/how-do-i-install-package-json-dependencies-in-the-current-directory-using-npm

We're using Expo to handle distribution, you can develop with Expo by using `npx expo start --tunnel` and use the Expo Go app on your phone to scan the QR code that opens

-   Your phone must be on the same network that your computer is on
-   I specified the `--tunnel` option when starting the local dev server because the default didn't work for me, but it might for you

This should render the app on your phone, as if you downloaded the app itself. You can also use any mobile emulators to develop directly on your computer.

-   iOS: https://docs.expo.dev/workflow/ios-simulator/
-   Android: https://docs.expo.dev/workflow/android-studio-emulator/

Please verify that you can see the initial app rendered on your phone (this is defined in App.tsx) to make sure that your local environment is set up correctly.

Finally, make sure you use VS Code and download the Prettier extension to get the automatic code formatting on saves and pastes.

## File Overview

The main files we will be working with is anything inside of src.

### Don't change the following (for now):

#### assets/ and app.json

This is used to tell expo which static assets (defined in assets/) it should bundle with your app. This should be where images go if they need to be bundled with your app (e.g. logos, thumbnails). I
believe this will be bundled with your app when it is distributed on the App Store or Google Play.

#### .prettierrc

This contains the settings currently used for code formatting. It's currently a default template I found online. You can hover over the keys in the file to see what settings they represent.

#### App.tsx

This is the entry point defined in node_modules/expo/AppEntry.js, so don't change the name. This file will probably contain all the major screen components that we define, as well as any navigation
semantics.

#### babel.config.js, package-lock.json, package.json, tsconfig.json

A bunch of config files, we probably don't have to touch them at all.

## Coding and Style Recommendations

These are based on my own thoughts and some stuff I've seen online, doesn't mean it's necessarily the right/best way to do things though. Feel free to weigh in with opinions.

### Component Styling

-   Create a separate file for styles and import the StyleSheet object into a component file
-   Pass globalStyles from globalStyles.ts in as props to components and also maintain local style .ts files
    -   Could also just import directly from globalStyles.ts, but refactoring the codebase may break things as a result
-   Local styles should try to extend on global styles where appropriate, can do this by concatenating style objects and I believe the styles should be applied sequentially

### File and Directory

-   Should defined only one component per .tsx file
-   Create separate directories for each main screen component and maintain related child screens within a single director
    -   Not sure about how well this will work for navigation, as child screens make the navigation history a little messier
    -   React Navigation docs: https://reactnavigation.org/docs/getting-started

### Dummy Data

-   Declare Dummy Data in a .json file or store it in a global variable in your component to see how data renders on the app for now, since we don't have a backend yet

### Documentation

-   Create a README.md or equivalent to store any necessary documentation for each main screen
-   It will probably makes things easier when building the API if we write down what information a screen needs so we can decide how to define API routes

### React and TypeScript

-   TypeScript is recommended, but vanilla JavaScript will work in TypeScript files as well
-   Mainly use React Hooks
-   Use fetch().then().then().catch() for requests
