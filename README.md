# GenWeb.ai — Full-Stack AI Website Generator & Interactive Code Studio

> An AI-driven web application that generates, previews, customizes, and deploys fully responsive, multi-page single-file websites from natural language prompts.

[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Express Version](https://img.shields.io/badge/Express-5.2-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209.2-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Overview

Modern web prototyping often suffers from friction between design ideation and functional code generation. **GenWeb.ai** bridges this gap by enabling creators, developers, and entrepreneurs to convert natural language descriptions into complete, self-contained web applications.

Unlike traditional website builders that lock users into proprietary layout engines, or basic AI chatbots that output disjointed code snippets, GenWeb.ai generates client-deliverable, zero-dependency HTML5/CSS3/JavaScript single-page applications (SPAs). It renders them instantly inside a secure sandboxed preview, provides a real-time conversational modification interface, supports direct code inspection and editing via an embedded Monaco Editor, and publishes live websites via public URL slugs.

The project is built on a full-stack architecture combining a **React 19** frontend, an **Express 5** REST API, a **MongoDB** document store, **OpenRouter (DeepSeek)** LLM inference, **Firebase Google OAuth** authentication, and **Stripe** usage-based billing.

---

## Demo and Visual Walkthrough

> [!NOTE]
> **Portfolio Visuals**: Screenshot assets and interactive GIF walkthroughs can be captured and placed in an `assets/` directory at the repository root. Recommended visuals:
> 1. **Prompt Generation Screen**: Prompt input interface with progressive real-time generation phase indicators.
> 2. **Split-Screen Studio**: Live sandboxed preview alongside the AI conversation chat drawer and Monaco code editor.
> 3. **User Dashboard**: Website card gallery displaying dynamic iframe thumbnails, deployment status toggles, and share links.
> 4. **Credit & Billing Modal**: Pricing matrix with credit top-up tiers and Stripe Checkout integration.

---

## Key Features

- **Prompt-to-Website Generation**: Synthesizes complete, production-ready, multi-page single-file websites (HTML5, inline CSS, and vanilla JS) from natural language instructions.
- **Zero-Dependency Architecture**: Generated websites require no external CSS frameworks, JavaScript libraries, or bundlers; system fonts and Unsplash CDN assets ensure maximum portability and zero render blocking.
- **Isolated Live Preview**: Renders generated code inside a sandboxed `<iframe>` (`sandbox="allow-scripts allow-same-origin allow-forms"`) via dynamically created Object URLs (`Blob`) and `srcDoc` bindings.
- **Conversational Code Refinement**: Context-aware multi-turn conversational interface allows users to request targeted modifications ("make the navbar dark", "add a pricing card") while preserving overall site structure.
- **In-Browser Monaco Code Studio**: Integrated VS Code-grade code editor (`@monaco-editor/react`) with syntax highlighting, allowing developers to inspect and manually edit the generated source code.
- **One-Click Public Deployment**: Deploys websites instantly to public slug-based endpoints (`/site/:slug`), enabling seamless sharing without third-party hosting setup.
- **Hybrid Google Authentication**: Client-side authentication via Firebase Google OAuth paired with backend JWT issuance in secure, HTTP-only cookies.
- **Usage-Based Credit Economy**: Metered credit balance tracked per user account (50 credits deducted per generation, 25 credits per conversational update) with automatic guards against unauthorized runs.
- **Stripe Checkout & Webhook Integration**: Secure payment processing with predefined credit bundles (Free, Pro, Enterprise) verified via cryptographically signed Stripe webhooks.
- **Centralized Project Dashboard**: Card-based interface displaying all generated websites with live interactive iframe previews, metadata timestamps, deployment triggers, and copy-to-clipboard sharing.

---

## Technology Stack

| Category | Technology | Version | Purpose in this Project |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.2.0` | Declarative UI layer for state-driven views and reactive rendering |
| **Build Tool & Dev Server**| [Vite](https://vitejs.dev/) | `^7.3.1` | Ultra-fast HMR and optimized ESM build bundling |
| **Styling & Design System**| [Tailwind CSS](https://tailwindcss.com/) | `^4.1.18` | Utility-first styling integrated via `@tailwindcss/vite` |
| **Client Routing** | [React Router DOM](https://reactrouter.com/) | `^7.13.0` | Client-side routing, protected navigation, and dynamic slug mapping |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) | `^2.11.2` | Centralized global store managing authentication state and user credit balances |
| **Code Editor** | [Monaco Editor React](https://github.com/suren-atoyan/monaco-react) | `^4.7.0` | In-browser VS Code editor for source code inspection and manual overrides |
| **Animations** | [Motion](https://motion.dev/) | `^12.34.0` | Fluid entrance transitions, micro-interactions, modal overlays, and phase loaders |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.563.0` | Consistent iconography across navigation, actions, and status indicators |
| **HTTP Client** | [Axios](https://axios-http.com/) | `^1.13.5` | Promise-based HTTP client with `withCredentials: true` for cookie handling |
| **Client Authentication** | [Firebase SDK](https://firebase.google.com/) | `^12.9.0` | Client-side Google popup provider integration |
| **Backend Framework** | [Express](https://expressjs.com/) | `^5.2.1` | Minimalist RESTful API routing, JSON body handling, and middleware orchestration |
| **Runtime Environment** | [Node.js](https://nodejs.org/) | `18+ / 20+` | Server-side JavaScript runtime with ECMAScript modules (`"type": "module"`) |
| **Database & ODM** | [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/) | `^9.2.0` | Document database and ODM schemas for Users, Websites, and Conversation history |
| **Auth & Security** | [JSON Web Tokens](https://jwt.io/) | `^9.0.3` | Cryptographic session tokens transmitted via secure HTTP-only cookies |
| **Cookie Parsing** | [cookie-parser](https://github.com/expressjs/cookie-parser) | `^1.4.7` | Middleware to parse and validate incoming session cookies |
| **Cross-Origin Security** | [CORS](https://github.com/expressjs/cors) | `^2.8.6` | Configured CORS middleware enabling secure cross-origin requests with credentials |
| **Payments & Billing** | [Stripe](https://stripe.com/) | `^20.3.1` | Checkout Session generation and raw payload webhook event parsing |
| **AI LLM Inference** | [OpenRouter API](https://openrouter.ai/) | `DeepSeek Chat` | LLM inference backend executing structured, prompt-engineered code generation |
| **Code Quality** | [ESLint](https://eslint.org/) | `^9.39.1` | Static code analysis with modern flat config, React Hooks, and refresh rules |

---

## Project Structure

```text
websiteBuilder/
├── client/                     # Frontend Single-Page Application (React 19 + Vite)
│   ├── public/                 # Static public assets (e.g., vite.svg)
│   ├── src/
│   │   ├── assets/             # Bundled application graphics (e.g., react.svg)
│   │   ├── components/
│   │   │   └── LoginModal.jsx  # Animated Google OAuth login modal with Motion
│   │   ├── hooks/
│   │   │   └── useGetCurrentUser.jsx # Custom hook hydrating Redux user state on load
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx   # Project management view, previews, deploy actions
│   │   │   ├── Editor.jsx      # Code studio: split-screen preview, Monaco, and AI chat
│   │   │   ├── Generate.jsx    # Prompt input interface with animated phase loading
│   │   │   ├── Home.jsx        # Landing page with feature highlights and recent sites
│   │   │   ├── LiveSite.jsx    # Public deployment host rendering compiled code
│   │   │   └── Pricing.jsx     # Credit plans, pricing grid, and Stripe checkout trigger
│   │   ├── redux/
│   │   │   ├── store.js        # Configured Redux Toolkit global store
│   │   │   └── userSlice.js    # State slice managing user profile and credit balance
│   │   ├── App.jsx             # Top-level client routing, auth guards, and API base URL
│   │   ├── firebase.js         # Firebase Client SDK initialization & GoogleAuthProvider
│   │   ├── index.css           # Global Tailwind CSS entrypoint (@import "tailwindcss")
│   │   └── main.jsx            # React root mount wrapped in Redux Provider
│   ├── eslint.config.js        # ESLint 9 configuration with React Hooks & Refresh plugins
│   ├── index.html              # HTML shell entry point for Vite
│   ├── package.json            # Frontend dependency specifications and npm scripts
│   └── vite.config.js          # Vite config bundling React and Tailwind CSS v4 plugins
│
└── server/                     # Backend REST API Service (Node.js + Express 5)
    ├── config/
    │   ├── db.js               # Mongoose MongoDB connection handler
    │   ├── openRouter.js       # OpenRouter client configuration (DeepSeek Chat model)
    │   ├── plan.js             # Credit pricing tier definitions (Free, Pro, Enterprise)
    │   └── stripe.js           # Stripe SDK instance initialization
    ├── controllers/
    │   ├── auth.controller.js  # Google login session handling & JWT cookie management
    │   ├── billing.controller.js       # Stripe Checkout session generation
    │   ├── stripeWebhook.controller.js # HMAC-verified Stripe webhook handler for credits
    │   ├── user.controllers.js         # Current authenticated user profile resolver
    │   └── website.controllers.js      # Prompt engineering, AI generation, updates, & deploy
    ├── middlewares/
    │   └── isAuth.js           # JWT cookie authentication middleware
    ├── models/
    │   ├── user.model.js       # Mongoose schema for User profiles and credit balances
    │   └── website.model.js    # Mongoose schema for Websites and conversation threads
    ├── routes/
    │   ├── auth.routes.js      # Routes for /api/auth (Google OAuth, logout)
    │   ├── billing.routes.js   # Routes for /api/billing (Checkout initiation)
    │   ├── user.routes.js      # Routes for /api/user (Profile inspection)
    │   └── website.routes.js   # Routes for /api/website (Generate, Update, Deploy, Slugs)
    ├── utils/
    │   └── extractJson.js      # Resilient JSON string extractor and sanitizer
    ├── index.js                # Express app initialization, CORS, raw webhook, and listen
    └── package.json            # Backend dependency specifications and npm scripts
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher
- **MongoDB**: A running local MongoDB instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) connection URI
- **OpenRouter API Key**: An active API key with access to the DeepSeek model ([OpenRouter](https://openrouter.ai/))
- **Firebase Project**: A Firebase web project with Google Authentication enabled
- **Stripe Account**: A Stripe account (test mode) with API secret key and Webhook signing secret

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dipan-Roy/websiteBuilder.git
cd websiteBuilder
```

---

### Step 2: Configure Backend (`server`)

1. Navigate to the `server` directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create an environment configuration file:
   ```bash
   # On Linux/macOS
   touch .env

   # On Windows (PowerShell)
   New-Item -ItemType File .env
   ```

3. Populate `server/.env` using the values described in the [Environment Variables](#environment-variables) section.

> [!IMPORTANT]
> **Port Configuration Notice**: In `client/src/App.jsx`, the backend URL is pre-configured to `http://localhost:8000`. To ensure seamless communication without modifying source code, configure `PORT=8000` in your `server/.env`.

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server starts via `nodemon index.js` on `http://localhost:8000` and establishes a connection to MongoDB.*

---

### Step 3: Configure Frontend (`client`)

1. Open a new terminal window, navigate to the `client` directory, and install dependencies:
   ```bash
   cd client
   npm install
   ```

2. Create a client environment file:
   ```bash
   # On Linux/macOS
   touch .env

   # On Windows (PowerShell)
   New-Item -ItemType File .env
   ```

3. Add your Firebase Web API Key:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_web_api_key_here
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client will start by default at `http://localhost:5173`.*

---

### Step 4: Stripe Webhook Forwarding (Local Development)

To test credit purchases locally, forward Stripe events to your local server using the [Stripe CLI](https://docs.stripe.com/stripe-cli):

```bash
stripe listen --forward-to localhost:8000/api/stripe/webhook
```
Copy the webhook signing secret returned by the CLI (e.g., `whsec_...`) and assign it to `STRIPE_WEBHOOK_SECRET` in `server/.env`.

---

## Environment Variables

### Backend Configuration (`server/.env`)

```env
# Server Network Configuration
PORT=8000
FRONTEND_URL=http://localhost:5173

# Database Connection
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/genweb?retryWrites=true&w=majority

# Authentication Secret
JWT_SECRET=your_super_secret_jwt_key_here

# OpenRouter AI Inference
OPENROUTER_API_KEY=sk-or-v1-your_openrouter_api_key_here

# Stripe Payments Integration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_signing_secret_here
```

| Variable | Purpose | Required | Example / Default |
| :--- | :--- | :---: | :--- |
| `PORT` | Local port for Express API | Yes | `8000` |
| `FRONTEND_URL` | Client origin URL for CORS, redirect callbacks, and deploy links | Yes | `http://localhost:5173` |
| `MONGODB_URL` | MongoDB connection string (Local or Atlas) | Yes | `mongodb://localhost:27017/websiteBuilder` |
| `JWT_SECRET` | Secret key used for signing and verifying session JWTs | Yes | Any high-entropy string |
| `OPENROUTER_API_KEY`| API key for DeepSeek LLM inference via OpenRouter | Yes | `sk-or-v1-...` |
| `STRIPE_SECRET_KEY` | Stripe secret key for creating Checkout Sessions | Yes | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Secret used to verify HMAC signatures of Stripe events | Yes | `whsec_...` |

---

### Frontend Configuration (`client/.env`)

```env
# Firebase Client SDK Configuration
VITE_FIREBASE_API_KEY=AIzaSyYourFirebaseWebApiKeyHere
```

| Variable | Purpose | Required | Example / Default |
| :--- | :--- | :---: | :--- |
| `VITE_FIREBASE_API_KEY` | Firebase API key enabling Google popup authentication | Yes | `AIzaSy...` |

---

## API Documentation

All routes (except public slugs and webhooks) require authentication via an HTTP-only JWT cookie (`token`).

| Method | Endpoint | Auth | Request Body / Parameters | Response / Behavior |
| :--- | :--- | :---: | :--- | :--- |
| `POST` | `/api/auth/google` | Public | `{ name, email, avatar }` | Finds or creates user; sets 7-day HTTP-only JWT cookie; returns `User` object. |
| `GET` | `/api/auth/logout` | Public | None | Clears the `token` cookie; returns `{ message: "log out successfully" }`. |
| `GET` | `/api/user/me` | `isAuth` | None | Returns the authenticated `User` document (including current credit balance). |
| `POST` | `/api/website/generate` | `isAuth` | `{ prompt: string }` | Validates balance (>= 50 credits); queries OpenRouter; persists website; deducts 50 credits; returns `{ websiteId, remainingCredits }`. |
| `POST` | `/api/website/update/:id` | `isAuth` | Param: `id`<br/>Body: `{ prompt: string }` | Validates balance (>= 25 credits); feeds current code & prompt to LLM; updates code; appends to conversation; deducts 25 credits; returns `{ message, code, remainingCredits }`. |
| `GET` | `/api/website/get-by-id/:id`| `isAuth` | Param: `id` | Returns `Website` record matching `_id` and owned by `req.user._id`. |
| `GET` | `/api/website/get-all` | `isAuth` | None | Returns array of all `Website` records owned by authenticated user. |
| `GET` | `/api/website/deploy/:id` | `isAuth` | Param: `id` | Generates unique alphanumeric slug; sets `deployed: true`; constructs `deployUrl`; returns `{ url }`. |
| `GET` | `/api/website/get-by-slug/:slug` | Public | Param: `slug` | Resolves `Website` record by public slug; used by `/site/:slug` live preview. |
| `POST` | `/api/billing` | `isAuth` | `{ planType: "pro" \| "enterprise" }` | Creates Stripe Checkout session for INR currency with user metadata; returns `{ sessionUrl }`. |
| `POST` | `/api/stripe/webhook` | Stripe Sig | Raw JSON body + `stripe-signature` header | Verifies signature via `STRIPE_WEBHOOK_SECRET`; on `checkout.session.completed`, increments user credits and updates plan tier. |

---


### Entity Details

1. **User Schema (`server/models/user.model.js`)**:
   - Manages user identity, OAuth profile data, and subscription tier.
   - Enforces unique email indexing.
   - Tracks metered `credits` (initial allowance of 100 credits per new user).

2. **Website Schema (`server/models/website.model.js`)**:
   - Stores the generated HTML/CSS/JavaScript payload in `latestCode`.
   - Embeds an array of `conversation` subdocuments (`role`, `content`, timestamps) preserving iteration history.
   - Maintains deployment state (`deployed`, `deployUrl`, `slug`).
   - Uses a `sparse`, `unique` index on `slug` to support clean public URLs without collision.

---

## AI Implementation Details

### Problem Formulation & Model Selection

Generating production-quality websites from arbitrary user prompts requires an LLM with strong CSS architecture skills, responsive layout comprehension, and strict adherence to output formatting. GenWeb.ai utilizes **OpenRouter** targeting the **DeepSeek Chat** (`deepseek/deepseek-chat`) model configured at a low temperature of `0.2` to ensure deterministic, syntactically valid code output.

### Prompt Engineering Architecture

The backend (`server/controllers/website.controllers.js`) wraps user inputs within a comprehensive **Master Prompt** acting as an architectural specification:

1. **Zero-Dependency Mandate**: The model is strictly prohibited from importing external libraries (no React, Vue, Tailwind CDN, Bootstrap, or jQuery) and must deliver standard semantic HTML5, modern CSS3 (Flexbox/Grid), and vanilla JavaScript.
2. **Single-File Isolation**: The output must reside within a single HTML document containing exactly one `<style>` tag and exactly one `<script>` tag, ensuring 100% compatibility with iframe `srcdoc` rendering.
3. **Responsive Mobile-First Contract**: Explicit media query breakpoints (`<768px`, `768px–1024px`, `>1024px`) are enforced with mandatory rules against horizontal scrolling and unscaled media.
4. **Curated CDN Media**: Images are restricted to curated Unsplash CDN URLs formatted with standard optimization query parameters (`?auto=format&fit=crop&w=1200&q=80`).
5. **Simulated SPA Architecture**: Multi-page navigation (Home, About, Services, Contact) is simulated within the single document using JavaScript-driven DOM visibility toggles (`.page.active`).
6. **Strict JSON Schema**: The model must return raw JSON conforming to:
   ```json
   {
     "message": "Short professional confirmation sentence",
     "code": "<!DOCTYPE html><html>...</html>"
   }
   ```

### Resilience & Error Handling

LLMs occasionally return markdown backticks (````json ... ````) despite negative prompting. To prevent parser crashes:
- **Sanitizer (`server/utils/extractJson.js`)**: Strips markdown formatting blocks and uses bracket index slicing (`indexOf('{')` to `lastIndexOf('}')`) to extract valid JSON substrings.
- **Two-Stage Automatic Retry**: If JSON parsing fails on the first attempt, the backend automatically issues a re-prompting request appended with `"RETURN ONLY RAW JSON."`.
- **Atomic Credit Accounting**: Credits are only deducted from the user record *after* the code generation and JSON extraction have successfully validated and persisted to MongoDB.

---

## Testing and Code Quality

### Static Code Analysis

The client workspace is configured with **ESLint 9** using the modern flat configuration format (`eslint.config.js`). It enforces:
- Standard JavaScript recommendations (`@eslint/js`).
- React Hooks rules (`eslint-plugin-react-hooks`) for dependency arrays and hook lifecycle compliance.
- Fast Refresh compliance (`eslint-plugin-react-refresh`).

To run linting across the frontend:
```bash
cd client
npm run lint
```

### Defensive Engineering & Security Mechanisms

- **Iframe Sandboxing**: Rendered websites run inside an `<iframe>` configured with `sandbox="allow-scripts allow-same-origin allow-forms"`. This prevents generated scripts from escaping the iframe context, manipulating the parent application DOM, or executing unauthorized navigation.
- **Stripe Webhook Signature Verification**: Incoming webhook payloads are parsed via `express.raw({ type: "application/json" })` and verified using `stripe.webhooks.constructEvent()` against `STRIPE_WEBHOOK_SECRET` to prevent replay attacks or falsified credit injections.
- **Credit Guards**: Strict pre-execution checks in backend controllers reject requests with `400 Bad Request` before invoking expensive LLM calls if credit thresholds are not met (50 for generation, 25 for updates).
- **HTTP-Only Cookies**: Authentication tokens are stored in `httpOnly` cookies with `sameSite: "strict"`, mitigating XSS-based credential theft.

> [!NOTE]
> Automated unit/integration test suites (e.g., Vitest, Jest, Supertest, Cypress) are not currently configured in the repository. Adding integration test coverage for authentication flows and credit accounting is documented under [Limitations and Future Improvements](#limitations-and-future-improvements).

---

## Deployment Guide

### Client Deployment (e.g., Vercel, Netlify)

1. **Build Step**:
   ```bash
   cd client
   npm run build
   ```
   *Compiles production assets into `client/dist/`.*
2. **Environment Variables**: Configure `VITE_FIREBASE_API_KEY` in the hosting provider dashboard.
3. **SPA Rewrites**: Ensure your host routes all requests to `index.html` (e.g., via a `vercel.json` rewrites configuration).

### Server Deployment (e.g., Render, Railway, Fly.io)

1. **Runtime Command**:
   ```bash
   cd server
   node index.js
   ```
2. **Environment Configuration**: Set all required server environment variables (`PORT`, `FRONTEND_URL`, `MONGODB_URL`, `JWT_SECRET`, `OPENROUTER_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`).
3. **CORS & Domain Alignment**: Update `server/index.js` CORS origin and `FRONTEND_URL` to match your deployed client domain.
4. **Stripe Webhook**: Register your production webhook URL (`https://your-api.com/api/stripe/webhook`) in the Stripe Dashboard and configure the generated production webhook secret.

### Application Hosting vs. User Website Hosting

- **Application Hosting**: The GenWeb.ai React application and Express API serve the editing environment, user accounts, and billing workflows.
- **User Website Hosting**: Websites published by users are hosted dynamically via the `/site/:slug` route, which queries the database for `latestCode` and renders the compiled HTML inside a clean, unbranded viewport.

---

## Credits and License

- **Author**: Developed by [Dipan-Roy](https://github.com/Dipan-Roy).
- **License**: The backend package specifies the **ISC** license (`"license": "ISC"` in `server/package.json`). Please consult the repository author for commercial terms and reuse permissions.
