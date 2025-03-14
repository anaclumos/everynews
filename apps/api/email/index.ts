import { Resend } from 'resend'

export const sendMagicLink = async ({
  email,
  token,
  url,
}: { email: string; token: string; url: string }) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Everynews <system@app.every.news>',
    to: email,
    subject: 'Your Magic Link',
    html: `
      <h2>Your Magic Link</h2>
      <p>Hello ${email},</p>
      <p>Here's your magic link:</p>
      <a href="${process.env.PRODUCTION_URL}${url}">${process.env.PRODUCTION_URL}${url}</a>
      <p>Thank you for reading Everynews!</p>
    `,
  })
  if (error) {
    throw new Error(error.message)
  }
}
