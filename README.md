# AWS DevOps CI/CD Pipeline

Automated CI/CD pipeline project using Jenkins, Docker, Nginx, and AWS EC2 for containerized Node.js application deployment.

---

##  Tech Stack

- AWS EC2
- Jenkins
- Docker
- Nginx
- GitHub
- Node.js

---

## CI/CD Workflow

```text
Developer Pushes Code
        ↓
GitHub Webhook Trigger
        ↓
Jenkins Pipeline Starts
        ↓
Docker Image Build
        ↓
Container Deployment on EC2
        ↓
Nginx Reverse Proxy
        ↓
Application Live
```

---

##  Features

- Automated CI/CD pipeline using Jenkins
- Dockerized Node.js application
- GitHub webhook integration
- Nginx reverse proxy configuration
- Automated deployment on AWS EC2

---

##  Project Structure

```text
├── nginx/
├── scripts/
├── tests/
├── Dockerfile
├── Jenkinsfile
├── app.js
├── package.json
└── README.md
```

---

##  Run Locally

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
node app.js
```

---

##  Docker Setup

Build Docker image:

```bash
docker build -t cicd-app .
```

Run container:

```bash
docker run -p 3000:3000 cicd-app
```

---

## 🌐 Application Access

```text
http://<your-server-ip>:3000
```

---

## 🔗 Webhook Integration

GitHub webhooks are configured to automatically trigger Jenkins builds whenever code is pushed to the repository.

---

##  Learning Outcomes

- CI/CD automation
- Docker containerization
- Jenkins pipeline creation
- AWS EC2 deployment
- Reverse proxy configuration using Nginx
- GitHub webhook integration
