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
            "#5e81be,#99b952,#ab8bbd,#3db6f8,#35a9e1,#92ca99,#57320e,#1e6f26,#da9e83,#737352,#94de35,#c42c22,#754649,#e8402d,#272278,#534682,#e620e2,#fe4793,#30d9f0,#45ac61,#f9a46b,#e9aa94,#3b3489,#102f67,#f3f14a,#fb12af,#5c76b1,#281f87,#3414f7,#40ecb8,#82bba2,#0ffa71,#40cdef,#c212fc,#2670ff," +
            "#c4b3ed,#9b3d42,#c185f6,#dd6579,#743e4b,#178aaa,#8d6964,#16ab25,#3166ef,#c0980e,#e09db5,#8d6db6,#7e18a9,#5cb732,#a7fd35,#a76b27,#a7b43a,#085fa9,#48b2e1,#d5a529,#c36b57,#287334,#98edd4,#dedbae,#3f6636,#10e115,#4f2f8d,#f863d1,#1276ae,#f24caf,#e09037,#42bfab,#a16485,#c30d60,#de17dd," +
            "#f271be,#943a80,#62fbb0,#0d9c4f,#405668,#3a190a,#40203d,#49e230,#cc12dd,#04d235,#bbb6a2,#0975bd,#2ad68e,#d36eab,#fc7a3c,#ef831b,#0d47d4,#5b1862,#f5fb9a,#30aee0,#57e996,#982e8c,#0a20d1,#f89559,#01fd16,#b444d2,#1b91a1,#4c72ba,#39324d,#3431e4,#5badc6,#e581d1,#bd3a7c,#6b7690,#7e7f85," +
            "#40caa5,#521e8d,#2f9926,#b8beaa,#7af9f0,#1df434,#3fc306,#fedb0f,#9fc4d6,#d6330c,#d2e6aa,#233515,#6ebfbb,#a75864,#1600dd,#3d4abc,#12bb57,#9be14d,#916ba1,#782ee9,#ec9904,#0b6b01,#a1e975,#57c79e,#3cdc07,#e475c1,#1ec7c2,#0e6f99,#0242e0,#2d09a6,#48a95f,#339b25,#817d2e,#3e167c,#0024cb," +
            "#507ddb,#913039,#49088d,#3dc20e,#ddcd89,#250fba,#898f6d,#58b1e6,#2d5b15,#f6751e,#a51192,#8a412e,#4186aa,#31e0be,#d0c62c,#8ea3b7,#c57148,#ffd773,#0eb3b8,#727cf7,#891645,#1c828d,#3d30c4,#754a33,#b6422c,#a47fe0,#69ce1d,#bbd99c,#f9bc15,#2cf3fa,#cabc6b,#47f378,#a6c886,#798efe,#acddc0," +
            "#dddfa7,#252bc9,#582fb8,#8ab96a,#5400de,#1a146c,#4f772f,#c0ae74,#e7a3d0,#5da348,#8cac36,#8f9d13,#31a642,#2bd009,#a537bb,#b49de8,#f61ca8,#e8358d,#1005a5,#f159de,#6632f6,#c41a61,#ce8293,#edce13,#160757,#6844ad,#35c2b1,#ccad4c,#251843,#841850,#09e88c,#c0d4b6,#c5de48,#a7a9cc,#b224b7," +
            "#ad7cf8,#e9ac2b,#7904d1,#0fb350,#bfbf7a,#84275e,#b1445c,#e7533f,#7c460f,#041c7a,#2de275,#dc4086,#04227e,#bf6286,#ebe9ea,#e8e554,#9119b1,#74e258,#09f6bc,#6e5c9c,#770b74,#1ef492,#87a44a,#7b9f5d,#5929fb,#6969b2,#12848e,#f91dc6,#907552,#d11d7d,#a3989f,#cd103b,#96dbd0,#1068f8,#517c78," +
            "#1a67ab,#73389e,#8c86bd,#0f1616,#c929fd,#5ed38e,#358193,#dff0f6,#cab423,#bbbd3f,#7000fb,#c3c004,#06b202,#243602,#a8aa87,#d43a31,#e35735,#d82753,#137cef,#f69787,#06e3e1,#8e661f,#d89921,#00b3f5,#60ef58,#ed9f02,#ee864c,#015af7,#bb9d87,#8145f7,#31db3f,#481be2,#d2ab67,#3aaedd,#29e9be," +
            "#7ecd25,#a08416,#ff8834,#6887f2,#efb5ac,#7595eb,#e97903,#e9b9eb,#acc11e,#f903a4,#c92a84,#40a7bd,#92d761,#47be78,#05a46a,#a14cdb,#b36274,#b59a2c,#3d8af4,#828b5b,#7126d3,#53f8b6,#78853b,#e7e6fd,#9eb216,#10bf8e,#128e6b,#dfb7d0,#ca82f6,#47a4e7,#f90302,#d0a9b7,#629e99,#065c89,#d2d383," +
            "#850a10,#372218,#b2afdd,#bad8ab,#7db1ac,#e6dfb2,#5d5375,#8bb1bc,#fe7ce7,#f08d72,#a3b48e,#aa9d84,#07ff56,#852062,#8bfa31,#bd79b6,#4e6faa,#e72204,#ecb046,#5e88b6,#207707,#a427bf,#b085d4,#0818d2,#ea51f5,#16e27f,#2fe81e,#c101bf,#f17179,#131895,#e00925,#95e4d4,#6ca316,#dd7dde,#ae4856," +
            "#fac26d,#24963d,#51ae63,#10fc0d,#a5f782,#0c06d9,#6cbaad,#4472b6,#6b8305,#af30a9,#2b7a99,#26dc44,#0533a0,#63ddd0,#f50955,#3658e1,#d89944,#9a98af,#fb1500,#8aec9f,#b9bd54,#3cd129,#dcc380,#8eefa2,#b23599,#0acc19,#b94e20,#856ee2,#7cf95e,#9c1d88,#feb290,#15725b,#1d3c1e,#52a867,#b7fd05," +
            "#c67708,#06c964,#52f8e4,#6b1c7f,#a1fe26,#acd1f7,#b44a74,#3edaba,#c66e01,#7471cc,#6d27f3,#25455b,#d1d386,#d370a3,#9c482b,#ccb9e8,#ac111d,#6cfe19,#1f778b,#a06c66,#5db7b4,#d6da77,#7472d7,#06a6b9,#c13791,#4da14c,#9bd096,#d28c19,#9b6caa,#4b416f,#d55d37,#c2b0c5,#a51db9,#d45e2e,#218806," +
            "#668c48,#b41a16,#daea90,#98723e,#00b7c3,#1f00b2,#89aa93,#e9eaae,#e260dd,#d5c319,#51cd3c,#9fbe8a,#886d9e,#1bf002,#63fe9d,#2ee15a,#c93a38,#36fc18,#3f255a,#09d26b,#8b43b6,#edf88c,#24473a,#82e65d,#823276,#6c6207,#4d4c0c,#185429,#402a93,#2df367,#09d47e,#5c9c1f,#a0f18f,#ef3c00,#bcca80," +
            "#7b1e06,#bda4e7,#0b516d,#431fad,#caea1c,#fddf8f,#bec92b,#f9d20a,#2c69c8,#7425fd,#116841,#020bf0,#13bab2,#21e630,#e35ce9,#bdc97c,#5be4ae,#2c2daf,#9f3bf4,#9e1255,#36018e,#ddca15,#be0105,#d3db46,#544623,#7d78fd,#c1fe77,#801817,#22e5b9,#50bc92,#d286cb,#92d8d1,#5e8ffd,#427295,#cf6f68," +
            "#f04a5c,#e8307b,#50472f,#8de363,#f52d52,#39dc16,#8246df,#21227d,#148a5d,#be4efe,#ea102d,#f48702,#d5216c,#968c1a,#414136,#f8287a,#715b44,#7162e9,#bc5e4c,#4cf188,#87c5dd,#62b8a6,#200cf0,#f378d6,#d168f2,#258c4d,#1914cc,#abfa40,#e308e3,#42ea40,#f899ec,#0ba93d,#71d5c5,#e61e7a,#42843c," +
            "#b2a9f9,#11bcd3,#c6af10,#1c6fe1,#14038d,#f52863,#c4d565,#206606,#f1642b,#6a13f3,#67ac5c,#dfecd9,#977aea,#f9ab50,#d06dc1,#8460d1,#827ef5,#af70b1,#698acd,#4c3af7,#58802d,#e3ef0b,#5ea117,#3a309b,#8e97ff,#787326,#52d18d,#161852,#3634c0,#fbdc01,#c17c4c,#1cb314,#1a2b34,#bb9da0,#76570f," +
            "#813799,#01b477,#38549f,#bc5369,#96f0cc,#8d78b2,#0fa720,#375faf,#9411dc,#2b5b6a,#c81896,#b35598,#2c28f5,#9a172e,#500a6b,#e73f49,#bbbf9e,#f4dfcf,#6368b1,#692c47,#48cbb2,#e91d76,#eefd45,#162cfb,#6065ce,#4f767f,#da7419,#129381,#a08c87,#b153a0,#d68db7,#efe4bc,#d8ead6,#998c8d,#acb1a9," +
            "#7e7227,#59d78b,#94e752,#2d9a24,#50be0c,#1ce2f2,#4b13d2,#6d6949,#0f81ab,#ef4324,#76099f,#059754,#91602f,#ba07e5,#51e4e0,#256ccc,#747820,#c8d6d9,#688163,#288666,#ef78b1,#af2cb6,#6e77fd,#1a7bce,#446754,#554294,#398d62,#962308,#87b751,#ef3829,#5c86f6,#e240af,#b05c18,#bcb8f9,#173638," +
            "#23f264,#9f7cb3,#a9912f,#70f8af,#af1dcc,#996a67,#2627b2,#ac456d,#532d82,#dd3d55,#e0c7ae,#27a589,#8a48b7,#a0f66c,#4f047b,#46f5f0,#d5bcee,#afbb37,#7bfff7,#b779de,#ce71c7,#bb9ae9,#8b172b,#4c1cbd,#282d22,#04fb60,#679e8d,#b29399,#5925f3,#a2966b,#982a51,#48ccce,#13b906,#b8b659,#a33ded," +
            "#1f64a2,#98e0d9,#3c67bf,#8cce4b,#1ebdd2,#49b814,#ad72d9,#d8e919,#b0e695,#93cfe6,#577848,#b513bc,#8b70d4,#e57aa9,#301e26,#8c2872,#fc48e4,#797559,#4f502a,#fb7e4f,#f24441,#1061bd,#7751a0,#94f36b,#0b48f8,#c73611,#8313c4,#29d66e,#c9e051,#c5da6a,#7ad595,#89373a,#c39548,#c90b09,#577ba3",

        font: new ig.Font('media/04b03.font.png'),
        results: '',

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
            var time = this.runBenchmark();
            this.results = '' + this.colors.length + ' colored fonts generated in ' + time + 'ms.';
        },

        runBenchmark: function() {
            var start = this.startTimer();
            for(var i=0; i<this.colors.length; i++) {
                var color = this.colors[i];
                var font = new ig.Font('media/04b03.font.png', { fontColor: color });
            }
            var time = this.stopTimer(start);
            return time;
        },

        draw: function() {
            this.parent();
            var x = ig.system.width/2;
            var y = ig.system.height/2 - (this.font.height-2)/2;
            this.font.draw(this.results, x, y, ig.Font.ALIGN.CENTER);
        }

    });

    ig.main( '#canvas', MyGame, 60, 190, 25, 2 );

});
