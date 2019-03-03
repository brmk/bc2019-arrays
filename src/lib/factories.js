import faker from "faker";

export const personFactory = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const jobTitle = faker.name.jobTitle();
  const phoneNumber = faker.phone.phoneNumber();
  const image = faker.image.avatar();
  const email = faker.internet.email();
  const emailVerified = faker.random.boolean();
  const lastLoggedInAt = new Date(
    faker.random.arrayElement(faker.date.past(), faker.date.recent())
  );
  const registeredAt = new Date(faker.date.past());
  const age = faker.random.number({ min: 14, max: 60 });

  return {
    emails: [
      {
        address: email,
        verified: emailVerified
      }
    ],
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
