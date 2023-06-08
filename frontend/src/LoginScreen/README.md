# loginScreen

Random Thoughts:

-   Create a component that renders differently based on new/existing user? Or just two separate components
-   Don't worry about user authentication right now, but we should salt and hash the password before sending it to the backend as well

Screens:

-   Welcome
    -   Logo
    -   Blurb
    -   Get Started button
-   SignUp
    -   React-Native form
    -   all the options on the design
    -   Checkbox for terms and conditions
    -   link to the terms and conditons (TBD)
    -   submit button
    -   sign in link
-   SignIn
    -   React-Native form
    -   "Forgot password" link
    -   Submit button
    -   Link to sign up

Maybe merge Recovery and confirmation into a single component since they're not that complex, just render differently

-   Recovery
    -   React-Native form
    -   Submit button
-   Confirmation
    -   React-Native form
    -   Submit button... links back to sign in?
