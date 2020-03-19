# better-botz-gui-at-glitch

A sample Glitch website built with Node.js using Express and DataStax Apollo.

To start the app:

First add a `.data` directory and then copy your security bundle file to the path. An example of it being setup is shown in the app.js file in the following code snippet.

``` javascript
const path = './.data/secure-connect.zip';
```

Next, run `npm install` in the root directory of the project to retrieve all fo the project dependencies.

Now run the server as shown:

``` bash
ASTRAUSER=databaseUsername ASTRAPASSWORD=databasePassword bash -c 'node bin/www'
```

Once running, check out the following paths for examples of data retrieval:

https://better-botz-glitchy-fluffy-barnacle.glitch.me/datareport >> this is a response via generated jade template w/ the data results.
https://better-botz-glitchy-fluffy-barnacle.glitch.me/data >> this is a direct data response of just the JSON response via API get call.
https://better-botz-glitchy-fluffy-barnacle.glitch.me/ >> verifies express.js is running with Jade templates!