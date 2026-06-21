import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, attending, guests, dietary, message } = body as {
      name: string;
      attending: string;
      guests: number;
      dietary: string;
      message: string;
    };

    if (!name || !attending) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const sheetyUrl = process.env.SHEETY_API_URL;

    if (!sheetyUrl) {
      // No Sheety URL configured — log to console (dev mode)
      console.log('[RSVP] No SHEETY_API_URL set. Received submission:', {
        name,
        attending,
        guests,
        dietary,
        message,
        submittedAt: new Date().toISOString(),
      });
      return NextResponse.json({ ok: true });
    }

    const sheetyRes = await fetch(sheetyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rsvp: {
          name,
          attending,
          guests: attending === 'yes' ? guests : 0,
          dietary: dietary ?? '',
          message: message ?? '',
          submittedAt: new Date().toISOString(),
        },
      }),
    });

    if (!sheetyRes.ok) {
      throw new Error(`Sheety responded with ${sheetyRes.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[RSVP] Error:', err);
    return NextResponse.json({ ok: false, error: 'Submission failed' }, { status: 500 });
  }
}
