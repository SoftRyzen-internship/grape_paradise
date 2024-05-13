
import { privacyPolicyGroq } from '../groq/privacyPolicyGroq';
import { client } from '../lib/client';


export const fetchPrivacyPolicy = async () => {
  const privacyPolicy = await client.fetch(privacyPolicyGroq);
  return privacyPolicy;
};