const { environment } = require('@rails/webpacker')
const aliasesConfig = require('./aliases')
environment.config.merge(aliasesConfig)
module.exports = environment
