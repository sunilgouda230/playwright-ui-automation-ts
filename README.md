# UI Automation Framework – Playwright + TypeScript

## 📌 Overview
This repository contains a **reusable UI test automation framework** built using **Playwright with TypeScript**.  
The framework follows **best practices** such as Page Object Model, custom fixtures, environment-based configuration, and CI/CD integration using **GitHub Actions**.

The goal is to demonstrate a **scalable, maintainable, and production-ready automation approach** suitable for SDET-3 level expectations.

---

## 🧰 Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **GitHub Actions (CI/CD)**

---

## 📁 Project Structure

```text
├── framework/
│   ├── pages/            # Page Object classes
│   ├── fixtures/         # Custom Playwright fixtures
│   ├── utils/            # Utilities (future extensions)
│
├── tests/                # Test cases organized by feature
│
├── docs/                 # Documentation (optional)
│
├── .github/
│   └── workflows/
│       └── playwright.yml # GitHub Actions pipeline
│
├── playwright.config.ts  # Playwright configuration
├── package.json
├── README.md
