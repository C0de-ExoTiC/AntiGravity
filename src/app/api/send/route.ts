import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured');
        return NextResponse.json(
            { error: 'E-Mail-Service nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.' },
            { status: 500 }
        );
    }

    // Initialize Resend inside the handler
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, company, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, E-Mail und Nachricht sind erforderlich.' },
                { status: 400 }
            );
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'CXZ-IT Kontaktformular <onboarding@resend.dev>',
            to: ['kontakt@cxz-it.de'],
            replyTo: email,
            subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ''}`,
            html: `
                <h2>Neue Kontaktanfrage über die Website</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Firma:</strong> ${company || 'Nicht angegeben'}</p>
                <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr />
                <h3>Nachricht:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
            { status: 500 }
        );
    }
}
