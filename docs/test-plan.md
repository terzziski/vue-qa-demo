# 🧪 Test Plan – Vue + Node.js QA Demo Project

## 🎯 Objective
This test plan outlines the testing approach for a full-stack demo app consisting of:
- A Vue 3 frontend for login and item management
- A Node.js + Express API backend

The goal is to validate both the UI and API functionalities through automated testing.

---

## 🧰 Tools & Frameworks
| Area      | Tool/Framework      | Purpose                            |
|-----------|---------------------|------------------------------------|
| UI Tests  | Cypress (JavaScript) | E2E testing with Page Object Model |
| API Tests | Jest + Supertest     | Integration testing for REST API   |
| CI/CD     | GitHub Actions       | (planned) Automated test pipeline  |

---

## 🧪 Test Types & Coverage

### 🔹 UI Functional Tests (Cypress)
- ✅ Login with valid credentials
- ✅ Login with invalid credentials
- ✅ Add new item
- ✅ Edit existing item
- ✅ Delete item
- ✅ UI assertions on success/failure states

### 🔹 API Tests (Jest + Supertest)
- ✅ `POST /login` (success/failure)
- ✅ `GET /items`
- ✅ `POST /items`
- ✅ `PUT /items/:id`
- ✅ `DELETE /items/:id`

---

## 📂 How to Run Tests

### 1. Start Backend
```bash
cd api-server
npm install
npm start
```

### 2. Start Frontend
```bash
cd vue-qa-demo
npm install
npm run serve
```

### 3. Run API Tests
```bash
cd api-server
npm test
```

### 4. Run Cypress UI Tests
```bash
cd vue-qa-demo
npx cypress open
```

---

## ⚠️ Assumptions & Limitations
- No database persistence (in-memory storage only)
- No real authentication (mocked logic in backend)
- No input validation or advanced error handling
- Only modern Chromium-based browsers tested via Cypress

---

## 📌 Next Steps
- Integrate test automation into CI (GitHub Actions)
- Add code coverage reporting
- Push project to GitHub
