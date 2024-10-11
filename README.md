# Shop-Mandu

Shop-Mandu is a simple React application that allows users to search for products using the [Fake Store API](https://fakestoreapi.com/). It dynamically fetches and displays products based on the search query provided by the user.

## Features
- **Product Search:** Users can search for products by entering keywords.
- **API Integration:** The app fetches data from the Fake Store API and displays it in a styled grid.
- **Responsive Design:** The UI is styled to be responsive and visually appealing, with hover effects on product items.
- **Error Handling:** If an error occurs during the fetch process, it is handled gracefully, and a message is displayed.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Custom styles to create a dark-themed UI.
- **Fetch API**: To retrieve data from the Fake Store API.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/samyam81/React-sixth-ecommerce.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-sixth-ecommerce
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Usage
1. Type a product name in the search input field.
2. Click the **Search** button to fetch and display items from the Fake Store API that match your search term.
3. If no items match, a "No items found" message will be displayed.

## Project Structure
```
/src
  ├── App.js           # Main component of the app
  ├── index.js         # Entry point of the React app
  ├── Styles.css       # Custom styles for the app
  └── ...
```

## Styling
The app follows a dark-themed design, with:
- **Background**: Dark tones (#1e1e1e and #2c2c2c).
- **Text**: Light gold (#f0e68c) for visibility against the dark background.
- **Buttons and Borders**: Red wine (#c2185b) for a bold contrast, with hover effects.

## API
The app uses the following endpoint from the Fake Store API to fetch products based on a search term:
```
https://fakestoreapi.com/products?title_like={searchTerm}
```

## Future Improvements
- Add pagination for large result sets.
- Implement loading states to improve user experience during data fetching.
- Add categories or filters for more refined searches.

---

Enjoy exploring products on **Shop-Mandu**!
