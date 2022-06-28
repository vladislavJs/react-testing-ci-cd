

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelloPage extends Page {


    get toggleBtn () {
        return $('#toggle');
    }

    get input() {
        return $('#input')
    }

    get header() {
        return $('#header')
    }


    async toggleTitleWithInput (text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
