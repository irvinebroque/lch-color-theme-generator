var chroma = require('chroma-js');

var lchGenerator = {

  convertToLCH: function(hexColor) {
    return chroma(hexColor).lch()
  },

  getThemeBlack: function(hexColor) {
    var hueOfInputColor = this.getHueOfInputColor(hexColor)
    return chroma(5, 95, hueOfInputColor, 'lch').hex()
  },

  getThemeWhite: function(hexColor) {
    var hueOfInputColor = this.getHueOfInputColor(hexColor)
    return chroma(95, 5, hueOfInputColor, 'lch').hex()
  },

  getHueOfInputColor: function(hexColor) {
    var inputColorLCH = this.convertToLCH(hexColor)
    return inputColorLCH[2]
  },

  getEightEquidistantHues: function(hexColor) {
    var hues = [];

    for (i = 0; i < 8; i++) {

      var hue = (i * 45) + this.getHueOfInputColor(hexColor)

      hues.push(hue)
    }

    return hues
  },

  createTheme: function(hexColor) {

    var hues = this.getEightEquidistantHues(hexColor);
    var themeBlack = this.getThemeBlack(hexColor);
    var themeWhite = this.getThemeWhite(hexColor);

    var hueHexColors = hues.map(function(hue) {
      return chroma(50, 100, hue, 'lch').hex()
    })

    var theme = hueHexColors.map(function(hexColor) {
      var bezInterpolator = chroma.interpolate.bezier([themeWhite, hexColor, themeBlack])
      return chroma.scale(bezInterpolator).domain([0, 1000], 10).correctLightness(true).colors();
    })

    return theme.slice(0, 7)
  }

}

module.exports = lchGenerator;
