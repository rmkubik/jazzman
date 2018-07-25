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
    validateAnswer: index => state => {
        console.log(state.answers[index]);
    }
};
