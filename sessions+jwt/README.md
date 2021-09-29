### Section Overview

* JWT: Json Web Tokens
* Users authenticate and receive token from the server to access whatever they have rights to and make changes
* Commits: https://github.com/aneagoie/smart-brain-boost/commits/master
* Front end: https://github1s.com/aneagoie/smart-brain-boost/blob/master/package.json
* Back end: https://github1s.com/aneagoie/smart-brain-boost-api
* Back end dockerized: https://github1s.com/aneagoie/smart-brain-boost-api-dockerized

### Cookies vs Tokens

![auth](../img/auth.png)
* **Cookie Based Auth is stateful**
  * Both the Browser and Server needs to have details about the Cookie
  * Once the User logs out, the session is destroyed both on the Server and Client side
* In JWT, instead of Cookie a Token is sent back
* The browser later makes requests with the token in Authorization Header field instead of Cookie
* The Server doesn't have to store the token, just running verify method is sufficient
* **Token Based Auth is stateless**
  * The Server doesn't have to keep record, just decoding and verifying the token
  * Same JWT token can be used over multiple APIs
  * JWT can contain useful info as well unlike Cookies which contain random strings
  * JWTs can be used with other platforms
  * Size of token can become *problematic*
* Resources:
  * https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide
  * https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens
  * https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies

### What We Are Building

* Client sends Username and Password to authenticate with the Server
* The Server validates the Username and Password and generates the JWT and also stores it in Redis
* Any further requests from the Client includes the JWT
* The Server will check for the Token within the Redis DB and then responds if it has the token in Redis

### JWT

* Don't share sensitive info in JWT as it can be decoded
* https://jwt.io/

### Profile Icon

* reactstrap(For Components) and bootstrap(For Styling) library
* Adding Profile Modal commit: https://github.com/aneagoie/smart-brain-boost/commit/6b07d65b7a173d33d028eeb42a98ae256bbe74d5
* https://github1s.com/aneagoie/smart-brain-boost/blob/master/package.json
* Import bootstrap css in index.js and place it before tachyons and index.css so that tachyons and index.css override Bootstrap classes

### Profile Dropdown

* https://github1s.com/aneagoie/smart-brain-boost/blob/master/src/components/Profile/ProfileIcon.js
* https://reactstrap.github.io/components/dropdowns/
* Callback function in setState to have proper predictability of setState
```js
toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
```
* Custom Dropdown in Reactstrap
* https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
* https://betterprogramming.pub/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c

### Profile Styling

* 