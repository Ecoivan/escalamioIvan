/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * escalamio: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Angular.js 1.x & zylkanexy
 * escalamio is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/escalamio
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

//var appName = 'AjaxStockNg';



var escalamio = angular.module('myApp', [
    'ngRoute',
    'Filters',
    'Services',
    'Directives',
    'systemControllers',
    'productoControllers',
    'facturaControllers',
    'compraControllers',
    'usuarioControllers',
    'tipousuarioControllers',
    'ui.bootstrap',
    'ngSanitize'
]);



//escalamio.config(['$locationProvider', function ($locationProvider) {
//        $locationProvider.html5Mode(true);
//    }]);

escalamio.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

escalamio.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/login.html', controller: 'LoginController'});
        $routeProvider.when('/logout', {templateUrl: 'js/system/logout.html', controller: 'LogoutController'});
        $routeProvider.when('/home', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        $routeProvider.when('/license', {templateUrl: 'js/system/license.html', controller: 'LicenseController'});
        //------------
        $routeProvider.when('/producto/view/:id', {templateUrl: 'js/producto/view.html', controller: 'ProductoViewController'});
        $routeProvider.when('/producto/new', {templateUrl: 'js/producto/newedit.html', controller: 'ProductoNewController'});
        $routeProvider.when('/producto/edit/:id', {templateUrl: 'js/producto/newedit.html', controller: 'ProductoEditController'});
        $routeProvider.when('/producto/remove/:id', {templateUrl: 'js/producto/remove.html', controller: 'ProductoRemoveController'});
        $routeProvider.when('/producto/plist/:page?/:rpp?', {templateUrl: 'js/producto/plist.html', controller: 'ProductoPListController'});
        $routeProvider.when('/producto/selection/:page?/:rpp?', {templateUrl: 'js/producto/selection.html', controller: 'ProductoSelectionController'});
        //------------
        $routeProvider.when('/factura/view/:id', {templateUrl: 'js/factura/view.html', controller: 'FacturaViewController'});
        $routeProvider.when('/factura/new', {templateUrl: 'js/factura/newedit.html', controller: 'FacturaNewController'});
        $routeProvider.when('/factura/edit/:id', {templateUrl: 'js/factura/newedit.html', controller: 'FacturaEditController'});
        $routeProvider.when('/factura/remove/:id', {templateUrl: 'js/factura/remove.html', controller: 'FacturaRemoveController'});
        $routeProvider.when('/factura/plist/:page?/:rpp?', {templateUrl: 'js/factura/plist.html', controller: 'FacturaPListController'});
        $routeProvider.when('/factura/selection/:page?/:rpp?', {templateUrl: 'js/factura/selection.html', controller: 'FacturaSelectionController'});
        //------------
        $routeProvider.when('/compra/view/:id', {templateUrl: 'js/compra/view.html', controller: 'CompraViewController'});
        $routeProvider.when('/compra/new', {templateUrl: 'js/compra/newedit.html', controller: 'CompraNewController'});
        $routeProvider.when('/compra/edit/:id', {templateUrl: 'js/compra/newedit.html', controller: 'CompraEditController'});
        $routeProvider.when('/compra/remove/:id', {templateUrl: 'js/compra/remove.html', controller: 'CompraRemoveController'});
        $routeProvider.when('/compra/plist/:page?/:rpp?', {templateUrl: 'js/compra/plist.html', controller: 'CompraPListController'});
        //------------
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/usuario/view.html', controller: 'UsuarioViewController'});
        $routeProvider.when('/usuario/new/:id?', {templateUrl: 'js/usuario/newedit.html', controller: 'UsuarioNewController'});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/usuario/newedit.html', controller: 'UsuarioEditController'});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/usuario/remove.html', controller: 'UsuarioRemoveController'});
        $routeProvider.when('/usuario/plist/:page?/:rpp?', {templateUrl: 'js/usuario/plist.html', controller: 'UsuarioPListController'});
        $routeProvider.when('/usuario/selection/:page?/:rpp?', {templateUrl: 'js/usuario/selection.html', controller: 'UsuarioSelectionController'});
        
        //------------
        $routeProvider.when('/tipousuario/view/:id', {templateUrl: 'js/tipousuario/view.html', controller: 'TipousuarioViewController'});
        $routeProvider.when('/tipousuario/new/:id?', {templateUrl: 'js/tipousuario/newedit.html', controller: 'TipousuarioNewController'});
        $routeProvider.when('/tipousuario/edit/:id', {templateUrl: 'js/tipousuario/newedit.html', controller: 'TipousuarioEditController'});
        $routeProvider.when('/tipousuario/remove/:id', {templateUrl: 'js/tipousuario/remove.html', controller: 'TipousuarioRemoveController'});
        $routeProvider.when('/tipousuario/plist/:page?/:rpp?', {templateUrl: 'js/tipousuario/plist.html', controller: 'TipousuarioPListController'});
        $routeProvider.when('/tipousuario/selection/:page?/:rpp?', {templateUrl: 'js/tipousuario/selection.html', controller: 'TipousuarioSelectionController'});
      
        //------------
        $routeProvider.otherwise({redirectTo: '/'});


    }]);


escalamio.run(function ($rootScope, $location, serverService, sessionService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
     sessionService.setSessionInactive();
        sessionService.setUsername('');
        serverService.getSessionPromise().then(function (response) {
            if (response['status'] == 200) {
                sessionService.setSessionActive();
                sessionService.setUsername(response.data.message);
            } else {
                sessionService.setSessionInactive();
                sessionService.setUsername('');
                var nextUrl = next.$$route.originalPath;
                if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {

                } else {
                    $location.path("/login");
                }
            }            
        }).catch(function (data) {
            sessionService.setSessionInactive();
            sessionService.setUsername('');
             var nextUrl = next.$$route.originalPath;
             if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {

             } else {
                 $location.path("/login");
             }
        });
    });
});

var moduloSistema = angular.module('systemControllers', []);
var moduloUsuario = angular.module('usuarioControllers', []);
var moduloProducto = angular.module('productoControllers', []);
var moduloFactura = angular.module('facturaControllers', []);
var moduloCompra = angular.module('compraControllers', []);
var moduloTipousuario = angular.module('tipousuarioControllers', []);

var moduloDirectivas = angular.module('Directives', []);
