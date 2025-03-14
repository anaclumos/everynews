import { Resend } from 'resend'

export const sendAccountInfoEmail = async ({
  to,
  user,
}: {
  to: string
  user: Record<string, any>
}) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: 'Everynews System <system@app.every.news>',
    to,
    subject: 'Your Account Info',
    html: `
      <h2>Your Account Information</h2>
      <p>Hello ${user.email},</p>
      <p>Here's your account information as requested:</p>
      <ul>
        <li><strong>Email:</strong> ${user.email}</li>
        <li><strong>User ID:</strong> ${user.id}</li>
        <li><strong>Created At:</strong> ${new Date(user.createdAt).toLocaleString()}</li>
      </ul>
      <p>Thank you for using our service!</p>
    `,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const sendMagicLink = async ({
  email,
  token,
  url,
}: { email: string; token: string; url: string }) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'Everynews System <system@app.every.news>',
    to: email,
    subject: 'Your Magic Link',
    html: `
      <h2>Your Magic Link</h2>
      <p>Hello ${email},</p>
      <p>Here's your magic link:</p>
      <a href="${url}">${url}</a>
      <p>Thank you for reading Everynews!</p>
    `,
  })
  if (error) {
    throw new Error(error.message)
  }
}
