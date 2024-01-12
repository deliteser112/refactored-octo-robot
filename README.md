# TMDB Movie Search App

This project is a single-page application (SPA) that allows users to search for movies and TV shows using the TMDB API. It features search functionality by genre and year, displays trending TV shows, and integrates user authentication with OIDC.

## Features

- Search for movies and TV shows by genre and year.
- View trending TV shows for the previous 7 days on the front page.
- Display search results in a responsive UI.
- View reviews for a particular movie or TV show.
- Submit ratings for movies and TV shows.
- User authentication using an OpenID Connect (OIDC) provider.

## Technologies Used

- React
- TypeScript
- Next.js
- Tailwind CSS
- TMDB API

## Getting Started

To get started with this project, you'll need to have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tmdb-movie-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tmdb-movie-search-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file in the root directory and add your TMDB API key:
   ```plaintext
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

### Running Tests

To run the test suite, execute:

```bash
npm run test
```

## Usage

After starting the development server, you can:

- Use the search bar to find movies and TV shows by genre and year.
- Click on a movie or TV show to view its details and read reviews.
- Authenticate using the "Login" button to submit ratings.

## Contributing

Contributions to this project are welcome. Please open an issue to discuss your ideas or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project uses the TMDB API but is not endorsed or certified by TMDB.
- Thanks to all the contributors who have helped with this project.
```