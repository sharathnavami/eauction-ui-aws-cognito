import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-west-2_33fEwx0b3',
  ClientId: '2ef0ausgm7rh1csr16n8ssebr',
};

export default new CognitoUserPool(poolData);
