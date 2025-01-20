import { handlers } from "~/server/auth";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const response = await handlers.GET(req);
    return response instanceof Response
      ? response
      : NextResponse.json(response as Record<string, unknown>);
  } catch (error: unknown) {
    console.error("Auth GET Error:", error);
    return new Response("Authentication error", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const response = await handlers.POST(req);

    return response instanceof Response
      ? response
      : NextResponse.json(response);
  } catch (error) {
    console.error("Auth POST Error:", error);
    return NextResponse.json(
      { error: "Authentication request timeout" },
      { status: 408 },
    );
  }
};
