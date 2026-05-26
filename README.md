# 📚 Library Management System — MERN Stack

A full-featured Library Management System built on the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Supports three distinct user roles — Admin, Librarian, and Student — with complete book lifecycle management, Cloudinary-powered image uploads, issue/return workflows, and automatic fine calculation.

---

## 🌐 Live Demo

👉 **[library-management-app-karan.vercel.app](https://library-management-app-karan.vercel.app/)**

### 🔑 Test Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@gmail.com | admin123 |
| Librarian | lib1@gmail.com | lib123 |
| Student | student1@gmail.com | student123 |

---

## ✨ Features

### 👨‍🎓 Student
- Secure registration & login via JWT authentication
- Browse and search the book catalog with cover images
- Submit book issue and return requests
- Track due dates, pending fines, and borrowing history from a personal dashboard

### 📚 Librarian
- Approve or reject issue and return requests
- Add, edit, and remove books with image uploads via Cloudinary
- Monitor all currently issued books
- Real-time activity and analytics dashboard

### 👨‍💼 Admin
- Full user account management
- Assign and revoke librarian privileges
- System-wide analytics and reporting dashboard

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js v18.2 | UI — functional components & hooks |
| React Router v6 | Client-side routing |
| React Bootstrap v5.2 + Custom CSS | Styling & layout |
| Axios | HTTP client for API calls |
| Cloudinary React SDK | Image management |
| React Hook Form | Form handling |
| Context API | Global state management |
| React Toastify | Notifications |
| React Icons | Icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js v18.x | Runtime environment |
| Express.js v4.18 | Web framework |
| MongoDB Atlas + Mongoose | Cloud database & ODM |
| JWT + Bcrypt | Authentication & password hashing |
| Nodemailer | OTP & password reset emails |
| Multer + Cloudinary Node SDK | File uploads |

### Infrastructure & Tooling
| Service | Role |
|---------|------|
| Vercel | Frontend deployment (Edge Network) |
| Render | Backend deployment (Node.js) |
| MongoDB Atlas | Cloud database |
| Cloudinary CDN | Media storage |
| Thunder Client | API testing (VS Code) |
| Hopscotch | API documentation |
| Git + GitHub | Version control |

---

## ⚙️ Local Setup

### 1. Install Dependencies

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
EMAIL_SERVICE=your_email_service

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Create a `.env` file inside the `frontend/` directory:

```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

### 3. Start Development Servers

**Backend**
```bash
nodemon index.js
```

**Frontend**
```bash
npm run dev
```


---


