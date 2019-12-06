import * as faker from 'faker';
import { writeJsonAtomic } from 'fs-nextra';
import { join } from 'path';

const ROOT_DIR = join(__dirname, '..');
const STATIC_DATA: Static = {
  profile:
  {
    name: '@rws-air/air-json-server',
  },
};

const userGenerator = (): User[] => new Array(15).fill(null).map(() => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.internet.avatar(),
  job: faker.name.jobTitle(),
  phone: faker.phone.phoneNumber(),
  address: {
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    streetName: faker.address.streetName(),
    country: faker.address.country(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  },
}));

const companyGenerator = (): Company[] => new Array(15).fill(null).map(() => ({
  companyName: faker.company.companyName(),
  catchPhrase: faker.company.catchPhrase(),
  primaryProduct: {
    name: faker.commerce.productName(),
    material: faker.commerce.productMaterial(),
    price: faker.commerce.price(),
    color: faker.commerce.color(),
    department: faker.commerce.department(),
  },
}));

const JSONData = {
  ...STATIC_DATA,
  users: userGenerator(),
  companies: companyGenerator(),
};


writeJsonAtomic(join(ROOT_DIR, 'db.json'), JSONData);

export interface Static {
  profile: {
    name: string;
  };
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  job: string;
  phone: string;
  address: {
    zipCode: string;
    city: string;
    streetName: string;
    country: string;
    latitude: string;
    longitude: string;
  };
}

export interface Company {
  companyName: string;
  catchPhrase: string;
  primaryProduct: {
    name: string;
    material: string;
    price: string;
    color: string;
    department: string;
  };
}