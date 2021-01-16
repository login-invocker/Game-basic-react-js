const TOTAL_LEVEL = 4
const MAX_NUMBER_INPUT_BY_LEVER = [
    {
        maxMun: 10,
        caculator: ['+'],
        countCaculate: 5
    },
    {
        maxMun: 20,
        caculator: ['+', '-'],
        countCaculate: 5
    },
    {
        maxMun: 30,
        caculator: ['+','-'],
        countCaculate: 5
    },
    {
        maxMun: 10,
        caculator: ['+','-','*'],
        countCaculate: 7
    }
]

module.exports = {
    TOTAL_LEVEL,
    MAX_NUMBER_INPUT_BY_LEVER
}