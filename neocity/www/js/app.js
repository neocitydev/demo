// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.actualites', {
      url: "/actualites",
      views: {
        'menuContent' :{
          templateUrl: "templates/actualite/actualites.html",
          controller: 'ActualitesCtrl'
        }
      }
    })

    .state('app.elus', {
      url: "/elus",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/elus.html",
          controller: 'ElusCtrl'
        }
      }
    })

    .state('app.history', {
      url: "/history",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/history.html",
          controller: 'HistoryCtrl'
        }
      }
    })

    .state('app.socialNetworks', {
      url: "/socialNetworks",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/socialNetworks.html",
          controller: 'SocialNetworksCtrl'
        }
      }
    })

    .state('app.publications', {
      url: "/publicationSection",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/publicationSection.html",
          controller: 'PublicationSectionsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/actualites/:actualiteId",
      views: {
        'menuContent' :{
          templateUrl: "templates/actualite/actualite.html",
          controller: 'ActualiteCtrl'
        }
      }
    })

    .state('app.urgences', {
      url: "/urgences",
      views: {
        'menuContent' :{
          templateUrl: "templates/urgences/urgences.html",
          controller: 'UrgencesCtrl'
        }
      }
    })

    .state('app.numberUrgence', {
      url: "/numberUrgence",
      views: {
        'menuContent' :{
          templateUrl: "templates/urgences/numberUrgence.html",
          controller: 'NumberUrgenceCtrl'
        }
      }
    })

    .state('app.pharmacies', {
      url: "/pharmacies",
      views: {
        'menuContent' :{
          templateUrl: "templates/urgences/pharmacies.html",
          controller: 'PharmaciesCtrl'
        }
      }
    })

    .state('app.singleUrg', {
      url: "/urgences/:urgenceId",
      views: {
        'menuContent' :{
          templateUrl: "templates/urgences/urgence.html",
          controller: 'UrgenceCtrl'
        }
      }
    })

    .state('app.mairies', {
      url: "/mairies",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/mairies.html",
          controller: 'MairiesCtrl'
        }
      }
    })

    .state('app.mairie', {
      url: "/mairie",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/mairie.html",
          controller: 'MairieCtrl'
        }
      }
    })

    .state('app.serviceSections', {
      url: "/serviceSections",
      views: {
        'menuContent' :{
          templateUrl: "templates/mairie/serviceSection.html",
          controller: 'ServiceSectionsCtrl'
        }
      }
    })

    .state('app.pratiques', {
      url: "/pratiques",
      views: {
        'menuContent' :{
          templateUrl: "templates/viePratique/pratiques.html",
          controller: 'PratiquesCtrl'
        }
      }
    })

    .state('app.singlePratique', {
      url: "/pratiques/:pratiqueId",
      views: {
        'menuContent' :{
          templateUrl: "templates/viePratique/pratique.html",
          controller: 'PratiqueCtrl'
        }
      }
    })

    .state('app.annuaires', {
      url: "/annuaires",
      views: {
        'menuContent' :{
          templateUrl: "templates/annuaire/annuaires.html",
          controller: 'AnnuairesCtrl'
        }
      }
    })

    .state('app.commerceSections', {
      url: "/commerceSections",
      views: {
        'menuContent' :{
          templateUrl: "templates/annuaire/commerceSection.html",
          controller: 'CommerceSectionsCtrl'
        }
      }
    })

    .state('app.associationSections', {
      url: "/associationSections",
      views: {
        'menuContent' :{
          templateUrl: "templates/annuaire/associationSection.html",
          controller: 'AssociationSectionsCtrl'
        }
      }
    })

    .state('app.infrastructureSections', {
      url: "/infrastructureSections",
      views: {
        'menuContent' :{
          templateUrl: "templates/annuaire/infrastructureSection.html",
          controller: 'InfrastructureSectionsCtrl'
        }
      }
    })


    .state('app.singleAnnuaire', {
      url: "/annuaire",
      views: {
        'menuContent' :{
          templateUrl: "templates/annuaire/annuaire.html",
          controller: 'AnnuaireCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/actualites');
});

