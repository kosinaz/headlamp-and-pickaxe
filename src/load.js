var loadState = {
    preload: function () {

        /**
         * Load the sprite.
         */ 
        game.load.spritesheet('miner1', 'assets/miner1.png', 256, 256);
        game.load.image('tiles', 'assets/tiles.png', 256, 256);
        game.load.tilemap('map', 'data/map.json', null, Phaser.Tilemap.TILED_JSON);

    },
    
    create: function () {

        /**
         * Start the game.
         */
        game.state.start('play');
    },
};