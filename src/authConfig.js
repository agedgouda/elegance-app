import { LogLevel,PublicClientApplication } from '@azure/msal-browser';

if(import.meta.env.DEV) {
    var clientId = 'd7afee0d-250e-4382-8a18-7fddcb8cccd6';
    var redirectUri = 'http://localhost:5173/';
    var postLogoutRedirectUri = 'http://localhost:5173/';
}
if(import.meta.env.PROD) {

    var clientId = 'f47d7bc5-461a-4bfd-b5a2-d18485a98b8e';
    var redirectUri = 'https://db.isthisright.com/elegance/';
    var postLogoutRedirectUri = 'https://db.isthisright.com/elegance/';
    console.log(clientId);
}

// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: clientId,
    redirectUri: redirectUri, // Must be registered as a SPA redirectURI on your app registration
    postLogoutRedirectUri: postLogoutRedirectUri // Must be registered as a SPA redirectURI on your app registration
  },
  cache: {
    cacheLocation: 'localStorage'
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
