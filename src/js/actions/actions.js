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
            answers[index].value.toLowerCase() ===
            answers[index].solution.toLowerCase()
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
