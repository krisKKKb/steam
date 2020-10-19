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
            },
            backgroundImage: theme => ({
                'body-bg': "url('assets/colored_body_top2.png')",
            }),
        },
    },
    variants: {},
    plugins: [],
}
