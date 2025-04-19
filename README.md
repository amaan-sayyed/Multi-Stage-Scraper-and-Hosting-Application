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

## How to Build the Docker Image
1. Clone the repository:
```bash
   git clone https://github.com/amaan-sayyed/Multi-Stage-Scraper-and-Hosting-Application.git
   cd Multi-Stage-Scraper-and-Hosting-Application
```
2. Build the Docker image:
```bash
   docker build -t scraper-host .
```
---

## How to Run the Container
Run the container using the following command:
```bash
   docker run -e SCRAPE_URL=https://example.com -p 5000:5000 scraper-host
```
Explanation:
- -e SCRAPE_URL=https://example.com: Passes the URL to scrape as an environment variable. Replace https://example.com with the desired URL.
- -p 5000:5000: Maps port 5000 of the container to port 5000 on your host machine.

---

## How to Access the Hosted Scraped Data
1. Open your browser and navigate to:
```bash
   http://localhost:5000
```
This will display the scraped data as JSON.

2. Alternatively, use curl to fetch the data:
```bash
   curl http://localhost:5000
```
---

### Example Output
If the URL is https://example.com, the output might look like:

```bash
{
  "title": "Example Domain",
  "heading": "Example Domain"
}
```

![alt text](<Screenshot from 2025-04-19 22-24-58.png>)

---

### Notes
- If no SCRAPE_URL is provided, the application defaults to https://example.com.
- Ensure the target URL is accessible and contains a h1 tag for proper scraping.

---

### Troubleshooting
1. Chromium Not Found:
    - Ensure the executablePath in scrape.js is set to /usr/bin/chromium.
2. Port Already in Use:
    - Ensure port 5000 is not being used by another application.
3. Docker Build Issues:
    - Verify that all required files (Dockerfile, scrape.js, server.py, package.json) are in the same directory.

---

### License
This project is licensed under the MIT License. See the LICENSE file for details.

This [README.md]() includes:
- **Build Instructions**: How to build the Docker image.
- **Run Instructions**: How to run the container and pass the URL.
- **Access Instructions**: How to access the hosted scraped data.
- **Example Output**: A sample JSON response.
- **Troubleshooting**: Common issues and fixes.

Let me know if you need further adjustments! 🚀