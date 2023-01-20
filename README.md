
# react-native-jwt2

## Getting started

`$ npm install react-native-jwt2 --save`
or
`$ yarn add react-native-jwt2 --save`

## Usage
```javascript
import {decodeToken, isExpired} from 'react-native-jwt2';

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.AcYwv-HS6Xo11mDHtOZLjdTGci2wJ146IKiHj0JEH1k';

  const decodedToken = decodeToken(token);
  console.log('decoded:', decodedToken);
  console.log('expired?', isExpired(token));



```
  