import { FormData } from "../models";

export interface ScheduleAppointmentBackend {
  full_name: string,
  email: string,
  phone: string,
  styles: string[],
  color: string,
  location: string,
  size: string,
  idea: string,
  artist: string,
  reference: string,
  allergies: string,
  preferred_date: string,
  preferred_time: string,
  is_over_18: boolean,
  accepts_privacy: boolean,
  captcha_token: string
}

export const mapFormDataToScheduleAppointmentBackend = (
  formData: FormData
): ScheduleAppointmentBackend => ({
  full_name: formData.fullName,
  email: formData.email,
  phone: formData.phone,
  styles: formData.styles,
  color: formData.color,
  location: formData.location,
  size: formData.size,
  idea: formData.idea,
  artist: formData.artist,
  reference: formData.reference,
  allergies: formData.allergies,
  preferred_date: formData.preferredDate,
  preferred_time: formData.preferredTime,
  is_over_18: formData.isOver18,
  accepts_privacy: formData.acceptsPrivacy,
  captcha_token: formData.captchaToken || '',
});

export const scheduleAppointmentService = async (formData: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapFormDataToScheduleAppointmentBackend(formData)),
    });

    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to send quote request');
    }

    return await response.json();
  } catch (error) {
    // console.error('Error scheduling appointment:', error);
    throw error;
  }
};
