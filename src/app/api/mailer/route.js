import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  const body = await request.json()

  // Configurar el transporte con Gmail
  const transporter = nodemailer.createTransport({
    auth: {
      user: 'cerrajeriadelvalleweb@gmail.com', // Tu correo
      pass: 'luae kzqk elpb knix', // Contraseña generada
    },
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  })

  // Contenido del correo
  const mailOptions = {
    from: 'cerrajeriadelvalleweb@gmail.com', // Remitente
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
