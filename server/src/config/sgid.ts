import { SgidClient, SgidClientParams } from "@opengovsg/sgid-client";

const clientUrl = process.env.CLIENT_URL as string;
const redirectUri = process.env.LOGIN_REDIRECT_PATH as string;

const clientConfig: SgidClientParams = {
  clientId: process.env.SGID_CLIENT_ID as string,
  clientSecret: process.env.SGID_CLIENT_SECRET as string,
  privateKey: process.env.SGID_PRIVATE_KEY as string,
  redirectUri: redirectUri,
};

const client = new SgidClient(clientConfig);

export default client;
