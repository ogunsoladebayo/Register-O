## Register-O Backend API

![Register-O Logo](https://dindikbud.demakkab.go.id/wp-content/uploads/2022/06/icon-izin-sekolah.png)

Welcome to the backend API documentation for Register-O, an attendance and exam management software. This API is built using Node.js, TypeScript, Express.js, Sequelize as the ORM (Object-Relational Mapping), and PostgreSQL as the database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Security](#security)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Introduction

Register-O Backend API serves as the backbone of the Register-O attendance and exam management software. It provides various endpoints to manage students, courses, attendance records, exam details, and more. The API is designed to be used by the frontend web application or mobile applications to interact with the database and perform necessary CRUD (Create, Read, Update, Delete) operations.

## Features

- User authentication and authorization
- CRUD operations for managing coordinators, students, courses, and exams
- Attendance tracking and reporting
- Exam management and grading
- User-friendly error handling and validation
- Secure API endpoints with proper authentication checks

## Requirements

Before running the backend API, make sure you have the following installed:

- Node.js (version 16 or later)
- PostgreSQL (version 14 or later)
- npm or yarn package manager

## Getting Started

Follow the steps below to set up and run the backend API locally.

### Installation

1. Clone the repository from GitHub:

```
git clone https://github.com/ogunsoladebayo/register-o-backend.git
cd register-o-backend
```

2. Install the dependencies using npm or yarn:

```
npm install
```
or
```
yarn install
```

### Configuration

Rename the `.env.example` file to `.env` and modify the configuration according to your setup. Set the necessary environment variables, such as database connection details and JWT secret key.

### Database Setup

Create a PostgreSQL database for the application and update the database connection details in the `.env` file.

Run the database migrations to create the required tables:

```
npm run migrate
```
or
```
yarn migrate
```

### Running the Application

Start the backend server using the following command:

```
npm start
```
or
```
yarn start
```

The server should now be running at `http://localhost:3000` (or the port specified in the `.env` file).

## API Endpoints

Please see API documentation for the list of available endpoints and their usage.

## Authentication

The API uses JSON Web Tokens (JWT) for user authentication. To access protected endpoints, clients must include the generated JWT in the `Authorization` header as follows:

```
Authorization: Bearer <token>
```

## Error Handling

The API handles errors gracefully and provides informative error messages in case of any issues. Make sure to handle errors appropriately on the client-side.

## Security

The API implements security measures, including validation and sanitization of user inputs, to prevent common vulnerabilities such as SQL injection and cross-site scripting (XSS) attacks. However, always ensure to keep the dependencies up to date and follow best practices to maintain a secure application.

## Testing

The API comes with a suite of unit tests to verify its functionalities. To run the tests, use the following command:

```
npm test
```
or
```
yarn test
```

## Deployment

To deploy the backend API to a production server, follow the guidelines provided in the official documentation for your hosting platform.

## Contributing

We welcome contributions to improve Register-O. If you want to contribute, please fork the repository and submit a pull request with your changes.

## Author

- [Usman Ogunsola](https://github.com/ogunsoladebayo)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the terms of the license.

---
