describe("Login Page", function() {
  var loginPageView, authService, loginPageLogic = null;

  beforeEach(function() {
  	loginPageView = jasmine.createSpyObj('loginPageView', ['addLoginHandler', 'showLoginSuccessful', 'showLoginError', 'showInvalidCredentialsError'])
  	
  	authService = jasmine.createSpyObj('authService', ['login']);

  	loginPageLogic = new LoginPageLogic(loginPageView, authService);
  	loginPageLogic.init();
  	expect(loginPageView.addLoginHandler).toHaveBeenCalled();
  });

  it("calls_auth_service_with_correct_callbacks", function() {
  	loginPageView.getUsername = jasmine.createSpy().andReturn("username")
  	loginPageView.getPassword = jasmine.createSpy().andReturn("password")

  	loginPageLogic.validateCredentials();
	
  	expect(authService.login).toHaveBeenCalledWith("username", "password", loginPageView.showLoginSuccessful, loginPageView.showLoginError);
  });

  it("shows_login_error_if_password_not_entered", function() {
  	loginPageView.getUsername = jasmine.createSpy().andReturn("username")
  	loginPageView.getPassword = jasmine.createSpy().andReturn("")

  	loginPageLogic.validateCredentials();

  	expect(loginPageView.showInvalidCredentialsError).toHaveBeenCalled;
  });
});