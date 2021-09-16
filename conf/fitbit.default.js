module.exports = {
	// The configuration settings for the OAS3 flow-node: Fitbit
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'fitbit': {}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'Fitbit API Key': {
				type: 'apiKey',
				key: null
			}
		}
	}
};
