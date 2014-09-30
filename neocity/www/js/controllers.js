angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ActualitesCtrl', function($scope) {
  $scope.actualites = [
    { title: 'Lancement de la nouvelle', id: 1 },
    { title: 'Lancement de la nouvelle application de la ville de', id: 2 },
    { title: 'Lancement de la nouvelle application de la ville de Paris et cest cool.', id: 3 },
    { title: 'Lancement de la nouvelle', id: 4 },
    { title: 'Lancement de la nouvelle application de la ville de', id: 5 },
    { title: 'Lancement de la nouvelle application de la ville de', id: 6 }
  ];
})

.controller('ActualiteCtrl', function($scope, $stateParams) {
})

.controller('NumberUrgenceCtrl', function($scope) {
  $scope.numberUrgences = [
    { title: 'Pompiers 18', id: 1 },
    { title: 'Police 17', id: 2 },
    { title: 'Urgences 01.39.55.00.55', id: 3 },
    { title: 'Urgences Enfants 01.00.66.46.90', id: 4 }
  ];
})

.controller('UrgencesCtrl', function($scope) {
  $scope.urgences = [
    { title: 'Pharmacies de garde', id: 1},
    { title: 'Numéros d’urgence', id: 2, href:'#/app/numberUrgence'},
    { title: 'Défibrillateurs', id: 3 },
    { title: 'Gestes de premiers secours', id: 4 },
  ];
})



.controller('MairiesCtrl', function($scope) {
  $scope.mairies = [
    { title: 'Info mairie', id: 1 , href:'#/app/mairie'},
    { title: 'Services municipaux', id: 2, href:'#/app/serviceSections'},
    { title: 'Elus', id: 3 },
    { title: 'Histoire de la commune', id: 4 },
    { title: 'Publication', id: 5 },
    { title: 'Réseaux sociaux', id: 5 },
    { title: 'Contact', id: 6 },
  ];
})

.controller('PratiquesCtrl', function($scope) {
  $scope.pratiques = [
    { title: 'Transport', id: 1 },
    { title: 'Services municipaux', id: 2 },
    { title: 'Déchets', id: 3 },
    { title: 'Menu des cantines', id: 4 },
    { title: 'Travaux', id: 5 },
  ];
})

.controller('AnnuairesCtrl', function($scope) {
  $scope.annuaires = [
    { title: 'Commerce', id: 1, href:'#/app/commerceSections'},
    { title: 'Association', id: 2, href:'#/app/associationSections'},
    { title: 'Infrastructures', id: 3, href:'#/app/infrastructureSections'},
  ];
})

.controller('CommerceSectionsCtrl', function($scope) {
  $scope.commerceSections = [
    { title: 'Commerce', id: 1, href:'#/app/annuaire'},
    { title: 'Commerce', id: 2, href:'#/app/annuaire'},
  ];
})

.controller('AssociationSectionsCtrl', function($scope) {
  $scope.associationSections = [
    { title: 'Association', id: 1, href:'#/app/annuaire'},
    { title: 'Association', id: 2, href:'#/app/annuaire'},
  ];
})

.controller('ServiceSectionsCtrl', function($scope) {
  $scope.serviceSections = [
    { title: 'Services municipaux', id: 1, href:'#/app/annuaire'},
    { title: 'Services municipaux', id: 2, href:'#/app/annuaire'},
  ];
})

.controller('ElusCtrl', function($scope) {
  $scope.serviceSections = [
    { title: 'Services municipaux', id: 1, href:'#/app/annuaire'},
    { title: 'Services municipaux', id: 2, href:'#/app/annuaire'},
  ];
})

.controller('InfrastructureSectionsCtrl', function($scope) {
  $scope.infrastructureSections = [
    { title: 'Infrastructures', id: 1, href:'#/app/annuaire'},
    { title: 'Infrastructures', id: 2, href:'#/app/annuaire'},
  ];
});




