// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Debug environment variables
// console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Loaded' : 'NOT LOADED');
// console.log('MONGO_URI:', process.env.MONGO_URI ? 'Loaded' : 'NOT LOADED');

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['https://merntaskboard.netlify.app', 'http://localhost:5174', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
//   credentials: true
// }));
// app.use(express.json());

// // Debug middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`, req.body);
//   next();
// });

// // Test route
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'API is working!' });
// });

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/projects', require('./routes/projects'));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Loaded' : 'NOT LOADED');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Loaded' : 'NOT LOADED');

const app = express();

// Build allowed origins list from env or fallback to defaults
// In .env you can set CLIENT_URLS=https://merntaskboard.netlify.app,https://mern-task-board-frontend.vercel.app
const defaultOrigins = [
  'https://merntaskboard.netlify.app',
  'https://mern-task-board-frontend.vercel.app', // <--- replace with real Vercel URL if you have one
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174'
];

const envOrigins = process.env.CLIENT_URLS ? process.env.CLIENT_URLS.split(',').map(s => s.trim()) : [];
const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

console.log('Allowed CORS origins:', allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      // allow non-browser requests like curl/postman (no origin)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        console.warn('Blocked CORS request from origin:', origin);
        return callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
  })
);

app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});
// Handle preflight requests
app.options('*', cors());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Routes (keep as is)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // If CORS error, respond with 401 or 403 and message
  if (err.message && err.message.includes('CORS')) {
    return res.status(403).json({ message: 'CORS error: Access denied' });
  }
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
