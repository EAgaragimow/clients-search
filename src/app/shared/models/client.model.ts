export class Client {
  constructor(
    public general: {
      firstName: string,
      lastName: string,
      avatar: string
    },
    public job: {
      company: string,
      title: string
    },
    public contact: {
      email: string,
      phone: string
    },
    public address: {
      street: string,
      city: string,
      zipCode: string,
      country: string
    }
  ) {
  }
}
