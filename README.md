#Blue Connect MA LANDING

##How to Install, Serve, Test, &amp; Build

###Setup your environment

Fork and clone the repository. From the terminal change directories into the root of the repository and run...

```
$ npm install
```

###Serve the app locally

To serve the application locally from the "./src" directory simply...

```
$ npm start
```

Then navigate to ```index.dev.htm```

###Testing

Run the unit tests...

```
$ npm test
```

###Build the app

To compile/build the app into the "./dist" directory... 

####Build for Pstage

```
$ npm run build-ps
```

####Build for Production

```
$ npm run build
```

From there you'll have to manually move the files into the working environment.


###Install the app

And finally, to install the application simply place all the files under

- dist/*

Into this directory/location under the ```www[ps].bcbsnc.com```...

####PStage Environment:

[http://wwwps.bcbsnc.com/assets/members/secure/apps/malanding](http://wwwps.bcbsnc.com/assets/members/secure/apps/malanding)

```
http://wwwps.bcbsnc.com/assets/members/secure/apps/malanding
```

####Production:

[http://www.bcbsnc.com/assets/members/secure/apps/malanding](http://www.bcbsnc.com/assets/members/secure/apps/malanding)

```
http://www.bcbsnc.com/assets/members/secure/apps/malanding
```