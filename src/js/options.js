/**
* Combines our default options with custom options
* @param INT threshold - how much in view do we want the image to be before we lazyload it
* @param INT throttle - the frequency of our throttle
* @param INT resizeDebounce - how often we check the resize
* @param Boolean loadOnScroll - load the images when they're in view or all at once
* @param Function callback - after the image has loaded
* @param String src - the base image
* @param String srcset - the responsive image sizes
* @param String sizes - at which breakpoint the image sizes show
* @param String alt - the attribute for the alt text
*/
export default {
    /**
     * Combines our default options with those set on init
     * @return {Object}
     */
    setOptions(options) {
        let defaults = {
            threshold: 0,
            throttle: 250,
            resizeDebounce: 500,
            loadOnScroll: true,
            callback: undefined,
            src: 'data-src',
            srcset: 'data-srcset',
            sizes: 'data-sizes',
            alt: 'alt'
        };

        return {
            ...defaults,
            ...options
        };
    }
};