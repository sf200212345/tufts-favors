# Favor-exchanging mobile app for students at Tufts University

## Technical Overview

Using React Native with Expo for frontend and distribution. Use VS Code and download the Prettier extension for a desirable workflow.
Check out the README in the frontend folder for more details on setting up.

Current ideas for backend:

- Google Firebase for full serverless
  - Cost?
- AWS API Gateway, AWS Lambda and AWS RDS/DynamoDB/S3 for full serverless
  - No cost for 12 months
- Flask/FastAPI with SQLite Database hosted with AWS EC2
  - Probably the easiest to develop with locally, but need to be more hands on with some features like authentication
  - Flask needs a separate production server to run optimally in production since the development server is single-threaded
  - FastAPI has functionality for self-documenting API routes

Considerations for backend:

- We only need a REST API, no need to serve any pages
- Cost
- Data Ownership
- Ease of development and testing
