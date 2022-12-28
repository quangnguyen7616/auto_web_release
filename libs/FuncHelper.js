const get_button_aria_pressed = async function (element) {
    const result = await element.evaluate(x => Array.from(x.querySelectorAll('button')).map(y => y.getAttribute('aria-pressed')));
    return result;
}
const get_button_aria_label = async function (element) {
    const result = await element.evaluate(x => Array.from(x.querySelectorAll('button')).map(y => y.getAttribute('aria-label')));
    return result;
}


const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sleep = function (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

module.exports = {
    getRandomIntInclusive,
    get_button_aria_pressed,
    get_button_aria_label,
    sleep
}