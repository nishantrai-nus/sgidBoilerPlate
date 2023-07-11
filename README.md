# SG ID Boiler Plate Code
A code repository which provides boiler plate for a 3 tier app using SG ID authentication. 

## Front End:
React (TS) frontend built using vite, tailwind, and daisyUI. 

Required env variables (.env file in ./client):
- VITE_SERVER_URL="your server url"
- VITE_AUTHORISE="set to true for deployment. set to false to bypass authorization during development"

## Server:
NodeJS (TS) server built using expressJS. Connects to a database using Prisma

Required env variables (.env file in ./server):
- DATABASE_URL="your database url"
- JWT_SECRET="a unique secret to sign and verify JWT tokens"
- LOGIN_REDIRECT_PATH="a url to direct clients after logging in using SG ID"
- AUTHORISE="set to true for deployment. set to false to bypass authorization during development"
- SGID_CLIENT_ID="retrieve from SGID Dev Portal"
- SGID_CLIENT_SECRET="retrieve from SGID Dev Portal"
- SGID_PRIVATE_KEY="retrieve from SGID Dev Portal"

## Database:
You will need to set up your own DB. Configure the server to communicate with your DB by amending ./server/prisma/schema.prisma. Add the database url to the server env files as shown above. 

Initially, the `AccountType` table requires two rows to be created. One with name `user` and one with `admin`.
Steps do so so:
1. In a terminal, connect to the database using psql and the database url:

```
psql postgresql://<username>:<password>@<hostname>:<port>/<database>
```
* replace the values enclosed in <> accordingly
2. Insert the required rows into the database using the following commands:

    ```
    INSERT INTO "AccountType" (name) VALUES ('user'), ('admin');
    ```

For every new user that logs in via SGID, a display name will have to be entered for them, and they must then be manually approved as such:
1. In a terminal, connect to the database using psql and the database url 
2. Set the `approved` column in the `UserModel` table to `t`for the desired user using the following command:
    ```
    UPDATE "UserModel" SET "approved" = 't' WHERE "displayName" = 'USER_TO_APPROVE';
    ```
    * replace `USER_TO_APPROVE` with the display name entered for the user
    * if the user is also to be an admin, also set their    `accountType` to `2` like so:
    ```
    UPDATE "UserModel" SET "accountType" = '2' WHERE "displayName" = 'USER_TO_APPROVE';
    ```
