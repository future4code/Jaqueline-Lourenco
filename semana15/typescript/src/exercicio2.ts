//a)
    type Statistics = {
        bigger: number,
        smaller: number,
        medium: number
    }

function getStatistics (numbers: number[]):Statistics {
    const OrderedNumbers = numbers.sort(
        (a, b) => a - b
    )

    let add = 0

    for (let num of numbers) {
        add += num
    }

    const statistics = {
        bigger: OrderedNumbers [OrderedNumbers.length - 1],
        smaller: OrderedNumbers[0],
        medium: add / OrderedNumbers.length
    }

    return statistics
}

//b) 

function getStatisticsTipada (numbers: number[]):Statistics {
    const OrderedNumbers: number[] = numbers.sort(
        (a, b) => a - b
    )

    let add: number = 0

    for (let num of numbers) {
        add += num
    }

    const statistics: Statistics = {
        bigger: OrderedNumbers [OrderedNumbers.length - 1],
        smaller: OrderedNumbers[0],
        medium: add / OrderedNumbers.length
    }

    return statistics
}

//c)

type OldSample = {
    numeros: number[],
    getStatistics: (number: number[]) => Statistics
}

const ageSample: OldSample = {
    numeros: [26, 08, 65, 47, 25],
    getStatistics
}  