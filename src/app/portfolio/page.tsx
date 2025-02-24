import { Client } from "@notionhq/client";

export default async function NotionPage() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  const pages = response.results;

  console.log(pages);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Notion API test</h1>
      <ul>
        {pages.map((page: any) => (
          <li key={page.id} className="mb-4">
            {page.properties.title.title[0].plain_text || "제목 없음"}
          </li>
        ))}
      </ul>
    </div>
  );
}
