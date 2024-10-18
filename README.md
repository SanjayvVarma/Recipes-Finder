
# Recipe Finder Application

## Overview
The **Recipe Finder Application** is a web application that allows users to search for recipes using the Spoonacular API, view detailed information about each recipe, and save their favorite recipes locally in their browser. This project is built using **React JS** with **Vite**, utilizing React Router for navigation, and local storage for saving favorite recipes.

## Live Demo

You can access the live demo of the project here: [Recipes Finder App](https://recipes-finder-sandy.vercel.app/)

## Key Features
1. **Recipe Search**: Users can search for recipes by entering keywords. The search functionality is powered by the Spoonacular API, which returns recipe results based on the user query.
   
2. **Recipe Details**: Users can click on a recipe to view detailed information including the ingredients, instructions, and an image of the dish.
   
3. **Favorites**: Users can save recipes to their "Favorites" list. The list is stored in the browser’s local storage, allowing users to access their saved recipes anytime.

4. **Error Handling**: The app includes error handling for failed API requests and displays appropriate error messages when no recipes are found or there are connection issues.

5. **Responsive Design**: The layout is styled to be responsive, ensuring that the app functions and looks good across devices of various screen sizes.

## Functionalities

### Recipe Search
- Users can search for recipes by typing a query in the search bar. 
- If the user enters more than two characters, recipes related to the query are fetched and displayed in a list.
  
### Recipe Details
- Upon clicking a recipe, users are taken to a detailed page where they can see:
  - An image of the recipe
  - A list of ingredients
  - Cooking instructions
  - A button to save the recipe to favorites

### Favorites
- Users can save any recipe to their favorites by clicking the heart icon. The list of favorite recipes is stored locally in the browser using **localStorage**.
- The favorites list can be accessed by clicking the heart icon in the navigation bar.
- Users can remove a recipe from favorites by clicking the "Remove" button.

## Local Installation

To run the project locally, follow these steps:

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SanjayvVarma/Recipes-Finder.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Recipe-Finder
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up the Spoonacular API key**:
   
   - Create a `.env` file in the root directory of the project.
   - Add the following line to the `.env` file:

     ```bash
     VITE_SPOONACULAR_API_KEY=your_api_key_here
     ```

   Replace `your_api_key_here` with your actual API key from the Spoonacular API.

5. **Run the application**:

   ```bash
   npm run dev
   ```

   This will start the development server. Open your browser and navigate to `http://localhost:5173` to view the application.

## Images

### Main Search Page
![Main Search Page](./screenshots/search-page.png)

### Recipe Details Page
![Recipe Details Page](./screenshots/details-page.png)

### Favorites Page
![Favorites Page](./screenshots/favorites-page.png)

## Packages Used
- **React Router**: For client-side routing to navigate between the search page, recipe details, and favorites page.
- **Spoonacular API**: For retrieving recipe data (both search results and individual recipe details).
- **LocalStorage**: To store the user's favorite recipes locally on their device.
- **Vite**: As the build tool for this React project.

## Learning Experience
During the development of this project, I gained experience with:
- Fetching data from an API and handling responses asynchronously.
- Working with local storage in the browser to persist data between sessions.
- Creating a responsive user interface using basic CSS.
- Managing React state effectively to handle user input, search results, and favoriting functionality.
- Implementing client-side routing with React Router for seamless navigation between pages.

## Future Improvements
1. **Advanced Filtering**: Add filters such as cuisine type, dietary preferences, and more to refine search results.
2. **Pagination**: Implement pagination for better performance when displaying many search results.
3. **Authentication**: Enable user authentication, allowing users to save their favorite recipes across devices.
4. **Recipe Reviews**: Allow users to add reviews or comments on the recipes.
5. **Offline Functionality**: Enable the application to work offline by caching data using Service Workers.

