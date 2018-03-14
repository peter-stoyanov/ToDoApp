// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_url: '',
  firebase: {
    apiKey: "AIzaSyCrcsIjh-pKEvHMO5WGeprm-itP2Zz--M4",
    authDomain: "todoapp-dc150.firebaseapp.com",
    databaseURL: "https://todoapp-dc150.firebaseio.com",
    projectId: "todoapp-dc150",
    storageBucket: "todoapp-dc150.appspot.com",
    messagingSenderId: "1088002290502"
  }
};
