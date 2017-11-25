var loadState = {
    preload: function () {

        /**
         * Load the sprite.
         */ 
        game.load.spritesheet('miner1', 'assets/miner1.png', 256, 256);

    },
    
    create: function () {

        /**
         * Start the game.
         */
        game.state.start('play');
    },
};