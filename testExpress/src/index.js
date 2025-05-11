import express from "express";
import z from "zod";
import { prismaClient } from "./db.js";

export const app = express();

app.use(express.json());
const sumInput = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", async (req, res) => {
  const parsedInput = sumInput.safeParse(req.body);
  // console.log(parsedInput);

  console.log(parsedInput);
  if (!parsedInput.success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  await prismaClient.Sum.create({
    data: {
      a: parsedInput.data.a,
      b: parsedInput.data.b,
      result: parsedInput.data.a + parsedInput.data.b,
    },
  });

  return res.status(200).json({
    answer: parsedInput.data.a + parsedInput.data.b,
  });
});
