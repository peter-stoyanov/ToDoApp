export class User {
    // email: string;
    // token: string;
    // username: string;
    // bio?: string;
    // image?: string;

    constructor(
      public id: number,
      public email: string,
      public username: string,
      public token?: string,
      public bio?: string,
      public image?: string
    ) { }
  }