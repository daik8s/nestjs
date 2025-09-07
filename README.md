# Project Description

This project is a simple NestJS application that demonstrates a basic authentication and user management system. It includes:

- **Authentication Module**: Handles user login and authentication status.
- **Users Module**: Manages user data, including listing all users, retrieving a user by ID, and creating/updating users.
- **PostgreSQL Integration**: Uses a PostgreSQL database (see `db/docker-compose.yml` for setup).
- **Dependency Injection**: Demonstrates circular dependency resolution between AuthService and UsersService using `forwardRef`.
- **REST API**: Provides endpoints for user operations and authentication.

## How to Run

1. **Install dependencies**:  
   `npm install`

2. **Start the database**:  
   `docker-compose -f db/docker-compose.yml up -d`

3. **Start the NestJS application**:  
   `npm run start`

## API Endpoints

- `POST /auth/login` - Login with email and password.
- `GET /users` - Get all users (requires authentication).
- `GET /users/:id` - Get user by ID.
- `POST /users` - Create a new user.
- `PATCH /users/:id` - Update user information.

## Notes

- The authentication is in-memory and for demonstration purposes only.
- User data is currently stored in-memory and not persisted to the database.
- Update the code to connect to the database for production use.
