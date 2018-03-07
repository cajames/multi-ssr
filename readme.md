# Multi-Domain SSR POC

This is a proof-of-concept project to show how to render two different domains with one Vue SSR node instance.

Depending on the origin of the request (hostname) the SSR node will return a different Vue App.

In the same way based on the configuration passed down, the client should only download the relevant webpack chunk for it's respective website.

Upgrades:

- [ ] Right now any new templates need the whole project to be built, bundled and then redeployed out to be made active. Would be cool to find a way to not have to re-deploy for new templates
