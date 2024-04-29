class Text {
    constructor(text) {
        this.text = text;
    }

    setColour(colour) {
        this.colour = colour;
    }
    setFontSize(size) {
        this.size = size;
    }
     render() {
        const text =   `  <text x="150" y="130" font-size="${this.size}" text-anchor="middle" fill='${this.colour}'>${this.text}</text>`
        return text;
    }
   
}

module.exports = Text;