import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ApiRequest {
  method?: string;
  body?: {
    name?: string;
    email?: string;
    description?: string;
  };
}

interface ApiResponse {
  status: (code: number) => {
    json: (body: unknown) => void;
  };
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, description } = req.body || {};

    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Tasnim.Kumar@absolutdata.co.uk',
      subject: `New Inquiry from ${name} via Website`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${description.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return res.status(500).json({ error: errorMessage });
  }
}
