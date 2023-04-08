# A Simple Portfolio Site
## Quick Start
To deploy, you'll need the following: 
### Pre-Req's
- Server
- docker and docker-compose CLI
- git CLI
### Deployment Instructions
1. Clone the repository
`git clone https://github.com/jumper385/portfolio-v3/ portfolio`
2. Go into portfolio folder
`cd portfolio`
3. Build the docker image (Headless)
`docker-compose up --build -d`
4. Setup the pocketbase backend server at `http://YOUR_SERVER_SETUP:8543/_`
5. In pocketbase, go into `settings > import collections` and copy and paste the [`db_structure.json`](https://github.com/jumper385/portfolio-v3/blob/main/db_structure.json) content into it.
6. Your Portfolio Site is now READY! 🥳
## Features
- Landing Page
- Projects Page
- Blog Page
- Blog Upload
- Contact Page
- All Pages are SSR
## Tech Stack
- Pocketbase Backend
- Sveltkit Frontend
- Docker & Docker Compose for Deployment
