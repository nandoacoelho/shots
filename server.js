var vision = require('google-vision-api-client');
var requtil = vision.requtil;

//Prepare your service account from trust preview certificated project
var jsonfile = './huge-shots.json';

//Initialize the api
vision.init(jsonfile);

//Build the request payloads
var d = requtil.createRequests().addRequest(
    requtil.createRequest('./credito.png')
        .withFeature('FACE_DETECTION', 30)
        .withFeature('LABEL_DETECTION', 30)
        .withFeature('TEXT_DETECTION', 30)
        .withFeature('LANDMARK_DETECTION', 30)
        .withFeature('SAFE_SEARCH_DETECTION', 30)
        .withFeature('LOGO_DETECTION', 30)
        .withFeature('IMAGE_PROPERTIES', 30)
        .build());

//Do query to the api server
vision.query(d, function(e, r, d){
    if(e) console.log('ERROR:', e);
    console.log(JSON.stringify(d));
});

