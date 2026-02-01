# Farmory

Farmory is an online marketplace for fresh farm products, connecting farmers directly with consumers.

## Project Structure

- **client/**: React frontend application
- **server/**: Node.js/Express backend API
- **admin/**: React-based admin dashboard
- **docs/**: Project documentation and wireframes

## Getting Started

1. **Install Dependencies**
   ```bash
   cd client && npm install
   cd ../server && npm install
   cd ../admin && npm install
   ```

2. **Environment Setup**
   - Copy `.env.example` to `.env` (if provided) or check `docs/architecture.md` for required variables.

3. **Run Application**
   - Client: `cd client && npm run dev`
   - Server: `cd server && npm run dev`
   - Admin: `cd admin && npm run dev`

## Features
- Browse and search fresh products
- Secure user authentication
- Cart and checkout process
- Admin management for products and orders
