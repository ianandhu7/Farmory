# RAECH HEL - Organic Farm Marketplace 🌿

Welcome to the **RAECH HEL** professional e-commerce platform. This project is a high-performance, mobile-responsive full-stack application designed specifically for organic farm products.

## 🚀 Key Features for Clients
- **Premium Branding**: Custom "RAECH HEL" identity with a farm-fresh aesthetic.
- **Mobile First**: Fully responsive design for seamless shopping on phones, tablets, and desktops.
- **WhatsApp Integration**: Modern one-click ordering system to boost direct sales.
- **Microgreens Spotlight**: Dedicated premium section for high-margin healthy products.
- **Full E-commerce Flow**: Cart management, dynamic categories, and a multi-step checkout with Cash on Delivery (COD) options.

## 🛠 Project Structure
- **/client**: Modern React (Vite) frontend with Framer Motion animations.
- **/server**: Node.js & Express backend with MongoDB integration.
- **/admin**: Clean management dashboard for products and orders.

## ☁️ Vercel Deployment Guide
The project is pre-configured for Vercel hosting:

### 1. Frontend (Client)
- Set "Root Directory" to `client`.
- Vercel will auto-detect Vite.
- Environment variables needed: `VITE_API_URL` (pointing to your server).

### 2. Backend (Server)
- Set "Root Directory" to `server`.
- Environment variables needed:
  - `MONGO_URI`: Your MongoDB database connection string.
  - `JWT_SECRET`: A secret key for authentication.
  - `NODE_ENV`: Set to `production`.

## 📦 Local Setup for Development
1. From the root folder, run:
   ```bash
   npm run dev
   ```
   *This will start the client, server, and admin panel simultaneously.*

---
**Prepared by Antigravity AI for Future Growth.**
