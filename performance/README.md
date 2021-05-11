### Introduction to Performance Part 1

* Client -> Server 
* GET request for that Server's domain
* The server responds with the HTML
* The Client application upon parsing the HTML sees CSS, Img and JS
* It makes separate requests for those resources again to the Server

### 3 Keys To Performance

* Client(Frontend)
  * Critical Render Path
  * Optimized code
  * Progressive Web App
* Transfer over the wire(Network request)
  * Network latency: Time it takes from the client to the server and back to the client
  * Minimize files
  * Minimize delivery
* Server(Backend)
  * CDNs
  * Caching 
  * Load Balancing
  * DB Scaling
  * Gzip