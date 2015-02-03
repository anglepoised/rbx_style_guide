describe('The style guide', function () {

    describe('index page', function () {

        browser.get('/');

        it('should render an index page with the style guide', function () {
            expect(element.all(by.css('h1'))
                .first().getText()).toBe('rbx_style_guide');
        });
    });

});
