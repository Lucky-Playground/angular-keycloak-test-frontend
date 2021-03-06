import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180/auth',
        realm: 'demo1',
        clientId: 'angular-keycloak',
      },                                      // use for SSO
      initOptions: {
        /*onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',*/
        checkLoginIframe: true,
        // checkLoginIframeInterval: 25
      },
      loadUserProfileAtStartUp: true
    });
}
