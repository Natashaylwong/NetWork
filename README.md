#### Setup

```bash
npm i -g react-native
brew install yarn
cd /path/to/project/folder
git clone https://github.com/bobby569/NetWork.git
cd NetWork
yarn install
```

Up and run. Make sure you have Xcode simulator.

```bash
# in one terminal
yarn start
# in the other
react-native run-ios
```

#### Links

- [NativeBase](https://nativebase.io/)
- [QR Code API](http://goqr.me/api/)

#### Usage flow

##### Init

1.  Send basic info to URL endpoint
2.  Generate QR code using username/id

##### Read

1.  Scan QR code
2.  Send GET request to the corresponding URL
3.  Parse the HTML and extract info from the response
4.  Render info

##### Want to have

1.  Bind with social media accounts
2.  Account info will be displayed if get scanned
