describe('HomeController::Test', function() {

    var scope = {};

    beforeEach(function(){
        module('app.home')
    });

    beforeEach(inject(function ($controller) {
        $controller('HomeController', {$scope: scope});
    }));

    it('should ....', function () {
        expect('HomeController').toBeDefined();
    });

});