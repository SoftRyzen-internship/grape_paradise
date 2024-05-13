import { groq } from 'next-sanity';

export const servicesGroq = groq`*[_type == "services" && !(_id in path("drafts.**"))]{
    servicesTitle,
    imageServices,
    imageServicesAlt,
    slug
}`;