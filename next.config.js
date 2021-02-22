module.exports = {
    webpack: function (config) {
        // Unshift polyfills in main entrypoint.
        const originalEntry = config.entry
        config.entry = async () => {
            const entries = await originalEntry()
            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./client/polyfills.js')
            ) {
                entries['main.js'].unshift('./client/polyfills.js')
            }
            return entries
        }

        return config
    },
}
