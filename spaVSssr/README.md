### Section Overview 

* Client Side rendering: SPA(Single Page Applications)
  * Single HTML in which JS takes care of Routing, DOM manipulation etc
  * When you click on a link, instead of new HTML, parts of the HTML gets rerendered using JS
  * Bloated because of more JS
  * Slower SEO
* Server Side rendering:
  * Server serves a new HTML for every new Page
  * Browser rerender everything on the Page

### CSR vs SSR

![csr](../img/csr.png)

* CSR: **Minimum barebones HTML** and when JS is encountered, it requests it from server and then it gets Parsed
  * Times when it shows loading
  * But after it is loaded and executed, links to other Pages, doesn't have to request further resources
  * Only parts of the web page gets rerendered

![ssr](../img/ssr.png)

* SSR: Renders a lot faster on the initial request because the server responds with a **fully rendered Page**

### Server Side Rendering React

![ssr_server](../img/ssr_server.png)
* HTML to React syntax using React.createElement
* response.render: Render index with content

* In SSR, the HTML is fully rendered, so the Browser saves time on Mounting
* You need to send string or json over the wire from server to client
* In general, with any library, on the Server the client App needs to be rendered to String and finally on the client side, you need to attach only event listeners as the html is already parsed
* With React library,
  * On Server -> ReactDOM.renderToString() or ReactDOM.renderToNodeStream()
  * On Client -> ReactDOM.hydrate()

### CSR vs SSR Part 2

* CSR
  * Pros
    * Rich Interactions
    * Faster Response
    * Web Applications
  * Cons
    * Low SEO potential
      * Crawlers such as Google bot only see the div of App and thinks there is not much content
      * Doesn't see the AJAX request made
      * Crawlers wait only 10-15 seconds to take the snapshot of the Webpage
    * Longer initial load
* SST
  * Pros
    * Static Sites(Like React docs where the content is static(text based info) and the html changes at the top as new links are clicked)
    * SEO
    * Initial Page Load
  * Cons
    * Full Page Reloads
    * Slower Page rendering
      * Server needs to render the App on the server using synchronous CPU dom call(renderToString) which holds off the event loop, so any other request cannot be processed
    * Requests to server