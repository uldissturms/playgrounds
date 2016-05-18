describe('app', function() {
    
    beforeEach(module('bootstrap'));
    
    describe('search controller', function() {
        
        var query = 'test';
        var scope;
        var searchController;
        var httpBackend;
        
        beforeEach(inject(function($controller, $rootScope, $httpBackend) {
            scope = $rootScope.$new();
            searchController = $controller('SearchCtrl', {$scope: scope});
            httpBackend = $httpBackend;
            scope.query = query; 
        }));

        it('should be defined', function() {
           expect(searchController).toBeDefined();
        });

        it('should set search results', function() {
            scope.error = 'bogus';
            httpBackend.expect('GET', '/search?q=' + query)
                .respond(200, '{ "results": [{"id":1},{"id":2}] }');
            scope.search();
            httpBackend.flush();
            expect(scope.results).toEqual([{'id':1},{'id':2}]);
            expect(scope.error).toEqual('');
        });

        it('should set error message when http request fails', function(){
            httpBackend.expect('GET', '/search?q=' + query)
                .respond(500);
            scope.search();
            httpBackend.flush();
            expect(scope.results).toEqual([]);
            expect(scope.error).toEqual('Oups! Error has occured...');
        });
    });
});
