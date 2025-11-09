// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

// Email gönderimi için Resend veya Nodemailer kullanabilirsiniz
// Bu örnekte basit bir validation ve response gösteriyoruz

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validasyon
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldurunuz" },
        { status: 400 }
      );
    }

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi giriniz" },
        { status: 400 }
      );
    }

    // TODO: Burada email gönderme işlemi yapılacak
    // Örnek: Resend, Nodemailer, SendGrid, vb.
    
    /*
    // Resend ile örnek kullanım:
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your.email@example.com',
      subject: `İletişim Formu: ${body.subject}`,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>İsim:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Telefon:</strong> ${body.phone}</p>` : ''}
        <p><strong>Konu:</strong> ${body.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${body.message}</p>
      `,
    });
    */

    // Başarılı yanıt
    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla alındı. En kısa sürede dönüş yapacağım.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

// OPTIONS metodu için CORS desteği (gerekirse)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}