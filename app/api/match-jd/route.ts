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
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a career strategist and advocate for Kartikeya Bahuguna. Your job is to make the strongest possible case for why he is a great fit for the given role. You should be optimistic and highlight transferable skills generously.

CANDIDATE PROFILE:
${resumeContext}

JOB DESCRIPTION:
${jobDescription}

IMPORTANT SCORING GUIDANCE:
Kartikeya is a versatile PM with 6+ years across Health-Tech, Fintech, HR-Tech, Identity, and Consulting — plus hands-on AI/coding skills. Apply these criteria generously:

- "High" — The role is in product management, strategy, operations, tech, or a related field where his PM experience, cross-functional leadership, API/platform knowledge, data-driven approach, or industry background are clearly relevant. Even if the exact industry or a few requirements don't match perfectly, if his core PM skills and transferable experience apply well, rate it High. Most PM and tech-adjacent roles should be High.
- "Medium" — The role requires deep specialisation in a field where he has limited exposure (e.g., highly technical IC engineering role, niche scientific domain, legal/compliance-only role), but some of his skills still transfer.
- "Low" — The role is in a completely unrelated field with virtually no overlap (e.g., medical practitioner, civil engineering, academic research).

Provide your analysis in this format:

**Fit Level: [High/Medium/Low]**

**Why Kartikeya is a strong fit:**
- [3-5 specific reasons mapping his experience to the role — be generous with transferable skills]

**Key experience highlights:**
- [2-3 most relevant achievements with specific metrics from his profile]

**What he brings beyond the JD:**
- [1-2 unique value-adds that go beyond basic requirements]

Keep the tone professional, confident, and persuasive. Be specific — reference actual roles, metrics, and achievements. For any gaps, immediately pivot to transferable skills and adjacent experience rather than dwelling on them. You MUST start the response with the **Fit Level:** line. Keep the total response under 300 words.`,
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
