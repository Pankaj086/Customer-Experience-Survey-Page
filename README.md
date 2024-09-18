Customer Experience Survey Page
This project is a Customer Experience Survey built using React.js and React Router, styled with Tailwind CSS and Material UI. The survey is designed for use on a kiosk in a retail or customer-facing environment, allowing customers to provide feedback easily and efficiently.

Features
Home Page: Welcomes users with a brief introduction to the survey and provides a "Start" button to begin the survey.
Survey Questions: Five questions that capture various aspects of the customer experience, including satisfaction, value for money, and suggestions for improvement.
Each question can feature either a rating scale or a text input for more detailed feedback.
Survey responses are stored in the browser's localStorage, allowing users to navigate back and forth between questions without losing progress.
Session Identification: Each survey session is assigned a unique session ID, stored locally to distinguish between different customer responses.
Progress Indicator: A dynamic counter shows the user which question they are on and how many are left.
Submit and Thank You Page: Once the survey is completed, users are thanked for their feedback and shown their unique session ID.
Automatic Session Clearing: After the survey is submitted, the session and responses are cleared, ensuring that the next customer starts with a fresh session.

Technology Stack
React.js: For building the user interface and handling state management.
React Router: For navigating between the different pages of the survey (Home, Questions, Thank You).
Tailwind CSS: For responsive and utility-first styling of components.
Material UI: Used for components like the rating scale, ensuring a consistent and modern look and feel.
Local Storage: Used to store survey responses locally, preserving answers even if the user navigates between questions.
How It Works
Users are greeted with a welcome message on the Home Page and click "Start" to begin the survey.
The Questions Page dynamically loads each question and allows users to input their answers either by selecting a rating or typing feedback.
Users can navigate between questions, and their progress is saved in localStorage.
On completion, the Thank You Page is displayed with the session ID, and users are redirected back to the home page after a short delay.
The session and responses are cleared once the user completes the survey, ensuring privacy and a fresh start for the next user.

Getting Started
To run this project locally:

Clone the repository
Install dependencies: npm install
Start the development server: npm start
Navigate to http://localhost:3000 in your browser
Future Enhancements
Backend Integration: Store responses in a database for deeper analysis.
Session History: Keep track of multiple sessions for reporting purposes.
Improved Accessibility: Add keyboard navigation and screen reader support.
Multi-Language Support: Expand the survey to support multiple languages.