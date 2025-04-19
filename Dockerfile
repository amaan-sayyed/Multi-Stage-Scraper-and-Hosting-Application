FROM node:18-slim AS scraper
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
RUN apt-get update && apt-get install -y chromium fonts-liberation && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json ./
RUN npm install
COPY scrape.js ./
ENV SCRAPE_URL=https://example.com
RUN node scrape.js

FROM python:3.10-slim
WORKDIR /app
COPY --from=scraper /app/scraped_data.json /app/
COPY server.py /app/
RUN pip install flask
EXPOSE 5000
CMD ["python", "server.py"]