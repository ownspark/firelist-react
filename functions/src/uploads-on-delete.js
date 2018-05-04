/* 
  CHALLENGE Cloud Functions
  - 
*/
module.exports = function UploadsOnDelete({ admin, environment }) {
  return event => {
    console.log('JSON.stringify(event)', JSON.stringify(event));
    return null;
  };
};

// const sampleEvent = {
//   bucket: 'firelist-react.appspot.com',
//   contentDisposition:
//     "inline; filename*=utf-8''chrisesplin-headshot-2-600x600.jpg",
//   contentType: 'image/jpeg',
//   crc32c: '/b1kgg==',
//   etag: 'CMbayYDA7NoCEAE=',
//   generation: '1525452125662534',
//   id:
//     'firelist-react.appspot.com/firelist-react/uploads/5ccM4M3aaS3IolEnAKWB/chrisesplin-headshot-2-600x600.jpg/1525452125662534',
//   kind: 'storage#object',
//   md5Hash: 'Duxor3rBckijJi7QA5Lazg==',
//   mediaLink:
//     'https://www.googleapis.com/download/storage/v1/b/firelist-react.appspot.com/o/firelist-react%2Fuploads%2F5ccM4M3aaS3IolEnAKWB%2Fchrisesplin-headshot-2-600x600.jpg?generation=1525452125662534&alt=media',
//   metadata: {
//     firebaseStorageDownloadTokens: '23ddc3a9-b883-40e1-8571-7559cef6d469',
//   },
//   metageneration: '1',
//   name:
//     'firelist-react/uploads/5ccM4M3aaS3IolEnAKWB/chrisesplin-headshot-2-600x600.jpg',
//   selfLink:
//     'https://www.googleapis.com/storage/v1/b/firelist-react.appspot.com/o/firelist-react%2Fuploads%2F5ccM4M3aaS3IolEnAKWB%2Fchrisesplin-headshot-2-600x600.jpg',
//   size: '260425',
//   storageClass: 'STANDARD',
//   timeCreated: '2018-05-04T16:42:05.599Z',
//   timeStorageClassUpdated: '2018-05-04T16:42:05.599Z',
//   updated: '2018-05-04T16:42:05.599Z',
// };
