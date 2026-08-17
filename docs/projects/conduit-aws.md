# Conduit AWS Infrastructure

A complete cloud deployment demonstrating how to deploy, secure, automate and monitor a modern web application on AWS.

This project showcases a production-style DevOps workflow using Infrastructure as Code, automated deployments and cloud-native monitoring.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Infrastructure](#infrastructure)
- [Configuration Management](#configuration-management)
- [Deployment Workflow](#deployment-workflow)
- [Monitoring](#monitoring)
- [Security](#security)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

---

## Overview

Many companies struggle with manual infrastructure provisioning, inconsistent server configurations and missing monitoring.

This project demonstrates how these challenges can be solved using modern DevOps practices.

The infrastructure is provisioned with Terraform, configured automatically using Ansible and monitored with AWS CloudWatch.

Application container images are built and published by a separate application repository through a GitHub Actions pipeline and deployed to the AWS infrastructure.

---

## Features

- Automated AWS infrastructure provisioning with Terraform
- Fully automated server configuration using Ansible
- Automated application deployment using Docker Compose
- Integration with a GitHub Actions deployment pipeline
- Secure HTTPS communication using Let's Encrypt
- Containerized application deployment
- Infrastructure monitoring with AWS CloudWatch
- Infrastructure managed entirely as code

---

## Architecture

```text
          Application Repository
                   │
                   │ Push
                   ▼
          GitHub Actions CI/CD
                   │
     ┌─────────────┴─────────────┐
     │                           │
 Build Docker Images      Security Scans
     │                           │
     └─────────────┬─────────────┘
                   │
                   ▼
 GitHub Container Registry (GHCR)
                   │
                   ▼
        Infrastructure Repository
        (Terraform + Ansible)
                   │
                   ▼
             AWS EC2 Instance
                   │
        ┌──────────┴──────────┐
        │                     │
     Docker Compose        NGINX
        │                     │
        └──────────┬──────────┘
                   │
             HTTPS (Let's Encrypt)
                   │
                   ▼
                Internet

                   │
                   ▼
          AWS CloudWatch Monitoring
```

---

## Screenshots

### AWS Infrastructure
Terraform-provisioned AWS infrastructure.

![AWS Infrastructure](/img/aws-ec2-instance.png)
---

### Application CI/CD Pipeline
Docker image build, security scanning and publishing through the application repository.

![GitHub Actions Pipeline](/img/github-actions-pipeline.png)
---

### CloudWatch Dashboard
Infrastructure monitoring with CPU, memory, disk and network metrics.

![CloudWatch Dashboard](/img/cloudwatch-dashboard.png)
---

### HTTPS Deployment
Application secured with Let's Encrypt.

![HTTPS Deployment](/img/https-deployment.png)
---

### Running Containers

```bash
docker ps
```

![Running Docker Containers](/img/docker-containers.png)

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Cloud | AWS EC2 |
| Infrastructure as Code | Terraform |
| Configuration Management | Ansible |
| Containers | Docker, Docker Compose |
| Container Registry | GitHub Container Registry (GHCR) |
| CI/CD Integration | GitHub Actions |
| Reverse Proxy | NGINX |
| TLS | Let's Encrypt |
| Monitoring | AWS CloudWatch |
| Operating System | Ubuntu 24.04 LTS |

---

## Infrastructure

Terraform provisions:

- VPC
- Public Subnet
- Internet Gateway
- Route Table
- Security Group
- EC2 Instance
- IAM Role
- IAM Instance Profile

---

## Configuration Management

Ansible configures:

- Docker
- Docker Compose
- NGINX
- Let's Encrypt
- CloudWatch Agent
- Application deployment
- Reverse proxy configuration

---

## Deployment Workflow

This repository is responsible for provisioning, configuring and operating the AWS infrastructure.

1. Terraform provisions the infrastructure.
2. Ansible configures the EC2 instance.
3. The application repository builds Docker images using GitHub Actions.
4. Security scans (Gitleaks, Hadolint and Trivy) are executed.
5. Images are published to GitHub Container Registry (GHCR).
6. The EC2 instance pulls the latest images.
7. Docker Compose updates the running containers.
8. NGINX serves the application over HTTPS.
9. AWS CloudWatch continuously monitors the infrastructure.

---

## Monitoring

Collected metrics include:

- CPU Utilization
- Memory Usage
- Disk Usage
- Network Traffic

---

## Security

Implemented security measures:

- IAM Roles
- Security Groups
- HTTPS (Let's Encrypt)
- SSH Key Authentication
- GitHub Secrets
- Secret Detection (Gitleaks)
- Dockerfile Linting (Hadolint)
- Container Vulnerability Scanning (Trivy)

---

## Project Structure

```text
conduit-aws/
├── terraform/
├── ansible/
│   ├── inventory/
│   ├── roles/
│   └── playbook.yml
├── screenshots/
└── README.md
```

---

## Deployment

Provision the infrastructure:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Configure the server:

```bash
cd ansible
ansible-playbook playbook.yml
```

Application updates are automatically deployed after new container images are published by the application repository.

---

## Future Improvements

- Application Load Balancer
- Auto Scaling Group
- CloudWatch Alarms
- SNS Notifications
- Multi-Environment Support (dev/prod)
- Blue/Green Deployments
- Amazon ECS / AWS Fargate