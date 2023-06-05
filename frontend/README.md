TODO
add prettier and linters


NOTES
We're using expo to handle distribution, you can develop with expo by using ```npm expo start --tunnel``` and use the expo go app to scan the QR code that opens (your phone must be on the same network that you're hosting this server on)
- use --tunnel option when starting local dev server, default didn't work for me but might for you


pass global style in as props to components and also maintain local style .ts files


local styles should try to extend on global styles as well, can do this by concatenating style objects


create separate directories for each main screen?


check out react navigation 


replicate local environment using npm install
- https://stackoverflow.com/questions/8367031/how-do-i-install-package-json-dependencies-in-the-current-directory-using-npm