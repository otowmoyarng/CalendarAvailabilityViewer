function doGet(): GoogleAppsScript.HTML.HtmlOutput {
    const htmlTemplate = HtmlService.createTemplateFromFile('src/index.html');
    htmlTemplate.style = include('src/style.css');
    htmlTemplate.script = include('src/script.js');
    return htmlTemplate.evaluate();
}

function include(filename:string): string {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}