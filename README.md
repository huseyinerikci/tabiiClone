# Tabii Clone Project
This project is a movie watching application developed using React.js, Redux, Redux-Thunk, Tailwind CSS, React Router DOM and other modern tools. The project lists movies using TMDB (The Movie Database) API, displays movie details and allows users to manage their movie watch lists.

## Preview

A preview of my tabii clone project is in the gif below.

![tabiiClone](https://github.com/user-attachments/assets/2703ce9a-daba-4f9d-aecd-5364baef6527)


## Features
* Movie Listing: Retrieve movie data using Axios with TMDB API and render on the screen according to categories.
* Movie Detail Page: When the movie image that appears on the screen is clicked, it is directed to the detail page with React Router DOM. More information about the movie, actors, content descriptions, revenue, trailers and user comments are shown on the detail page.
* Trailer Display: To watch the trailer of the movie, a video player is placed on the movie details page using the React Player library.
* Watch List: Users can add the movies they want to watch to the watch list and then view this list. They can also remove movies from the watch list.
* Search: With the search bar in the header, the desired movie can be searched and the search results are listed on the screen. You can access the movie details by clicking on the search results.
* Movie Slider: On the homepage, you can display movies by category as a scrollable slider using Splide.js.
* Responsive Design: The application is designed to be mobile-friendly and responsive with Tailwind CSS.
* Number Formatting: The numbers in the movie data are arranged in a readable format using the Millify library.
* Icons: Interactive icons have been added using the React Icons library.

## Technologies Used
* React.js: To create the user interface.
* Redux: To manage the application state.
* Redux-Thunk: For asynchronous API calls.
* Tailwind CSS: To create a fast and customizable style template.
* React Router DOM: To provide transition between pages.
* Axios: To exchange data with the API.
* Splide.js: To display movie categories as scrollable sliders.
* React Player: To display movie trailers.
* Millify: To display numbers in a readable format.
* React Icons: For using icons in UI components.
