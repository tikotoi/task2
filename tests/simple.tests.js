describe("Test suite 1", () => {

  beforeEach(async () => {
    await browser.url("https://pastebin.com/");
  });

  it("check page title", async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
  });

  it("Create new paste", async () => {

    await $("#postform-text").setValue(
      "git config --global user.name 'New Sheriff in Town'\ngit reset $(git commit-tree HEAD^{tree} -m 'Legacy code')\ngit push origin master --force"
    );
    await $("#select2-postform-format-container").click();
    await $("//li[text()='Bash']").click();
    await $("#select2-postform-expiration-container").click();
    await $("//li[text()='10 Minutes']").click();
    await $("#postform-name").setValue(
      "how to gain dominance among developers"
    );
    await $(".btn.-big").click();
    await $(".post-view.js-post-view").waitForDisplayed();

    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual(
      "how to gain dominance among developers - Pastebin.com"
    );
    const newPaste = await $$(".de1")[1].getText();
    expect(newPaste).toEqual(
      "git reset $(git commit-tree HEAD^{tree} -m 'Legacy code')"
    );
    const syntax = await $("a.btn.-small.h_800").getText();
    expect(syntax).toEqual("Bash");
  });
});
