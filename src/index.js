module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number === 0) {
        return 'zero';
    }

    let result = '';

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + ' hundred ';
        number %= 100;
    }

    if (number >= 10 && number < 20) {
        result += teens[number - 10];
        number = 0;
    } else {
        result += tens[Math.floor(number / 10)];
        number %= 10;
        result =result+ " "+ ones[number];
    }

    result = result.trim();
    result = result.replace("  ", " ");

    return result;

  
}
