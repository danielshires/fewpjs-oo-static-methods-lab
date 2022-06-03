class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    static sanitize(string) {
        return string.replace(/[^\w\s\d''-]/gi, '');
    }
    static titleize(string) {
        // return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
        let str = string.toLowerCase().split(' ')
        let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

        let strCapitalised = str.map(word => {
            const findWord = except.find(el => el.toLocaleUpperCase() === word.toLocaleUpperCase())

            if (findWord) {
                return word.charAt(0).toLowerCase() + word.slice(1)
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }
        })

        return this.capitalize(strCapitalised.join(' '))
    }
}

// console.log(Formatter.sanitize('ca$@#tching cold'))
// console.log(Formatter.sanitize(`Doin' Dishes`))
// console.log(Formatter.sanitize(`Entert*ain(i{ng-Elephan^ts`))
console.log(Formatter.titleize(`chicken soup with rice and a few other songs`))
console.log(Formatter.titleize(`a Tale of Two Cities`))