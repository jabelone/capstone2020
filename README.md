# Digital Jukebox

## Getting Started
1) Install Google's Firebase cli tools with `npm install -g firebase-tools`.
2) From within the `functions/` folder you'll find a package.json, run `npm install` to install all the dependencies.
3) From within the `functions/` folder you can run `npm run deploy` to deploy the cloud functions.

This initial base version has an endpoint you can GET or POST to: `https://us-central1-digital-jukebox.cloudfunctions.net/webApi/api/v1/users`
To post data you need to use the `x-www-form-urlencoded` format in the body. I recommend that you download and use Postman. Here's a Postman "bulk edit" format of the data necessary for a post request:
```
firstName:Jaimyn
lastName:Mayer
email:hello@jaimyn.com.au
areaNumber:1234
department:12345
id:123456
contactNumber:123
```

After you've POSTed some data to that endpoint, you can do a GET request to retrieve a list of all the users. Have a look through the code and GCP (Google Cloud Platform) [firestore console](https://console.firebase.google.com/u/1/project/digital-jukebox/database/firestore/data~2Fusers~2F4GStJ9Hhtl2rHoHl1MeG).

### Live Demos
Dev branch: https://dev.digitaljukebox.xyz/
Master branch: https://app.digitaljukebox.xyz/
