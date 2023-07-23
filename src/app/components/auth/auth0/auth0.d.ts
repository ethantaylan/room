// auth0.d.ts

declare namespace Auth0 {
  namespace WebAuth {
    interface SignUpData {
      connection: string;
      email: string;
      password: string;
      username: string;
      given_name: string;
      family_name: string;
      name: string;
      nickname: string;
      picture: string;
      user_metadata: { plan: string; team_id: string };
    }
  }

  interface WebAuth {
    signup(
      data: SignUpData,
      callback: (err: Auth0Error | null) => void
    ): void;
  }

  interface Auth0Error {
    message: string;
  }
}

declare global {
  interface Window {
    auth0: {
      WebAuth: Auth0.WebAuth;
    };
  }
}
