import sgMail from '@sendgrid/mail';
import mjml2html from 'mjml';
import fs from 'fs';
import type { DietaryRequirement } from '../utilities/types';

sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

function compileEmailTemplate(
  templateName: string,
  variables: Record<string, string>
) {
  const templatePath = `src/emails/${templateName}.mjml`;
  let template = fs.readFileSync(templatePath, 'utf8');

  // Replace placeholders with actual values
  Object.keys(variables).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    template = template.replace(regex, variables[key]);
  });

  // Compile MJML to HTML
  const { html, errors } = mjml2html(template);

  if (errors && errors.length > 0) {
    console.error('MJML compilation errors:', errors);
    throw new Error('Failed to compile MJML template');
  }

  return html;
}

export async function sendEmail({
  name,
  email,
  dietaryRequirement,
  allergies,
  songChoice,
  specialRequirements
}: {
  name: string;
  email: string;
  dietaryRequirement: DietaryRequirement;
  allergies: string;
  songChoice: string;
  specialRequirements: string;
}) {
  try {
    // Compile email template
    const htmlContent = compileEmailTemplate('rsvp', {
      name,
      dietaryRequirement,
      allergies,
      songChoice,
      specialRequirements
    });

    // Send confirmation email
    await sgMail.send({
      to: email,
      from: import.meta.env.EMAIL_USERNAME,
      subject: 'Thanks for RSVP’ing!',
      html: htmlContent
    });
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
}
