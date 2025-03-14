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

export const sendAccountInfoEmail = async ({
  to,
  user,
}: {
  to: string
  user: Record<string, any>
}) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: 'Everynews <email@updates.every.news>',
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
