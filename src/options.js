(function() {
	restore_options();
	document.getElementById('save').addEventListener('click', save_options);

	// Saves options to chrome.storage
	function save_options() {
		var status = document.getElementById('status');
		var options = {
			replaceWysiwyg: document.getElementById('replaceWysiwyg').checked,
			fontSizeWysiwyg: +document.getElementById('fontSizeWysiwyg').value,
			minHeightWysiwyg: +document.getElementById('minHeightWysiwyg').value,
			maxHeightWysiwyg: +document.getElementById('maxHeightWysiwyg').value,
			expand: document.getElementById('expand').checked,
			myWorkEnhancement: document.getElementById('myWorkEnhancement').checked,
			showPullRequestInfo: document.getElementById('showPullRequestInfo').checked
		};

		chrome.storage.sync.set({ options: options });

		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	}

	// Restores select box and checkbox state using the preferences
	// stored in chrome.storage.
	function restore_options() {
		chrome.storage.sync.get('options', function(data) {
			document.getElementById('replaceWysiwyg').checked = data.options.replaceWysiwyg;
			document.getElementById('fontSizeWysiwyg').value = data.options.fontSizeWysiwyg;
			document.getElementById('minHeightWysiwyg').value = data.options.minHeightWysiwyg;
			document.getElementById('maxHeightWysiwyg').value = data.options.maxHeightWysiwyg;
			document.getElementById('expand').checked = data.options.expand;
			document.getElementById('myWorkEnhancement').checked = data.options.myWorkEnhancement;
			document.getElementById('showPullRequestInfo').checked = data.options.showPullRequestInfo;
		});
	}
}());
