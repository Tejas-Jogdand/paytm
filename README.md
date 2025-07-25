# PayTM Clone - Digital Wallet Application

A full-stack digital wallet application built with React.js and Node.js, featuring user authentication, account management, and peer-to-peer money transfers.

## 🚀 Features

- **User Authentication**: Secure signup and signin functionality
- **Dashboard**: User-friendly dashboard displaying account balance and user list
- **Money Transfer**: Send money to other users with real-time balance updates
- **User Search**: Search and filter users for money transfers
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **JWT Authentication**: Secure token-based authentication
- **Database Integration**: MongoDB for data persistence

## 🛠️ Tech Stack

### Frontend

- **React.js** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Indeed/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── assets/          # Static assets
│   │   └── utils/           # Utility assets
│   ├── public/              # Public assets
│   └── package.json
├── backend/                 # Node.js backend application
│   ├── routes/              # API routes
│   │   ├── user.js          # User-related routes
│   │   ├── account.js       # Account/transaction routes
│   │   └── index.js         # Main router
│   ├── index.js             # Server entry point
│   ├── db.js                # Database connection
│   ├── middleware.js        # Authentication middleware
│   ├── schema.js            # Validation schemas
│   └── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd paytm
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the backend directory:

   ```env
   MONGO_URL=mongodb://localhost:27017/paytm
   JWT_PASS=your-secret-key
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📱 Application Flow

1. **Sign Up**: Create a new account with username, first name, last name, and password
2. **Sign In**: Login with existing credentials
3. **Dashboard**: View account balance and browse other users
4. **Send Money**: Select a user and transfer money from your account
5. **Real-time Updates**: Balance updates immediately after transactions

## 🔐 API Endpoints

### User Routes (`/api/v1/user`)

- `POST /signup` - Create new user account
- `POST /signin` - User authentication
- `PUT /` - Update user information
- `GET /bulk` - Get users with search functionality
- `GET /me` - Get current user information

### Account Routes (`/api/v1/account`)

- `GET /balance` - Get current account balance
- `POST /transfer` - Transfer money between accounts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

**Note**: This is a demonstration project for educational purposes. Do not use in production without proper security auditing and enhancements.
