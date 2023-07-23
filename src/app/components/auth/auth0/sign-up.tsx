import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const SignUp = () => {

    const { isAuthenticated} = useAuth0()

    const handleSignup = () => {
        useAuth0().signup(
          {
            connection: 'CONNECTION', // Replace with the name of your connection in Auth0
            email: 'EMAIL',
            password: 'PASSWORD',
            username: 'johndoe',
            given_name: 'John',
            family_name: 'Doe',
            name: 'John Doe',
            nickname: 'johnny',
            picture: 'http://example.org/jdoe.png',
            user_metadata: { plan: 'silver', team_id: 'a111' },
          },
          function (err) {
            if (err) {
              alert('Something went wrong: ' + err.message);
            } else {
              alert('Success signup without login!');
            }
          }
        );
      };
    
      return (
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : isAuthenticated ? (
            <div>
              <p>Hello, {user.name}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={handleSignup}>Sign Up</button>
          )}
        </div>
      );
    };
  return <button onClick={handleSignup}>Sign Up</button>;
};
