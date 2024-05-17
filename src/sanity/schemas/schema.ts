import { type SchemaTypeDefinition } from 'sanity';

import { review } from './review';
import { services } from './services';
import { goods } from './goods';
import { privacyPolicy } from './privacyPolicy';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, services, goods, privacyPolicy],
};
