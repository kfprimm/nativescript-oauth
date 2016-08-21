import * as application from 'application';
import * as tnsOAuthModule from 'nativescript-oauth';

var o365InitOptions : TnsOAuth.ITnsOAuthOptionsOffice365 = {
    clientId: 'd07edd43-95dd-4cd3-bcab-75cbbc1c7431', //client id for application (GUID)
    scope: ['Files.ReadWrite', 'User.ReadWrite', 'offline_access']
};

var facebookInitOptions : TnsOAuth.ITnsOAuthOptionsFacebook = {
    clientId: '1819818654921817',
    clientSecret: 'b7e58f212b51e4d639bed857171c992a',
    scope: ['email']
};

var googleInitOptions : TnsOAuth.ITnsOAuthOptionsGoogle = {
    clientId: '652709020800-odbalb3vboilqd6fj534s88b26bjcb21.apps.googleusercontent.com',
    scope: ['email']
};

// tnsOAuthModule.initOffice365(o365InitOptions);
// //tnsOAuthModule.initFacebook(facebookInitOptions);
tnsOAuthModule.initGoogle(googleInitOptions);

application.start({ moduleName: 'main-page' });
