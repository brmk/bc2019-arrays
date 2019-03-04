import faker from "faker";

export const emailFactory = () => {
  const address = faker.internet.email();
  const verified = faker.random.boolean();
  return {
    address,
    verified
  };
};

export const personFactory = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const jobTitle = faker.name.jobTitle();
  const phoneNumber = faker.phone.phoneNumber();
  const image = faker.image.avatar();
  const emails = new Array(faker.random.number({ min: 1, max: 3 }))
    .fill(null)
    .map(emailFactory);
  const lastLoggedInAt = new Date(faker.date.recent());
  const registeredAt = new Date(faker.date.past());
  const age = faker.random.number({ min: 14, max: 60 });

  return {
    emails,
    profile: {
      firstName,
      lastName,
      jobTitle,
      phoneNumber,
      image,
      age
    },
    lastLoggedInAt,
    registeredAt
  };
};

export const createArrayWithFactory = (n, factory) => {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = factory();
  }
  return result;
};
