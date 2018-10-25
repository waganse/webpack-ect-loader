const ECT = require( 'ect' )
const pretty = require('pretty')

function setOptions ( query ) {
    return Object.assign(
        {
            root: this.context,
            ext: '.ect',
            open: '<%',
            close: '%>',
            watch: false,
            cache: false,
            gzip: false
        },
        query
    )
}

module.exports = function () {
    this.cacheable()

    const options = setOptions( this.query )
    const ect = ECT( options )

    return pretty(ect.render(this.resourcePath))
}
