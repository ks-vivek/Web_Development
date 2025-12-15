CORS (Cross-Origin Resource Sharing)
What is CORS?

CORS stands for Cross-Origin Resource Sharing.
It is a security mechanism used by web browsers to control how resources on one origin can be requested from another origin.

An origin is defined by:

Protocol (http / https)

Domain (example.com)

Port (3000, 8080)


How CORS Works

The browser sends a request with an Origin header.

The server responds with CORS headers.

If the headers allow the request, the browser permits it.

Otherwise, the browser blocks the response.