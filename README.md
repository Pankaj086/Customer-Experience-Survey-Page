[Deployment Link](https://customer-experience-survey-page-jai1w3aym.vercel.app/)

# Customer Experience Survey Page
This is a customer feedback survey built with React.js, React Router, Tailwind CSS, and Material UI, designed for kiosk use in retail environments.

# Features:
+ Home Page: Introduces the survey with a "Start" button.
+ Survey Questions: Five questions on customer satisfaction, with options for ratings or text feedback. Responses are saved in localStorage to retain progress.
+ Session ID: Each survey generates a unique session ID for customer tracking.
+ Progress Indicator: Shows current question and total questions.
+ Completion Page: Displays a thank you message and session ID after survey submission.
+ Session Reset: Clears responses for the next customer after completion.

# Tech Stack:
+ React.js: UI and state management.
+ React Router: Page navigation.
+ Tailwind CSS & Material UI: Responsive, modern styling.
+ LocalStorage: Saves responses during navigation.
+ Workflow:
Users start the survey, answer questions, and can navigate back and forth without losing progress.
After completing the survey, a thank you message and session ID are shown, and the session resets.

# Getting Started:
+ Clone the repo
+ Install dependencies: npm install
+ Start the server: npm start
+ Visit http://localhost:3000

# Future Enhancements:
+ Backend integration for data storage
+ Session tracking for reports
+ Improved accessibility and multi-language support