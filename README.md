# Multi-Stage Scraper and Hosting Application

## Overview
This project is a containerized application that:
1. Scrapes data from a given URL using Puppeteer (running in a Node.js environment with Chromium).
2. Serves the scraped data via a Flask web server (running in a Python environment).

The application uses a multi-stage Docker build to keep the final image lightweight.

---

## Features
- **Dynamic Scraping**: Accepts a URL as an environment variable and scrapes the page title and first `<h1>` heading.
- **Headless Browser**: Uses Puppeteer with Chromium for headless scraping.
- **Web Server**: Hosts the scraped data as JSON via a Flask web server.
- **Containerized**: Fully containerized using Docker for easy deployment.

---

## Prerequisites
- Docker installed on your system.

---

## Build Instructions
1. Clone the repository:
```bash
   git clone <repository-url>
   cd <repository-folder>

2. 