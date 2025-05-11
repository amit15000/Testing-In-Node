import { describe, expect, it, vi } from "vitest";
import request from "supertest";
import { app } from "../index.js";

vi.mock("../db.js", () => {
  return {
    prismaClient: {
      Sum: {
        create: vi.fn(),
      },
    },
  };
});

describe("POST  /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 4,
      b: 5,
    });
    console.log(res);
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(9);
  });
});
