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
            "#620c23,#e62442,#a30099,#f46a93,#cf041c,#4c61e8,#fb598b,#590b21,#fa1ec1,#cf96f1,#c7964e,#845c42,#f77305,#00d145,#a33625",

        font: new ig.Font('media/04b03.font.png'),
        borderLayerTimes: [],
        lineLayerTimes: [],
        fontLayerTimes: [],
        done: false,
        results: 'Running benchmark...',

        init: function() {
            this.colors = this.colors.split(',');
            this.runBenchmark();
        },

        update: function() {
            if(this.done) {
                return;
            } else if(this.benchmarkHasFinished()) {
                this.done = true;
                this.results = this.getReport();
            }
        },

        draw: function() {
            this.parent();
            var text = this.results;
            var x = ig.system.width/2;
            var y = ig.system.height/2 - (this.font.heightForString(text))/2;
            this.font.draw(text, x, y, ig.Font.ALIGN.CENTER);
        },

        runBenchmark: function() {
            for(var i=0; i<this.colors.length; i++) {
                var color = this.colors[i];
                var font = new ig.Font('media/04b03.font.png', { fontColor: color, borderColor: color });
            }
        },

        benchmarkHasFinished: function() {
            var target = this.colors.length;
            return this.borderLayerTimes.length === target &&
                   this.lineLayerTimes.length === target &&
                   this.fontLayerTimes.length === target;
        },

        getReport: function() {
            var borderLayerAverage = this.getAverageFromArray(this.borderLayerTimes);
            var fontLayerAverage = this.getAverageFromArray(this.fontLayerTimes);
            var lineLayerAverage = this.getAverageFromArray(this.lineLayerTimes);
            var text = '' + this.colors.length + ' fonts were generated.' + "\n" +
                       'Font layer took average of ' + fontLayerAverage + "ms.\n" +
                       'Border layer took average of ' + borderLayerAverage + "ms.\n" +
                       'Line layer took average of ' + lineLayerAverage + "ms.";
            return text;
        },

        startTimer: function() {
            var start = new Date().getTime();
            return start;
        },

        stopTimer: function(start) {
            var end = new Date().getTime();
            var time = end - start;
            return time;
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
