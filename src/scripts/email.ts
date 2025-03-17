import sgMail from "@sendgrid/mail";
import type { DietaryRequirement } from "../utilities/types";
import { templates } from "../emails/templates";

sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

function compileEmailTemplate(
  templateName: string,
  variables: Record<string, string>,
) {
  let template = templates[templateName];

  if (!template) {
    throw new Error(`Template ${templateName} not found`);
  }

  // Replace placeholders with actual values
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    template = template.replace(regex, value || "");
  }

  return template;
}

export async function sendEmail({
  name,
  email,
  dietaryRequirement,
  allergies,
  songChoice,
  specialRequirements,
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
    const htmlContent = compileEmailTemplate("rsvp", {
      name,
      dietaryRequirement: dietaryRequirement || "None",
      allergies: allergies || "None",
      songChoice: songChoice || "None",
      specialRequirements: specialRequirements || "None",
    });

    // Send confirmation email
    const res = await sgMail.send({
      to: email,
      from: import.meta.env.EMAIL_USERNAME,
      subject: "Thanks for RSVP’ing!",
      html: htmlContent,
    });
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
}
