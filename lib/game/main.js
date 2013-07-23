ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'impact.debug.debug',
    'plugins.joncom.font-sugar.font'
)
.defines(function(){

    MyGame = ig.Game.extend({

        colors:
            "#a9559c,#d0d6c9,#b4c602,#3b47e1,#a6de57,#8681e2,#6c68c5,#65d8ba,#15b1f3,#35ede9,#538ade,#98a675,#7e5d63,#84f396,#7a277c,#db2bab,#8438e7,#e16c6e,#eca8fd,#100f67,#4b22eb,#aa5fbb,#a5d220,#b666c4,#030bd2,#a2bcc1,#3c3f6a,#924518,#a307e5,#29e963,#c5c3d0,#1a09e2,#5e0579,#82c7cf,#113d01," +
            "#620c23,#e62442,#a30099,#f46a93,#cf041c,#4c61e8,#fb598b,#590b21,#fa1ec1,#cf96f1,#c7964e,#845c42,#f77305,#00d145,#a33625,#9f4022,#caf045,#0b3719,#783895,#a2d112,#856b7b,#c442ae,#3a13a5,#11dbc0,#1444b7,#11d60f,#a4d27d,#4863dd,#9af0ed,#7fe714,#e3fb96,#68f464,#40a85a,#d13a62,#9d2a00," +
            "#5e81be,#99b952,#ab8bbd,#3db6f8,#35a9e1,#92ca99,#57320e,#1e6f26,#da9e83,#737352,#94de35,#c42c22,#754649,#e8402d,#272278,#534682,#e620e2,#fe4793,#30d9f0,#45ac61,#f9a46b,#e9aa94,#3b3489,#102f67,#f3f14a,#fb12af,#5c76b1,#281f87,#3414f7,#40ecb8",

        font: new ig.Font('media/04b03.font.png'),
        borderLayerTimes: [],
        lineLayerTimes: [],
        fontLayerTimes: [],

        startTimer: function() {
            var start = new Date().getTime();
            return start;
        },

        stopTimer: function(start) {
            var end = new Date().getTime();
            var time = end - start;
            return time;
        },

        init: function() {
            this.colors = this.colors.split(',');
            this.runBenchmark();
        },

        runBenchmark: function() {
            for(var i=0; i<this.colors.length; i++) {
                var color = this.colors[i];
                var font = new ig.Font('media/04b03.font.png', { fontColor: color, borderColor: color });
            }
        },

        draw: function() {
            this.parent();

            var borderLayerAverage = this.getAverageFromArray(this.borderLayerTimes);
            var fontLayerAverage = this.getAverageFromArray(this.fontLayerTimes);
            var lineLayerAverage = this.getAverageFromArray(this.lineLayerTimes);

            var text = '' + this.colors.length + ' fonts were generated.' + "\n" +
                       'Font layer took average of ' + fontLayerAverage + "ms.\n" +
                       'Border layer took average of ' + borderLayerAverage + "ms.\n" +
                       'Line layer took average of ' + lineLayerAverage + "ms.";
            var x = ig.system.width/2;
            var y = ig.system.height/2 - (this.font.heightForString(text))/2;
            this.font.draw(text, x, y, ig.Font.ALIGN.CENTER);
        },

        getAverageFromArray: function(array) {
            var total = 0;
            for(var i=0; i<array.length; i++) {
                total += array[i];
            }
            var average = total / array.length;
            return average;
        }

    });

    ig.Font.inject({
        _createBorderLayer: function() {
            var start = ig.game.startTimer();
            var canvas = this.parent();
            var time = ig.game.stopTimer(start);
            ig.game.borderLayerTimes.push(time);
            return canvas;
        },
        _createLineLayer: function() {
            var start = ig.game.startTimer();
            var canvas = this.parent();
            var time = ig.game.stopTimer(start);
            ig.game.lineLayerTimes.push(time);
            return canvas;
        },
        _createFontLayer: function() {
            var start = ig.game.startTimer();
            var canvas = this.parent();
            var time = ig.game.stopTimer(start);
            ig.game.fontLayerTimes.push(time);
            return canvas;
        }

    });

    ig.main( '#canvas', MyGame, 60, 190, 50, 2 );

});
