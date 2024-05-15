
import { servicesGroq } from '../groq/servicesGroq';
import { client } from '../lib/client';


export const fetchServices = async () => {
  try {
    const services = await client.fetch(servicesGroq);
  return services;
  } catch (error) {
    return error
  }
  
};