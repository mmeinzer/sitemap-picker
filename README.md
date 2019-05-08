The front end for Anchor Float - an Amazon link checker for affiliate websites.

This project is built with React using ES6 syntax and React Hooks for state managment.

## How it works

The sign-up/purchase flow involves a user entering their email along with a url to one of their site pages. This fires of a POST request to the backend which stores the email and searches for the sitemap.

The backend returns a JSON response with the full sitemap tree, allowing the user to select which pages they want to tool to parse.

## Next steps

Since pricing is dynamic based on the selected pages, a frontend and backend Stripe integration is required. After a customer completes their purchase, a confirmation email should be sent along with a link back to the frontend to generate a password for their account.
