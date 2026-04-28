import { NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  company: string;
  size: string;
  message: string;
}

interface StoredLead extends LeadPayload {
  id: string;
  createdAt: string;
}

const leadsStore: StoredLead[] = [];

function validateLead(body: Partial<LeadPayload>) {
  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name) {
    return "Name is required";
  }

  if (!email) {
    return "Email is required";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please provide a valid email";
  }

  return null;
}

export async function POST(request: Request) {
  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  const validationError = validateLead(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const lead: StoredLead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company?.trim() ?? "",
    size: body.size?.trim() ?? "",
    message: body.message?.trim() ?? "",
  };

  leadsStore.push(lead);

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    count: leadsStore.length,
    leads: leadsStore,
  });
}
