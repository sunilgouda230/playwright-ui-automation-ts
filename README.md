# UI Automation Framework – Playwright + TypeScript

## 📘 Overview

This repository hosts a **scalable and reusable UI automation framework** built using **Playwright with TypeScript**.

The framework is designed with **real-world product testing in mind**, following industry best practices such as:

* Page Object Model (POM)
* Custom Playwright fixtures
* Environment-based configuration
* CI/CD integration using **GitHub Actions**
---

## 🧰 Tech Stack

* **Playwright** – Modern, fast, and reliable UI automation
* **TypeScript** – Type safety and better maintainability
* **Node.js** – Runtime environment
* **GitHub Actions** – Continuous Integration and test execution

---

## 📁 Project Structure

```text
├── framework/
│   ├── pages/              # Page Object Model (UI abstractions)
│   ├── fixtures/           # Custom Playwright fixtures (auth, setup, teardown)
│   ├── utils/              # Reusable utilities and helpers
│
├── tests/                  # Test cases grouped by feature or module
│
├── docs/                   # Framework and usage documentation (optional)
│
├── .github/
│   └── workflows/
│       └── playwright.yml  # GitHub Actions CI pipeline
│
├── playwright.config.ts    # Global Playwright configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
```

---

### 💡 Design Principles Followed

* Clear separation of **test logic vs UI logic**
* Reusable and composable fixtures
* Minimal test duplication
* CI-friendly execution
* Easy onboarding for new contributors
