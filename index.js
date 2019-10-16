'use strict';
const WDIOReporter = require('@wdio/reporter').default,
	{ logIssue, IssueType } = require('azure-pipelines-task-lib');

class AzureVSOReporter extends WDIOReporter {
	onTestFail(test) {
		logIssue(IssueType.Error, `Test "[${test.cid}] ${test.fullTitle}" failed.\n` + test.error.message);
	}
};

module.exports.default = AzureVSOReporter
module.exports.reporterName = 'vso';