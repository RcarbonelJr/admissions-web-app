# Admissions Web App

## Overview

This is a simple web application that demonstrates **multi-tenancy**. The application is containerized using **Docker** and simulates different user roles (Undergraduate, Graduate, and Staff) with specific messages.

## Requirements

- **Docker**: Ensure that Docker is installed and running on your system.
- **Node.js**: Only required if you're testing without Docker (not necessary for this assignment, as we're using Docker).

## Installation

### Step 1: Clone the Repository

1. Clone the repository:
   ```bash
   git clone https://github.com/RcarbonelJr/admissions-web-app.git
   cd admissions-web-app
   ```

### Step 2: Build the Docker Image

2. Once you're inside the project directory, build the Docker image by running:
   ```bash
   docker build -t admissions-web-app .
   ```

### Step 3: Run the Docker Container

3. After the image is built, run the container with the following command:
   ```bash
   docker run -p 3000:3000 admissions-web-app
   ```
   This will start the application inside the container, and it will be accessible at [http://localhost:3000](http://localhost:3000).

### Step 4: Test the Application

4. Once the container is running, you can test the following routes:

   - [http://localhost:3000](http://localhost:3000) → "Hello, welcome to the admissions system!"
   - [http://localhost:3000/undergraduate](http://localhost:3000/undergraduate) → "Welcome Undergraduate Student!"
   - [http://localhost:3000/graduate](http://localhost:3000/graduate) → "Welcome Graduate Student!"
   - [http://localhost:3000/staff](http://localhost:3000/staff) → "Welcome Staff Member!"

## Notes

- The application is designed to handle multi-tenancy by serving different messages for different roles (Undergraduate, Graduate, and Staff).
- The Docker image includes all the necessary dependencies, so you don't need to install Node.js or other packages manually. Admissions Web App
