# MTR Fashion — B2B Wholesale Apparel Export Platform

An elegant, interactive, and comprehensive B2B showcase portal for **MTR Fashion** — a premier apparel manufacturer and exporter based in Pushkar, Rajasthan, India. This platform is designed to connect international wholesale buyers, distributors, and sourcing agents directly to the factory's production pipeline.

---

## 🌟 Key Features

*   **Interactive Product Catalog:**
    *   Browse wholesale apparel (Boho maxi dresses, short dresses, Chikankari co-ord sets, etc.).
    *   Detailed technical specification sheets (composition, yarn count, thread count, GSM, dye safety certificates, wash persistence, and shrinkage metrics).
    *   MOQ-tiered pricing (100 Pcs, 250 Pcs, 500+ Pcs) with dynamic currency conversion (INR ⇄ USD).
    *   Detailed packaging configurations (Case pack sizes, size distributions).
*   **Bulk Order & Logistics Calculator:**
    *   Simulate custom manufacturing runs by selecting product styles, quantities, and optional branding add-ons.
    *   Real-time pricing estimates, CBM (Cubic Meters) volume calculations, and export carton packaging estimation.
    *   Freight cost calculator comparing Air Cargo vs. Ocean Freight based on simulated volumes.
    *   Dynamic lead-time estimation based on order size and scheduling.
*   **Visual Factory Operations Walkthrough:**
    *   Explore the 5 stages of the factory pipeline:
        1.  *Stage 01:* Raw Material Procurement & Fabric Inspection (with ASTM testing protocols).
        2.  *Stage 02:* Artisanal Hand-Block Carving & Printing.
        3.  *Stage 03:* CAD Pattern Cutting & Assembly Floor Operations.
        4.  *Stage 04:* Dual-Stage QA & AQL 2.5 Audit.
        5.  *Stage 05:* Packing, Compression, and Port Logistics.
*   **Compliance & Certifications Hub:**
    *   Detailed directory of active compliance audits and certificates including **OEKO-TEX Standard 100**, **ISO 9001:2015**, **GOTS Organic Certification**, **Sedex SMETA 4-Pillar**, **EU REACH Directive**, and **MSME Udyam**.
*   **B2B Inquiry Gateway:**
    *   A structured communication channel for international buyers to submit detailed sourcing inquiries directly to the sales and export team.

---

## 🛠️ Technology Stack

*   **Framework:** React 18
*   **Build Tool:** Vite 4
*   **Styling:** Tailwind CSS v3 & Autoprefixer
*   **Icons:** Lucide React

---

## 📂 Project Structure

```text
├── MTRExport.jsx          # Main single-file React component containing UI views, logic & mock data
├── index.html             # Main entry HTML template
├── package.json           # npm dependencies, scripts, and project metadata
├── tailwind.config.js     # Tailwind CSS design system configuration
├── postcss.config.js      # PostCSS configuration for styling
├── vite.config.js         # Vite bundler configuration
├── src/
│   ├── main.jsx           # React app mount script
│   └── index.css          # Tailwind directives and custom global CSS
└── item/                  # Directory for product catalog images
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `18.x` or later) and `npm` (usually bundled with Node.js).

### 1. Installation

Clone or locate the repository directory in your terminal, and run `npm install` to download dependencies:

```bash
npm install
```

*Note: If you run into permission errors during install, check that the owner has write permissions to `node_modules` or clean the existing folder structure first.*

### 2. Running Local Development Server

To spin up the local development server with hot module reloading (HMR):

```bash
npm run dev
```

The application will be accessible at:
👉 **[http://localhost:5173/](http://localhost:5173/)**

### 3. Production Build

To compile an optimized, minified bundle ready for deployment:

```bash
npm run build
```

This generates production-ready static assets in the `/dist` directory.

### 4. Preview Production Build

To run a local web server to preview your production build:

```bash
npm run preview
```

---
