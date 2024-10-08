
# URL Shortener

This is a simple URL shortener application built with Node.js, Express, and MongoDB. It allows users to shorten URLs and provides the ability to redirect using the shortened URLs.

## Features

- Shorten any URL
- Track how many times a shortened URL is clicked
- Simple front-end interface to input URLs and receive shortened links
- Uses MongoDB for storing original and shortened URLs
- Deployed on Vercel for easy access

## Project Structure

```bash
/link-shortener
├── /models
│   └── urlModel.js           # MongoDB schema for storing URLs
├── /routes
│   └── urlRoutes.js          # API routes for shortening and redirecting URLs
├── /public
│   └── index.html            # Front-end for the URL shortener
├── .env                      # Environment variables (MongoDB connection string)
├── app.js                    # Main application file (sets up server and routes)
└── package.json              # Project dependencies
```

## How It Works

1. Users enter a URL they want to shorten in the input box on the front-end.
2. When the "Shorten URL" button is clicked, a request is made to the back-end to shorten the URL.
3. The back-end generates a unique shortened URL and stores it in MongoDB, along with the original URL.
4. The user receives a shortened URL that can be used for redirection.
5. Visiting the shortened URL redirects to the original URL.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ricardoguimaraes2021/link-shortener.git
   ```

2. Navigate to the project folder:

   ```bash
   cd link-shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your MongoDB connection string:

   ```
   MONGO_URI=mongodb://localhost:27017/shortener
   ```

5. Start the server:

   ```bash
   npx nodemon app.js
   ```

6. Visit `http://localhost:5001` in your browser to access the URL shortener.

## Deployment on Vercel

The application is deployed on Vercel. You can access it live at the following URL:

**[URL Shortener on Vercel](https://link-shortener-nine-flax.vercel.app/)**


## Future Task

- Further improvements could include adding analytics on how many times each shortened URL is clicked or adding user authentication.

## Contributing

Feel free to submit issues or pull requests. Any feedback or contributions to improve the project are welcome!

---

## License

This project is open-source and available under the [MIT License](LICENSE).
