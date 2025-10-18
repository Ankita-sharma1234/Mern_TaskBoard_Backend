# Task Management Backend API

A Node.js/Express backend API for the Task Management application.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Ankita-sharma1234/Mern_TaskBoard_Backend.git
cd Mern_TaskBoard_Backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
# Create .env file in root directory
touch .env
```

4. **Add environment variables to .env:**
```env
JWT_SECRET=your_strong_jwt_secret_key_here_make_it_strong_and_random
MONGO_URI=mongodb+srv://ankitasharma162002_db_user:wBbkhtbeQMJrRtJm@cluster0.jbxrpqx.mongodb.net/Mern_task_DB?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

5. **Start the server:**
```bash
# Development
npm run dev

# Production
npm start
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects` - Get user projects
- `POST /api/projects` - Create project
- `GET /api/projects/:id` - Get specific project
- `DELETE /api/projects/:id` - Delete project

### Tasks
- `GET /api/projects/:projectId/tasks` - Get project tasks
- `POST /api/projects/:projectId/tasks` - Create task
- `PUT /api/projects/:projectId/tasks/:taskId` - Update task
- `DELETE /api/projects/:projectId/tasks/:taskId` - Delete task

### Test Endpoint
- `GET /api/test` - Test API connection

## 🔧 Development

### Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `MONGO_URI` | MongoDB connection string | Yes |
| `PORT` | Server port (default: 5000) | No |

## 🚀 Deployment

### Render.com Deployment

1. **Connect GitHub repository**
2. **Set environment variables:**
   - `JWT_SECRET`: Your JWT secret key
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: 5000

3. **Build Command:** `npm install`
4. **Start Command:** `npm start`

### Railway Deployment

1. **Connect GitHub repository**
2. **Set environment variables in Railway dashboard**
3. **Deploy automatically**

## 🔐 Security Features

- JWT Authentication
- Password hashing with bcrypt
- CORS enabled for frontend
- Input validation
- Error handling

## 📁 Project Structure

```
Backend/
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── middlewares/    # Custom middlewares
├── server.js       # Main server file
└── package.json    # Dependencies
```

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin requests

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify environment variables
3. Ensure MongoDB connection
4. Check console for error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
