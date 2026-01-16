import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Sanitize user input to prevent XSS in emails
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

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

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        // Sanitize inputs for HTML email
        const safeName = escapeHtml(name);
        const safeCompany = escapeHtml(company || 'Nicht angegeben');
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'CXZ-IT Kontaktformular <kontakt@cxz-it.de>',
            to: ['kontakt@cxz-it.de'],
            replyTo: email,
            subject: `Neue Anfrage von ${safeName}${company ? ` (${safeCompany})` : ''}`,
            html: `
                <h2>Neue Kontaktanfrage über die Website</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Firma:</strong> ${safeCompany}</p>
                <p><strong>E-Mail:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                <hr />
                <h3>Nachricht:</h3>
                <p>${safeMessage}</p>
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
