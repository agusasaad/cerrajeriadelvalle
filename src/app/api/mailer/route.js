import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  const body = await request.json()

  // Configurar el transporte con Gmail
  const transporter = nodemailer.createTransport({
    auth: {
      user: 'hernancarrazan33@gmail.com', // Tu correo
      pass: 'ydcl pcqj dhku tjwj', // Contraseña generada
    },
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  })

  // Contenido del correo
  const mailOptions = {
    from: 'hernancarrazan33@gmail.com', // Remitente
    to: body.to, // Destinatario
    subject: body.subject, // Asunto
    text: body.message, // Mensaje en texto plano
  }
  try {
    // Enviar correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error })
  }
}
