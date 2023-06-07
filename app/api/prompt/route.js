import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//클라이언트에서 서버로 어떠한 리소스로부터 정보를 요청하기 위해 사용
export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new prompts", { status: 500 });
  }
};
