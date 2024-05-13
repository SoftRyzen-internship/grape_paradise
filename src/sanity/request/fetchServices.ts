
import { servicesGroq } from '../groq/servicesGroq';
import { client } from '../lib/client';


export const fetchServices = async () => {
  const services = await client.fetch(servicesGroq);
  return services;
};