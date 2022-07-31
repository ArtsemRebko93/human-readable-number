module.exports = function toReadable(number) {
    const nineArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const nineteenArray = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozensArray = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundredArray = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];
    if (number === 0) {
        return "zero";
    } else if (number >= 1 && number < 10) {
        return nineArray[number];
    } else if (number >= 10 && number < 20) {
        return nineteenArray[number % 10];
    } else if (number > 19 && number < 100) {
        if (number % 10 !== 0) {
            const dozens = number - (number % 10);
            const arrayPosition = dozens / 10 - 2;
            const units = number % 10;
            return dozensArray[arrayPosition] + " " + nineArray[units];
        } else if (number % 10 === 0) {
            return dozensArray[number / 10 - 2];
        }
    } else if (number > 99 && number < 1000) {
        if (number % 100 === 0) {
            return hundredArray[(number - (number % 100)) / 100 - 1];
        } else if (number % 100 > 0 && number % 100 < 10) {
            return (
                hundredArray[(number - (number % 100)) / 100 - 1] +
                " " +
                nineArray[number % 100]
            );
            // number > 109 && number < 120
        } else if (number % 100 > 9 && number % 100 < 20) {
            return (
                hundredArray[(number - (number % 100)) / 100 - 1] +
                " " +
                nineteenArray[(number % 100) - 10]
            );
        } else if (number % 100 > 19) {
            if ((number % 100) % 10 === 0) {
                return (
                    hundredArray[(number - (number % 100)) / 100 - 1] +
                    " " +
                    dozensArray[(number % 100) / 10 - 2]
                );
            } else if ((number % 100) % 10 !== 0) {
                return (
                    hundredArray[(number - (number % 100)) / 100 - 1] +
                    " " +
                    dozensArray[
                        ((number % 100) - ((number % 100) % 10)) / 10 - 2
                    ] +
                    " " +
                    nineArray[(number % 100) % 10]
                );
            }
        }
    }
};
console.log(module.exports(61));
