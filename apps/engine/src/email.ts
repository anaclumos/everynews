import { Resend } from 'resend'

export const sendVerificationEmail = async ({
  to,
  subject,
  url,
}: { to: string; subject: string; url: string }) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: 'Everynews <email@updates.every.news>',
    to,
    subject,
    html: `<p>Click the link to verify your email: <a href="${url}">${url}</a></p>`,
  })
  if (error) {
    throw new Error(error.message)
  }
  return data
}
