import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { resumeContext } from "@/lib/resume-context";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { jobDescription } = await req.json();

    if (!jobDescription || jobDescription.trim().length < 20) {
      return NextResponse.json(
        { error: "Please provide a valid job description (at least 20 characters)." },
        { status: 400 }
      );
    }

    if (jobDescription.length > 10000) {
      return NextResponse.json(
        { error: "Job description is too long. Please keep it under 10,000 characters." },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are evaluating a candidate's fit for a job role. Based on the candidate's profile and the job description, provide a compelling analysis of why this candidate is a strong fit.

CANDIDATE PROFILE:
${resumeContext}

JOB DESCRIPTION:
${jobDescription}

Provide your analysis in the following format:

**Fit Score: X/10**

**Why Kartikeya is a strong fit:**
- [3-5 specific reasons mapping his experience to the role requirements]

**Key experience highlights:**
- [2-3 most relevant achievements with specific metrics]

**What he brings beyond the JD:**
- [1-2 unique value-adds that go beyond basic requirements]

Keep the tone professional but confident. Be specific — reference actual roles, metrics, and achievements from his profile. If there are gaps, acknowledge them briefly but pivot to transferable skills. Keep the total response under 300 words.`,
        },
      ],
    });

    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ analysis: responseText });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("JD Match API error:", errMsg);
    return NextResponse.json(
      { error: `Something went wrong: ${errMsg}` },
      { status: 500 }
    );
  }
}
