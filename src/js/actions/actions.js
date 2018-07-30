export default {
    updateInputValue: ({ index, value }) => ({ answers }) => ({
        answers: [
            ...answers.slice(0, index),
            {
                ...answers[index],
                value
            },
            ...answers.slice(index + 1)
        ]
    }),
    validateAnswer: index => ({ answers }) => {
        if (
            stripPunctuation(answers[index].value.toLowerCase()) ===
            stripPunctuation(answers[index].solution.toLowerCase())
        ) {
            return {
                answers: [
                    ...answers.slice(0, index),
                    {
                        ...answers[index],
                        solved: true
                    },
                    ...answers.slice(index + 1)
                ]
            };
        }
    }
};

function stripPunctuation(str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(/[&\/\\#,+\(\)$~%\.!^'"\;:*?\[\]<>{}]/g, '');
}
