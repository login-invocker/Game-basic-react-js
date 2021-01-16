const TOTAL_LEVEL = 4
const MAX_NUMBER_INPUT_BY_LEVER = [
    {},
    {
        largestNumber: 10,
        caculators: ['+'],
        countCaculate: 5,
        resultMax: 20
    },
    {
        largestNumber: 20,
        caculators: ['+', '-'],
        countCaculate: 5,
        resultMax: 40
    },
    {
        largestNumber: 30,
        caculators: ['+','-'],
        countCaculate: 5
    },
    {
        largestNumber: 10,
        caculators: ['+','-','*'],
        countCaculate: 7
    }
]

module.exports = {
    TOTAL_LEVEL,
    MAX_NUMBER_INPUT_BY_LEVER
}