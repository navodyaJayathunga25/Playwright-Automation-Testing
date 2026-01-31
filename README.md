# Playwright-Automation-Testing
Automated test suite for SwiftTranslator (Singlish → Sinhala transliteration system) built with Playwright. Contains 25 positive, 11 negative, and 1 UI test cases as required by the assignment.

## 📌 Project Overview
This repository contains a complete Playwright test automation suite for testing https://www.swifttranslator.com/ – a Singlish to Sinhala transliteration system.<br/>
✅ 25 Positive Functional Tests – Valid inputs with correct conversion expectations<br/>
❌ 11 Negative Functional Tests – Edge cases exposing system limitations<br/>
🖥️ 1 UI Tests – Real-time conversion, clear button, copy functionality

## ⚙️ Prerequisites
Node.js v18 or higher (Download)<br/>
npm v9 or higher (comes with Node.js)<br/>
Git (optional, for version control)<br/>
Playwright tool<br/>
visual studio code

## 🚀 Getting Started
Follow these steps to set up the project locally and ensure all dependencies are installed.

### 1. Clone the Repository
If you haven't already, clone this project to your local machine:

**Bash**

> git clone https://github.com/your-username/Playwright-Automation-Testing.git
> cd Playwright-Automation-Testing

### 2. Install Dependencies
This project uses Playwright and its test runner. Run the following command to install the required Node.js packages:

**Bash**

> npm install

### 3. Install Playwright Browsers
Playwright requires specific browser binaries (Chromium, Firefox, WebKit) to run tests. Install them using:

**Bash**

> npx playwright install


## 🧪 Running the Test Cases
You can run the tests in different modes depending on whether you want to see the browser action or just the results.

### ▶️ Run All Tests (Headless Mode)
This is the fastest way to run all 37 test cases in the background.

**Bash**

> npx playwright test

### 🖥️ Run Tests with UI Mode
To see the execution flow, step through tests, and debug visually, use Playwright's UI mode:

**Bash**

> npx playwright test --ui

### 🔍 Run a Specific Test File
If you want to run only the positive, negative, or UI tests separately:

**Bash**

> npx playwright test tests/positive-tests.spec.js

### 📊 View Test Reports
After the tests complete, Playwright generates a detailed HTML report. To view it, run:

**Bash**

> npx playwright show-report

