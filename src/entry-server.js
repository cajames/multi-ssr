import { createApp as createApp1 } from './site1/app'
import { createApp as createApp2 } from './site2/app'

export default (context) => {
  console.log(context)
	// Return a new Promise here
	return new Promise((resolve, reject) => {

    const createApp = (context.hostname.indexOf('site1') >= 0 ? createApp1 : createApp2)

		const { app, router, store } = createApp(context)

		router.push(context.url)
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents()

			// no matched routes, send back 404
			if (!matchedComponents.length) {
				return reject({ code: 404 })
			}

			// call `asyncData()` on all matched route components
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // When we attach the state to the context, and the `template` option
        // is used for the renderer, the state will automatically be
        // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
        context.state = store.state

        resolve(app)
      }).catch(reject)

			resolve(app)
		})
	})
}