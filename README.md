## Has my password been leaked?

### About:
This is honestly one of my coolest projects. I was tasked with finding and communicating with any free (open) API, and I found one for checking passwords.
How it, and my application works is by hashing the password into an unrecognizable string of characters 512 bytes long! Then out of all of that mess, we only send the first 10 characters to the API!!! With the data they send a reply whether or not the password has been leaked online.

### Tech Stack:
- React for components
- Redux for state
- Keccak Hashing Algorithm
- Axios for calls
- Bootstrap through Reactstrap with Bootswatch theming for style

### Caveat:
I need to finish ONE feature. If your password is safe and has never been leaked, it just spins forever. I need to make it display to the user that they are safe.