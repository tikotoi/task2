describe("Test suite 1", () => {
  beforeEach(async () => {
    await browser.url("https://pastebin.com/");
  });

  it("check page title", async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
  });

  it("Create new paste", async () => {
    await $("#postform-text").setValue("Hello from WebDriver");

    // const dropDown = await $('#postform-expiration');
    // dropDown.selectByAttribute('value', '10M');
    // const selected = await dropDown.getValue();
    // expect(selected ).toEqual('10M');

    await $("#select2-postform-expiration-container").click();
    await $("//li[text()='10 Minutes']").click();
    await $("#postform-name").setValue("helloweb");
    await $(".btn.-big").waitForClickable();
    await $(".btn.-big").click();
    await $(".post-view.js-post-view").waitForDisplayed();

    const pasteName = await $(".info-top").getText();
    expect(pasteName).toEqual("helloweb");
    const newPaste = await $(".de1").getText();
    expect(newPaste).toEqual("Hello from WebDriver");
    const expire = await $(".expire").getText();
    expect(expire).toEqual("10 MIN");
  });
});
