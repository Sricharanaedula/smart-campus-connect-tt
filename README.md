# Student Services — Local run instructions

Quick setup (Windows) — run these commands in separate terminals as shown.

Prerequisites
- Node.js v18+ and npm
- Java 17

1) Build frontend and copy into backend static

Open a terminal and run:

```powershell
cd "C:\Users\srich\OneDrive\Desktop\student services project\frontend"
npm install
npm run build
```

This will build the frontend and copy the `dist` output into `backend/src/main/resources/static` (so Spring Boot serves the site).

2) Run the backend (uses H2 in-memory DB for local dev)

Open another terminal and run:

```powershell
cd "C:\Users\srich\OneDrive\Desktop\student services project\backend"
mvn -Dspring.profiles.active=local spring-boot:run
```

If you use the Maven wrapper on Windows prefer:

```powershell
.\mvnw.cmd -Dspring.profiles.active=local spring-boot:run
```

3) Visit the site

- Frontend served at: http://localhost:8081/
- H2 console: http://localhost:8081/h2-console (JDBC URL: `jdbc:h2:mem:testdb`)

Notes
- The Maven build is configured to run the frontend build automatically during packaging; if you prefer that path use `mvn package`.
- For quick iteration you can re-run `npm run build` after editing frontend files to update the files served by the backend.