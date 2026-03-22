import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { resumeContext } from "@/lib/resume-context";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || question.trim().length < 2) {
      return NextResponse.json(
        { error: "Please ask a valid question." },
        { status: 400 }
      );
    }

    if (question.length > 1000) {
      return NextResponse.json(
        { error: "Question is too long. Please keep it under 1,000 characters." },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 512,
      system: `You are an AI assistant on Kartikeya Bahuguna's portfolio website. Answer questions about Kartikeya based on his profile below. Be conversational, concise, and professional. Answer in 2-4 sentences unless a longer answer is needed. If asked something unrelated to Kartikeya or his professional experience, politely redirect by saying you're here to help with questions about Kartikeya's background and experience.

${resumeContext}`,
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ answer: responseText });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Chat API error:", errMsg);
    return NextResponse.json(
      { error: `Something went wrong: ${errMsg}` },
      { status: 500 }
    );
  }
}
