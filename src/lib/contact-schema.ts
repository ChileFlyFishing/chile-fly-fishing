import { z } from "zod";

export const COUNTRIES = [
  "Chile",
  "United States",
  "Argentina",
  "Canada",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Others",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .max(120)
    .regex(/^[^\r\n]*$/, "No line breaks allowed"),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1).max(30),
  country: z.enum(COUNTRIES),
  message: z.string().trim().max(5000).optional().default(""),
  agree: z.literal(true),
  // Honeypot: real users always leave this empty. Accept any value here (don't
  // reject it) so a filled-in honeypot is handled as a silent fake-success in
  // the route, not a distinct validation error that would tip off the bot.
  website: z.string().optional().default(""),
  // Epoch ms captured when the form mounted, used to reject instant/scripted submissions.
  formRenderedAt: z.number(),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
