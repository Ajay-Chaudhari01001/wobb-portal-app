# Wobb Portal App

# A React-based web app built with Vite for managing campaigns with dynamic filtering, responsive design, and modular components.

# Getting Started

# 1. Clone the repository
git clone https://github.com/yourusername/ajay-chaudhari01001-wobb-portal-app.git

# 2. Navigate to the project directory
cd ajay-chaudhari01001-wobb-portal-app

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start the development server
npm run dev
# or
yarn dev

# 5. Production build (optional)
npm run build
# or
yarn build

# The app runs at http://localhost:3000

# Folder Structure

ajay-chaudhari01001-wobb-portal-app/
├── README.md              # Documentation
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata
├── vite.config.js         # Vite configuration
├── public/                # Public assets
└── src/                   # Source files
    ├── App.css            # Global styles
    ├── App.jsx            # Root component
    ├── main.jsx           # Entry point
    ├── assets/            # Images & static assets
    ├── components/        # Reusable components
    │   ├── campaignCard/  # CampaignCard (brand, description, progress)
    │   ├── filterSection/ # Filters campaigns by categories
    │   ├── footer/        # Footer component
    │   └── header/        # Header with nav links
    ├── data/              # JSON data files (e.g., campaigns)
    └── pages/             # App pages (Home, Message)

# Key Features
- Dynamic campaign filtering & management.
- Responsive design with reusable components.
- Fast builds with Vite (HMR supported).
- Routing handled by React Router.
- Linting with ESLint for consistent code.

# End of README
