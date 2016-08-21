import * as tnsOauth from './tns-oauth';
import { AuthHelper } from './auth-helper';

export class AuthHelperGoogle extends AuthHelper implements TnsOAuth.ITnsAuthHelper {

  constructor(clientId: string, scope: Array<string>) {
    super();
    var scopeStr = scope.join('%20');
    this.credentials = {
      authority: '',
      authorizeEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenEndpoint: 'https://www.googleapis.com/oauth2/v4/token',
      clientId: clientId,
      redirectUri: 'urn:ietf:wg:oauth:2.0:oob:auto',
      scope: scopeStr
    };
  }

  public logout(successPage: string) {
    let cookieDomains = [".google.com"]; //need to double check this
    return this._logout(successPage, cookieDomains);
  }
}
