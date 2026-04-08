(function () {
	const mascot = document.querySelector(".home-top-mascot");
	const bubble = document.querySelector("#mascot-bubble");

	if (!mascot || !bubble) {
		return;
	}

	const quotes = [
		"あんたバカぁ？",
		"あたしは負けない！",
		"エヴァに乗れなきゃ、あたしには価値がないのよ！",
		"あたしを見て！",
		"あんたなんかに負けるもんですか！",
		"これが実力の差よ！",
		"気持ち悪い。",
		"あたしはあたしよ！",
	];

	const MAX_BUBBLE_WIDTH = 18;
	const TYPE_DELAY_MS = 70;
	const PADDING_CHAR = " ";
	let lastIndex = -1;
	let typingTimer = null;

	function charWidth(char) {
		const code = char.codePointAt(0);

		if (code <= 0x7f || (code >= 0xff61 && code <= 0xff9f)) {
			return 1;
		}

		return 2;
	}

	function displayWidth(text) {
		return Array.from(text).reduce((width, char) => width + charWidth(char), 0);
	}

	function wrapQuote(text, maxWidth) {
		const lines = [];
		let current = "";
		let currentWidth = 0;

		for (const char of Array.from(text)) {
			const width = charWidth(char);

			if (current && currentWidth + width > maxWidth) {
				lines.push(current);
				current = char;
				currentWidth = width;
				continue;
			}

			current += char;
			currentWidth += width;
		}

		if (current || lines.length === 0) {
			lines.push(current);
		}

		return lines;
	}

	function padLine(line, width) {
		return line + PADDING_CHAR.repeat(Math.max(0, width - displayWidth(line)));
	}

	function escapeHtml(text) {
		return text
			.replaceAll("&", "&amp;")
			.replaceAll("<", "&lt;")
			.replaceAll(">", "&gt;");
	}

	function renderBubble(fullQuote, visibleCharacters) {
		const wrappedFull = wrapQuote(fullQuote, MAX_BUBBLE_WIDTH);
		const innerWidth = Math.max(...wrappedFull.map(displayWidth), 8);
		const textCellWidth = innerWidth / 2 + "em";
		const top =
			'<div class="bubble-line"> .' +
			"-".repeat(innerWidth) +
			".</div>";
		const bottom =
			'<div class="bubble-line"> \'' +
			"-".repeat(innerWidth) +
			"'</div>";
		let remainingVisible = visibleCharacters;
			const rows = wrappedFull.map((_, index) => {
				const leftEdge = index === 0 ? "&lt;|" : " |";
			const fullLine = wrappedFull[index];
			const lineChars = Array.from(fullLine);
			const visibleOnLine = Math.min(remainingVisible, lineChars.length);
			const typedLine = lineChars.slice(0, visibleOnLine).join("");
			const pendingLine = lineChars.slice(visibleOnLine).join("");

			remainingVisible -= visibleOnLine;

				return (
					'<div class="bubble-row">' +
					'<span class="bubble-left-edge">' +
					leftEdge +
					"</span>" +
					'<span class="bubble-text" style="width:' +
					textCellWidth +
					'">' +
					escapeHtml(padLine(typedLine, displayWidth(typedLine))) +
					(pendingLine
						? '<span class="bubble-pending">' + escapeHtml(pendingLine) + "</span>"
						: "") +
					PADDING_CHAR.repeat(Math.max(0, innerWidth - displayWidth(fullLine))) +
					"</span>" +
					'<span class="bubble-side bubble-side-right">|</span>' +
					"</div>"
				);
			});

		return [top, ...rows, bottom].join("");
	}

	function pickQuote() {
		if (quotes.length === 1) {
			return 0;
		}

		let index = Math.floor(Math.random() * quotes.length);

		while (index === lastIndex) {
			index = Math.floor(Math.random() * quotes.length);
		}

		lastIndex = index;
		return index;
	}

	function stopTyping() {
		if (typingTimer !== null) {
			window.clearInterval(typingTimer);
			typingTimer = null;
		}
	}

	function showQuote() {
		const quote = quotes[pickQuote()];
		const totalCharacters = Array.from(quote).length;
		let visibleCharacters = 0;

		stopTyping();
		bubble.classList.remove("is-visible");
		bubble.textContent = "";
		bubble.setAttribute("aria-label", quote);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				bubble.classList.add("is-visible");
				bubble.innerHTML = renderBubble(quote, visibleCharacters);

				typingTimer = window.setInterval(() => {
					visibleCharacters += 1;
					bubble.innerHTML = renderBubble(quote, visibleCharacters);

					if (visibleCharacters >= totalCharacters) {
						stopTyping();
					}
				}, TYPE_DELAY_MS);
			});
		});
	}

	mascot.addEventListener("click", showQuote);
	mascot.addEventListener("keydown", (event) => {
		if (event.key !== "Enter" && event.key !== " ") {
			return;
		}

		event.preventDefault();
		showQuote();
	});
})();
