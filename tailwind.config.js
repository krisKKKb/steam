module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'blue-steam': 'rgba(62, 126, 167, 0.8)',
            }
            backgroundImage: theme => ({
                'steam-bg': "url('/public/images/v6/colored_body_top2.png?v=2')",
            })
        },
    },
    variants: {},
    plugins: [],
}
