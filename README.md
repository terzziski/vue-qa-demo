# 🧪 Vue + Node.js QA Demo

![CI](https://github.com/terzziski/vue-qa-demo/actions/workflows/test.yml/badge.svg)

This project is a QA automation demo built with:

- **Frontend**: Vue 3
- **Backend**: Node.js + Express
- **UI Testing**: Cypress with Page Object Model (POM)
- **API Testing**: Jest + Supertest
- **CI/CD**: GitHub Actions

---

## 🚀 Features

- Login form with positive/negative test flows
- CRUD for items (add, edit, delete)
- Fully automated test suite for both UI and API
- CI pipeline on every push or PR

---

## 📦 Project Structure

vue-qa-demo/
├── api-server/ # Node.js backend
│ ├── server.js
│ ├── routes/
│ └── tests/ # Jest API tests
├── cypress/ # Cypress tests
│ ├── e2e/
│ └── pages/ # Page Objects
├── src/ # Vue frontend
│ ├── components/
│ ├── views/
│ ├── router/
│ └── store/
└── .github/workflows/ # CI workflow


---

## 🧪 How to Run

### ▶️ Backend
```bash
cd api-server
npm install
npm start

▶️ Frontend
bash
Copy
Edit
npm install
npm run serve

🧪 Run API Tests
bash
Copy
Edit
cd api-server
npm test

🧪 Run UI Tests
bash
Copy
Edit
npx cypress open

✅ Continuous Integration
CI is set up via GitHub Actions to run:

API tests

Cypress UI tests

👤 Author
Made by Kosta Terziski
Automation QA Engineer | 10+ years in QA | 5+ years in Cypress

yaml
Copy
Edit

Save the file.

---

### 🔁 3. Commit Everything

```powershell
git add README.md .gitignore
git commit -m "Fix README and .gitignore"
git push origin master