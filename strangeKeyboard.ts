enum keys { HOME = '<', BACKSPACE = '*', END = '>', NUMERIC_LOCK = '#' }
let numLockIsOn = true;
let input = 'HE*<LL>O'
let output: string[] = []
let inputArray: (string)[] = input.split('')
let cursorPosition: number = 0

const cursorToStart: Function = () => {
    cursorPosition = 0;
}

const cursorToEnd: Function = () => {
    cursorPosition = output.length;
}

const isNumerical: Function = (value: string) => {
    let numValue: number = parseInt(value)
    if (!isNaN(numValue)) {
        return true;
    }
    return false;
}

const deleteCharacter: Function = () => {
    output.pop()
    cursorPosition--
}

const addCharacter: Function = (character: string) => {
    if (!numLockIsOn) {
        if (isNumerical(character)) {
            return;
        }
    }

    let tempArray: string[] = []
    tempArray[cursorPosition] = character
    let pos: number = 0
    output.forEach((value, index) => {
        if (tempArray[pos] !== undefined) pos++
        tempArray[pos] = value
        pos++
    })
    output = tempArray
    cursorPosition++
}

const interpretedText: Function = (): string => {
    inputArray.forEach((value, index) => {
        if (value === keys.HOME) {
            cursorToStart()
        } else if (value === keys.END) {
            cursorToEnd()
        } else if (value === keys.BACKSPACE) {
            deleteCharacter()
        } else if (value === keys.NUMERIC_LOCK) {
            numLockIsOn = !numLockIsOn
        } else {
            // console.log(value, output)
            addCharacter(value)
            // console.log(output)
        }
    })
    return output.toString()
}
console.log(interpretedText())