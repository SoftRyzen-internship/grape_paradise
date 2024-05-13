import { groq } from 'next-sanity';

export const privacyPolicyGroq = groq`*[_type == "privacyPolicy" && !(_id in path("drafts.**"))]{
    privacyPolicyTitle1,
    privacyPolicyText1,
    privacyPolicyTitle2,
    privacyPolicyText2,
    privacyPolicyTitle3,
    privacyPolicyText3,
    privacyPolicyTitle4,
    privacyPolicyText4,
    privacyPolicyTitle5,
    privacyPolicyText5,
    privacyPolicyTitle6,
    privacyPolicyText6,
    privacyPolicyTitle7,
    privacyPolicyText7,
    privacyPolicyTitle8,
    privacyPolicyText8,
    privacyPolicyTitle9,
    privacyPolicyText9,
    privacyPolicyTitle10,
    privacyPolicyText10
}`;