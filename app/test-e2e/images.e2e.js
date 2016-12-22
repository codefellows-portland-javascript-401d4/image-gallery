describe('image gallery', () => {
   
  it('should land on welcome page', () => {
    const welcome = browser.findElement(by.css('.welcome'));
    expect(welcome.getText()).toBe('Welcome to this sweet image gallery app!');
  });

});