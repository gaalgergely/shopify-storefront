# Shopify Storefront (React + Shopify Buy SDK)

This project is a single-page storefront built with React, Chakra UI, and the Shopify Storefront API. It lets shoppers browse products, view product details, add items to a cart, and complete checkout through Shopify's hosted web checkout.

## Features
- **Product discovery:** Home page lists products from Shopify with images, titles, and pricing.
- **Product detail:** Dedicated product pages show imagery, pricing, and descriptions loaded by handle.
- **Cart experience:** Slide-out cart drawer displays line items, quantities, and subtotals with removal controls.
- **Checkout:** Persists a Shopify checkout session and opens the Shopify-hosted checkout URL to complete payment.
- **Responsive UI:** Chakra UI components provide consistent styling, navigation, and marketing blocks.

## Architecture Overview
- **App shell:** `src/App.js` wires global navigation, cart/menu drawers, footer, and routes for home (`/`) and product detail (`/products/:handle`).
- **State management:** `src/context/shopContext.js` exposes a context that fetches products, loads single products, manages a persistent checkout (via `localStorage`), and toggles cart/menu UI state.
- **UI components:** Reusable Chakra-based components live in `src/components/` for hero, marketing sections, navigation, and cart interactions.
- **Entry point:** `src/index.js` applies Chakra theming and registers the `ShopProvider` before rendering the app.

## Prerequisites
- Node.js and npm (or Yarn)
- Shopify Storefront API credentials
  - `REACT_APP_SHOPIFY_DOMAIN`
  - `REACT_APP_SHOPIFY_API` (Storefront access token)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
2. Create a `.env` file in the project root with your Shopify credentials:
   ```bash
   REACT_APP_SHOPIFY_DOMAIN=your-shop.myshopify.com
   REACT_APP_SHOPIFY_API=your_storefront_access_token
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000) to browse the storefront.

## Available Scripts
- `npm start` — Run the app in development mode with hot reload.
- `npm test` — Launch the test runner.
- `npm run build` — Create a production build in the `build` folder.

## Limitations & Next Steps
- Variant selection and quantity adjustments are limited; the add-to-cart flow uses the first variant with quantity 1.
- Error and loading states are minimal; API failures surface as console errors or simple loading text.
- Content (hero, marketing blocks, footer links) is static and can be replaced with CMS-driven data for production use.

