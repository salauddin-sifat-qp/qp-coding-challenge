Exercise: Set Up a Multi-Container Environment Using Docker Compose
In this exercise, you will create a simple multi-container environment consisting of a backend service and a frontend service. The backend will be a web server that serves data, and the frontend will display this data in a web page. You will use Docker networking to enable communication between the two containers and manage them using a docker-compose.yml file.
---
Goals
1. Understand how to set up and manage multiple containers with Docker Compose.
2. Learn how to use Docker networking for inter-container communication.
3. Build and deploy a simple frontend-backend application.
---
Task Requirements
1. Project Structure:  
   - Create a project folder containing two subdirectories: backend and frontend.
   - Each subdirectory should include the necessary files to build and run its container.
2. Backend Service:  
   - Develop a web server that listens on port 5000.
   - The server should return a simple text message like:  
     "Hello from the Backend!"
3. Frontend Service:  
   - Create a simple web page that fetches and displays the message from the backend service.
   - The frontend should run on port 8080.
4. Docker Networking:  
   - Configure a custom bridge network for both services.
   - Ensure the frontend can communicate with the backend using the network.
5. Docker Compose:  
   - Create a docker-compose.yml file to:
     - Build the backend and frontend images.
     - Configure networking for the services.
     - Map appropriate ports for external access.
6. Run the Application:  
   - Use Docker Compose to build and start the containers.
   - Verify that the frontend communicates with the backend and displays the expected message.
7. Self-Learning Challenge:  
   - Try to write all the Dockerize instructions (Dockerfiles, networking, Compose configurations) by yourself without help from any AI. 
---
Expected Outcome
- The frontend web page, accessible at http://localhost:8080, should display:  
  - A static message: "Hello from the Frontend!"
  - A dynamic message retrieved from the backend: "Hello from the Backend!"
---
Bonus Challenges
1. Dynamic Backend: Modify the backend to return a JSON response instead of plain text.
2. Environment Variables: Use environment variables to configure the backend's port or message.
3. Container Logs: Inspect the logs of both containers to monitor communication.
4. Scaling: Use Docker Compose to scale the backend service to multiple instances.
---
Deliverables
1. A properly structured project directory with:
   - backend/
   - frontend/
   - docker-compose.yml
2. A running application accessible through the browser.