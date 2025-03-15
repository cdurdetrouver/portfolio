import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const name = data.get('name');
		const message = data.get('message');

		let successMessage = '';
		let errorMessage = '';

		const transporter = nodemailer.createTransport({
			host: EMAIL_HOST,
			port: Number(EMAIL_PORT),
			secure: false,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS
			}
		});

		const mailOptions = {
			from: `"${name}" <${email}>`,
			to: EMAIL_USER,
			subject: 'Portfolio message',
			html:
			`<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px;">
				<div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
					<table role="presentation">
						<tbody>
							<tr>
								<td style="vertical-align: top;">
									<div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
								</td>
								<td style="vertical-align: top;">
									<div style="color: #2c3e50; font-size: 16px;"><strong>Name: ${name}<br/>Email: ${email}</strong></div>
									<p style="font-size: 16px;">Message: <br/>${message}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>`
		};

		try {
			const info = await transporter.sendMail(mailOptions);
			if (info.accepted.length > 0) {
				successMessage = 'Votre message a été envoyé avec succès !';
			} else {
				return {
						errorMessage : 'Un problème est survenu lors de l\'envoi de votre message.',
						email,
						name,
						message
				};
			}
		} catch (error) {
			return {
				errorMessage : 'Une erreur s\'est produite. Veuillez réessayer plus tard.',
				email,
				name,
				message
			};
		}

		return {
			successMessage
		};
	}
};
