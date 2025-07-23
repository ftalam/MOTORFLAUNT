# M0T0SP0RT Car Rental & Sales Platform

A modern, full-featured car rental and sales website built with **Next.js** (frontend), **Django** (backend), and **PostgreSQL** (database).

---

##  Features
- Beautiful, responsive UI (Next.js + Tailwind CSS)
- Car rental and car sales inventory
- Vehicle details with multiple images
- Pre-approval form with email notification
- Admin dashboard (with authentication)
- Modular, easy-to-extend codebase

---

## Project Structure

```
M0T0SP0RT/
├── app/                # Next.js app directory (frontend)
├── components/         # React UI components
├── data/               # (For prototyping) JSON vehicle data
├── lib/                # Frontend utility functions
├── public/images/      # Static images (vehicles, logo, etc.)
├── pages/              # (If using Next.js pages router)
├── backend/            # Django backend (API, admin, business logic)
│   ├── manage.py
│   ├── motosport/      # Django project
│   └── ...
├── README.md           # This file
├── package.json        # Next.js dependencies
├── requirements.txt    # Django & Python dependencies
└── ...
```

---

##  Quick Start

### 1. **Clone the Repository**
```bash
git clone <https://github.com/ftalam/MOTORFLAUNT.git>
cd M0T0SP0RT
```

### 2. **Frontend: Next.js Setup**
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### 3. **Backend: Django & PostgreSQL Setup**
- Install Python 3.10+
- Create a virtual environment:
  ```bash
  python -m venv venv
  source venv/bin/activate  # or venv\Scripts\activate on Windows
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Configure PostgreSQL:
  - Create a database and user
  - Update `backend/motosport/settings.py` with your DB credentials
- Run migrations and start the server:
  ```bash
  python manage.py migrate
  python manage.py createsuperuser  # create admin user
  python manage.py runserver
  # API will be at http://localhost:8000
  ```

### 4. **Connect Frontend to Backend**
- Update API endpoints in the frontend to point to your Django backend (e.g., `/api/vehicles/`, `/api/pre-approval/`)
- Remove or replace the `data/vehicles.json` prototyping file with real API calls

---

## 🛠️ Customization

- **Branding:**
  - Update company name, logo, and colors in `components/Header.tsx`, `components/Footer.tsx`, and `tailwind.config.js`
- **Contact Info:**
  - Edit phone, email, and address in `components/Footer.tsx`
- **Vehicle Inventory:**
  - Use Django admin or API to manage vehicles
- **Images:**
  - Place vehicle images in `public/images/vehicles/` or serve from backend/static
- **Email Notifications:**
  - Configure Django email backend for pre-approval notifications
- **Authentication:**
  - Django admin for backend, simple password or JWT for frontend admin

---

## Admin Access
- `/admin` (frontend): Password-protected dashboard (customizable)
- `/admin/` (backend): Django admin (superuser only)

---

##  Deployment
- **Frontend:** Deploy on Vercel, Netlify, or your own server
- **Backend:** Deploy Django on Heroku, DigitalOcean, or any cloud with PostgreSQL
- **Environment Variables:** Store secrets (DB, email, etc.) in `.env` files

---

##  Useful Scripts
- `npm run dev` — Start Next.js frontend
- `python manage.py runserver` — Start Django backend
- `python manage.py migrate` — Apply DB migrations
- `python manage.py createsuperuser` — Create Django admin
