var mainApp = angular.module("mainApp", [])

mainApp.controller('mainController', function ($scope) {

    //// object where form data is stored
    $scope.formData = {}
    $scope.submittedForm = {}
    $scope.pendingForm = {}
    $scope.show = false

    $scope.insert = () => {
        ///sets the form clean /// allows for validations to be reset
        $scope.pendingForm.$setPristine()

        ///copies data from submitted form to another variable
        $scope.submittedForm = angular.copy($scope.formData)
        ///removes the information typed  on the form // sets the form clear
        $scope.formData = {}
        $scope.show = true

    }

    //// resets form, form validations, and form data already submitted
    $scope.reset = () => {
        $scope.pendingForm.$setPristine()
        $scope.formData = {}
        $scope.submittedForm = {}
        $scope.show = false
    }
    //// takes in the value from the drop down menu and adds it to formData Obj.
    $scope.selectGrade = (value) => {
        $scope.formData.gradeLevel = value

    }
    ///data for grade drop down menu
    $scope.gradeObject = {
        '2nd Grade': 2,
        '3rd Grade': 3,
        '4th Grade': 4,
        '5th Grade': 5
    }
})