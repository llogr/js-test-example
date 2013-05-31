describe("Browser Display", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'spec';
  	loadFixtures('browserTestFixture.html');
  });

  it("test_show_error_displays_error_correctly", function() {
  	browser.Animations.showError("#message", "error message");
    expect($("#message").text()).toEqual("error message");
    expect($("#message").hasClass("error")).toBe(true);
  });
});