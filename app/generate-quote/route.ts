import { NextRequest } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PriceEstimate = z.object({
  price: z.number(),
  description: z.string(),
});

export async function POST(request: NextRequest) {
  const { inventoryList } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You generate price quotes to move a set of items locally in a box truck. This should be anywhere between £350 and £1000. The more items there are, the longer it will take to move, and bulkier items take up a lot of space. You should also consider how long it will take to load and unload the items. If the items are fragile, you should also consider the cost of insurance.",
      },
      {
        role: "user",
        content: JSON.stringify({ inventoryList }),
      },
    ],
    response_format: zodResponseFormat(PriceEstimate, "price"),
  });

  const content = response.choices[0].message.content;

  return new Response(JSON.stringify({ content }));
}

export async function GET(request: NextRequest) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You generate price quotes to move a set of items locally in a box truck. This should be anywhere between £350 and £1000. The more items there are, the longer it will take to move, and bulkier items take up a lot of space. You should also consider how long it will take to load and unload the items. If the items are fragile, you should also consider the cost of insurance.",
      },
      {
        role: "user",
        content:
          "{ description: 'I have a bunch of boxes of books and other assorted junk', inventoryList: [{ name: 'book', description: 'a bunch of books', quantity: 100, price: 100 }] }",
      },
    ],
    response_format: zodResponseFormat(PriceEstimate, "price"),
  });

  const content = response.choices[0].message.content;

  return new Response(JSON.stringify(content));
}
