const request = require("supertest");
const app = require("../server"); // Adjust the path to your server.js file

describe("Server Tests", () => {
  it("should respond with status 200 for GET /", async () => {
    const response = await request(app).get("/auth/users");
    expect(response.status).toBe(200);
  });

  it("should register a new user and respond with status 201", async () => {
    const newUser = {
      firstName: "newuser",
      lastName: "newuser@example.com",
      phoneNumber: "password123",
      city: "newuser",
      country: "newuser",
      email: "newuser@gmail.com",
      password: "newuser",
    };

    const response = await request(app).post("/auth/register").send(newUser);
    expect(response.status).toBe(201);
  });
});
