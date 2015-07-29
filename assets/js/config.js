var app = angular.module('app')
    .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', "$httpProvider","$tooltipProvider",
        function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide, $httpProvider, $tooltipProvider ) {
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
            app.constant   = $provide.constant;
            app.value      = $provide.value;
            $httpProvider.interceptors.push('TokenInterceptor');
            console.log($tooltipProvider);
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('es');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);