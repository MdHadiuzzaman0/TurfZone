# 🏟️ ArenaPulse

> A modern sports facility booking platform — discover, filter, and reserve premium football turfs, badminton courts, and arenas near you.

---

## 🔗 Live URL

**Link:** https://arena-pulse-kappa.vercel.app/

---

## 📌 Purpose

ArenaPulse is a full-stack web application that allows sports enthusiasts to browse and book local sports facilities with ease. Facility owners can list, manage, and update their venues — while users can search, filter, and book slots in real time.

---

## ✨ Features

- 🔐 **Authentication** — Email/password login & Google OAuth via Better Auth
- 🏟️ **Browse Facilities** — View all available sports venues with images, pricing, and slot info
- 🔍 **Search & Filter** — Search by name and filter by sports type (football, badminton, etc.)
- 📅 **Slot Booking** — Book a specific time slot with date and duration selection
- 🧾 **My Bookings** — View and cancel your personal bookings
- ➕ **Add Facility** — Authenticated users can list new sports facilities
- ⚙️ **Manage Facilities** — Edit or delete your own listed facilities
- 🔒 **JWT-Protected Routes** — Secure API calls using JWT tokens from session

---

## 🛠️ Technologies Used

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS, DaisyUI, HeroUI |
| Auth | Better Auth (Email + Google OAuth) |
| Database | MongoDB (via mongodbAdapter) |
| Icons | React Icons (react-icons) |
| Deployment | Vercel |

---

## 📦 NPM Packages Used

```
next
react
react-dom
better-auth
mongodb
tailwindcss
daisyui
@heroui/react
react-icons
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/         # Login page
│   │   └── register/      # Register page
│   ├── (main)/
│   │   ├── facilities/    # All facilities + detail page
│   │   ├── myBookings/    # User's booked slots
│   │   ├── addFacility/   # Add new facility form
│   │   └── manageFacilities/ # Edit/delete own facilities
│   ├── api/auth/          # Better Auth API route handler
│   ├── layout.js          # Root layout
│   └── page.js            # Home / Hero section
├── components/
│   ├── Navbar.jsx
│   ├── NavLink.jsx
│   ├── NavbarRight.jsx
│   ├── FacilityCard.jsx
│   ├── BookingButton.jsx
│   ├── DeleteBooking.jsx
│   ├── EditFacility.jsx
│   ├── DeleteFacility.jsx
│   ├── Filter.jsx
│   ├── Search.jsx
│   └── Footer.jsx
└── lib/
    ├── auth.js            # Better Auth server config
    ├── auth-client.js     # Better Auth client config
    ├── data.js            # Data fetching functions
    └── action.js          # Server Actions (CRUD + booking)
```

---

## ⚙️ Core Implementation Concepts

### 1. 🔐 Authentication — Better Auth

Better Auth handles both **email/password** and **Google OAuth** login. Session is managed server-side with **JWT cookie caching** for performance.

```js
// src/lib/auth.js
export const auth = betterAuth({
  database: mongodbAdapter(db),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  emailAndPassword: { enabled: true },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 30 * 60 * 60 * 24,
    },
  },
  plugins: [jwt()],
});
```

---

### 2. 🔒 JWT-Protected Server Actions

All sensitive API calls (booking, add/edit/delete facility) pass a **Bearer JWT token** in the `Authorization` header. The token is retrieved server-side from the active session.

```js
// src/lib/action.js
const { token } = await auth.api.getToken({ headers: await headers() });

await fetch(`${SERVER_URL}/facilities`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(newFacility),
});
```

---

### 3. 🏟️ Facility CRUD — Server Actions

All data mutations (create, update, delete) are handled via **Next.js Server Actions** (`"use server"`). After each mutation, `revalidatePath()` is called to refresh the relevant page cache automatically.

```js
// Create facility
export async function facilityCreate(formData, token) { ... }

// Update facility
export async function facilityUpdate({ id, modifiedData, token }) { ... }

// Delete facility
export async function facilityDelete({ id, name, token }) { ... }
```

---

### 4. 🔍 Search & Filter

**Search** queries the backend with a text parameter. **Filter** sends a POST request with an array of selected sports types. Both update the displayed facilities list via React state — no page reload needed.

```js
// Search
export async function searchFacilities(text) {
  const res = await fetch(`${SERVER_URL}/facilities/search?searchedValue=${text}`);
  return res.json();
}

// Filter
export async function fetchFilteredFacilities(sportsArray) {
  const res = await fetch(`${SERVER_URL}/facilities/filter`, {
    method: "POST",
    body: JSON.stringify(sportsArray),
  });
  return res.json();
}
```

---

### 5. 📅 Booking System

Users select a **date**, **time slot**, and **duration** to book a facility. The booking data is stored in MongoDB and linked to the user's email. Users can view and cancel bookings from the **My Bookings** page.

```js
export async function bookingData(bookedData, token) {
  const res = await fetch(`${SERVER_URL}/myBookings`, {
    method: "POST",
    headers: { authorization: `Bearer ${token}` },
    body: JSON.stringify(bookedData),
  });
  const result = await res.json();
  if (result.insertedId) {
    revalidatePath("/myBookings");
    return { success: true };
  }
}
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/MdHadiuzzaman0/ArenaPulse.git
cd ArenaPulse

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env.local file with:
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_SERVER_URL=your_backend_api_url

# 4. Run the development server
npm run dev
```

---

## 👤 Author

**Md Hadiuzzaman**
GitHub: [@MdHadiuzzaman0](https://github.com/MdHadiuzzaman0)
