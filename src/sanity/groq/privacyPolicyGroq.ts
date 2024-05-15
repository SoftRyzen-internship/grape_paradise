import { groq } from 'next-sanity';

export const privacyPolicyGroq = groq`*[_type == "privacyPolicy" && !(_id in path("drafts.**"))]{
    textPrivacyPolicy
}`;