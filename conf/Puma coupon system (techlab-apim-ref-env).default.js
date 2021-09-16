module.exports = {
	// The configuration settings for the OAS3 flow-node: Puma coupon system
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'Puma coupon system (techlab-apim-ref-env)': {}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'Puma coupon system API Key': {
				type: 'apiKey',
				key: null
			}
		}
	}
};
