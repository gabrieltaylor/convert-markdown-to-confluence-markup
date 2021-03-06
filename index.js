const core = require('@actions/core');
const markdown2confluence = require("markdown2confluence-cws");

async function run() {
  try {
    const markdown = core.getInput('markdown');

    core.debug(markdown)
    core.setOutput('confluence_markup', markdown2confluence(markdown));
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
