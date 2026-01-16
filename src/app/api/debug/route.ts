import { NextResponse } from 'next/server';

export async function GET() {
    const hasKey = !!process.env.RESEND_API_KEY;
    const keyPrefix = process.env.RESEND_API_KEY?.substring(0, 6) || 'NOT_SET';

    return NextResponse.json({
        hasKey,
        keyPrefix,
        nodeEnv: process.env.NODE_ENV,
    });
}
