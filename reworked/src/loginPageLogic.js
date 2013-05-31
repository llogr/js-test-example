function LoginPageLogic(view, authenticationService) {
    this.init = function() {
        view.addLoginHandler(this.validateCredentials)
    };
	
    function credentialsAreValid(username, password) {
        return (username && username !== "") && (password && password !== "");
    }

    this.validateCredentials = function() {
        var username = view.getUsername();
        var password = view.getPassword();

        if (credentialsAreValid(username, password)) {
            authenticationService.login(username, password, view.showLoginSuccessful, view.showLoginError);
        } else {
            view.showInvalidCredentialsError();
        }
    }
}

$(document).ready(function() {
    var serviceUrl = "/login";
    var authService = new AuthenticationService(serviceUrl);
    var loginPageView = new LoginPageView();
    var loginPageLogic = new LoginPageLogic(loginPageView, authService);
    loginPageLogic.init();
});