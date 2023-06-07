import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//클라이언트에서 서버로 리소스를 생성하거나 업데이트를 하기 위해 데이터를 보내기
export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
