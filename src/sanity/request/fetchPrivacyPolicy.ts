import { privacyPolicyGroq } from '../groq/privacyPolicyGroq';
import { client } from '../lib/client';

export const fetchPrivacyPolicy = async () => {
  try {
    const privacyPolicy = await client.fetch(privacyPolicyGroq);
    return privacyPolicy[0];
  } catch (error) {
    return error;
  }
};
