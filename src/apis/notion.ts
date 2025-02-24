import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

// 노션 클라이언트 초기화
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Notion" });
  }
}
