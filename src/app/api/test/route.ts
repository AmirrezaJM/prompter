// import { db } from "@/lib/db";

// export async function GET() {
//   try {
//     const prompts = await db.prompt.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return new Response(JSON.stringify(prompts), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to fetch prompts." }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


// export async function POST(req: Request) {
//     try {
//       const body = await req.json();
  
//       const { title, description, mood } = body;
  
//       if (!title || !description || !mood) {
//         return new Response(JSON.stringify({ error: "Missing fields." }), {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         });
//       }
  
//       const newPrompt = {
//         id: prompts.length + 1,
//         title,
//         description,
//         mood,
//         isFavorite: false,
//       };
  
//       prompts.push(newPrompt);
  
//       return new Response(JSON.stringify(newPrompt), {
//         status: 201,
//         headers: { "Content-Type": "application/json" },
//       });
//     } catch (error) {
//       return new Response(
//         JSON.stringify({ error: "Failed to create prompt." }),
//         {
//           status: 500,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }
//   }

// calling on frontend
// fetch("/api/prompts")


// fetch("/api/prompts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: "My new prompt",
//       description: "This is a description",
//       mood: "SAD",
//     }),
//   });