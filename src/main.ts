function doGet(): GoogleAppsScript.HTML.HtmlOutput {
    const htmlTemplate = HtmlService.createTemplateFromFile('src/index.html');
    return htmlTemplate.evaluate();
}