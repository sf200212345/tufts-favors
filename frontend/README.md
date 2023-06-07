TODO add prettier and linters

NOTES We're using expo to handle distribution, you can develop with expo by using `npx expo start --tunnel` and use the expo go app to scan the QR code that opens (your phone must be on the same
network that you're hosting this server on)

-   use --tunnel option when starting local dev server, default didn't work for me but might for you

App.tsx is the entry point defined in node_modules/expo/AppEntry.js, so don't change the name of this. app.json is used to tell expo which static assets it should bundle with your app

pass global style in as props to components and also maintain local style .ts files

local styles should try to extend on global styles as well, can do this by concatenating style objects

create separate directories for each main screen?

check out react navigation for how to navigate through the app

replicate local environment using npm install

-   https://stackoverflow.com/questions/8367031/how-do-i-install-package-json-dependencies-in-the-current-directory-using-npm

Initial Steps

-   group program the loginScreen
-   Tufts ID, normal login information like username id and stuff
-   need to render differently based on new/existing user
