class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = background - color; // тут ведь сss стили должны быть?
        this.fontSize = font - size; // опять какая-то зараза добавляет пробелы при сохранении)
        this.textAlign = text - align;
    }

    createDiv(param) {
        return this.style.cssText(param);
    }
}

const oneOption = new Options(10, 10, lightblue, 14, center);

document.getElementById('myoption').oneOption.createDiv("Wow! It works!");