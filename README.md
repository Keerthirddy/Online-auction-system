
# BidNow – Online Auction System

BidNow is a real-time auction platform where users can register, bid on listed items, and manage their own listings. Administrators can manage users, auction listings, and monitor platform metrics. This project was developed using Angular and follows an Agile-based sprint methodology.

## Project Stack

- **Framework:** Angular 16  
- **Styling:** HTML5, CSS3, Bootstrap 5  
- **Scripting:** JavaScript, TypeScript  
- **Architecture:** SPA (Single Page Application), PWA (Progressive Web App)  
- **Tools:** Git, Yarn, Webpack, ESLint, Karma  

## Sprint-wise Progress

### Sprint 1: UI Foundation and Version Control

**Objective:** Build the basic UI structure, responsive layout, and configure version control and team collaboration.

**Tasks Completed:**
- GitHub repository setup and Agile board initialization
- Designed homepage layout with featured auctions and categories
- Developed user registration and login forms with validations
- Built static "Live Auctions" page using HTML and Bootstrap
- Created navigation bar and footer with login/register links
- Added a countdown timer for live auctions using JavaScript

**Deliverables:**
- Static, responsive homepage and auctions page
- Working countdown timer
- GitHub project with organized team commits and Agile tracking

### Sprint 2: Interactivity, SPA Architecture, API Integration

**Objective:** Transition from static UI to a fully functional SPA and fetch dynamic data from a mock API.

**Tasks Completed:**
- Converted UI logic to TypeScript with interfaces (Auction, User, Bid)
- Fetched mock data from JSON and rendered auctions dynamically
- Implemented search functionality and category filters
- Configured Angular routing for pages like Auctions, My Bids, Dashboard, Contact
- Enabled lazy loading for auction details
- Converted the project into a PWA with offline support

**Deliverables:**
- Functional SPA with routing and lazy loading
- Dynamic data rendering
- Offline-capable PWA

### Sprint 3: Componentization, Testing, and Code Quality

**Objective:** Refactor code into reusable components, set up testing, linting, and optimize build configuration.

**Tasks Completed:**
- Developed reusable Auction Card component with bid button
- Created bidding form using Angular reactive forms
- Configured ESLint and enforced consistent code style across the project
- Added unit tests for components using Karma
- Configured Webpack for optimized builds
- Managed packages with Yarn and updated project documentation (README)

**Deliverables:**
- Modular component-based UI
- Linting and test coverage
- Optimized production build
- Yarn-managed dependencies

## Project Setup

### Prerequisites
- Node.js (v16 or above)
- Angular CLI (`npm install -g @angular/cli`)
- Yarn (`npm install -g yarn`)

### Installation

Clone the repository and install dependencies:

`git clone https://github.com/Keerthirddy/Online-auction-system.git`

`cd Online-auction-portal`

`yarn install`

### Development Server 

To start the development server, run: 

`ng serve`

Then visit: http://localhost:4200

To build the project for production:

`ng build --configuration production`

### Progressive Web App (PWA) 

BidNow is a PWA-enabled application. After building for production, you can serve it offline using a static server like http-server.

Install it globally (if not already):

`npm install -g http-server`

Then serve your build:

`http-server dist/online-auction-system`

Visit: http://localhost:8080 in your browser.
