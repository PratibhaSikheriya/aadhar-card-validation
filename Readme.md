# Aadhaar Card Validator 🇮🇳

A simple, fast, and modern web application to validate Indian Aadhaar card numbers. This full-stack project uses React for the frontend and a Python (Flask) backend to perform validation using the Verhoeff algorithm.

[**Live Demo**](https://aadhar-card-validation-sawc.vercel.app/) 🚀

## ✨ Features

* **Instant Validation:** Get immediate feedback on whether a 12-digit number is a valid Aadhaar number.

* **Clean & Modern UI:** A responsive and user-friendly interface built with Tailwind CSS.

* **Secure Backend:** The validation logic is handled securely on a Flask server.

* **Accurate Algorithm:** Uses the official **Verhoeff algorithm** for 100% accurate validation.

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS

* **Backend:** Python, Flask

* **Deployment:** Vercel

## 🚀 Running the Project Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

* [Node.js](https://nodejs.org/en/) (which includes npm)

* [Python 3.x](https://www.python.org/downloads/) and `pip`

### Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/PratibhaSikheriya/aadhar-card-validation.git
cd aadhar-card-validation
```

2. **Setup the Backend (Flask Server):**

* Navigate to the backend directory:

  ```bash
  cd backend
  ```

* Create and activate a virtual environment (recommended):

  ```bash
  # For Windows
  python -m venv venv
  .\venv\Scripts\activate

  # For macOS/Linux
  python3 -m venv venv
  source venv/bin/activate
  ```

* Install the required Python packages:

  ```bash
  pip install -r requirements.txt
  ```

* Start the backend server (it will run on `http://127.0.0.1:5000`):

  ```bash
  python app.py
  ```

* Leave this terminal running.

3. **Setup the Frontend (React App):**

* Open a **new terminal** and navigate to the frontend directory:

  ```bash
  cd frontend
  ```

* Install the required npm packages:

  ```bash
  npm install
  ```

* Start the React development server (it will open in your browser at `http://localhost:3000`):

  ```bash
  npm start
  ```

You should now have the application running locally!

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. **Fork the Project:**
   Click the 'Fork' button at the top right of the repository page.

2. **Create your Feature Branch:**

```bash
git checkout -b feature/AmazingFeature
```

3. **Commit your Changes:**

```bash
git commit -m 'Add some AmazingFeature'
```

4. **Push to the Branch:**

```bash
git push origin feature/AmazingFeature
```

5. **Open a Pull Request:**
   Go to your forked repository on GitHub and click the 'New pull request' button.

Thank you for your interest in contributing!
