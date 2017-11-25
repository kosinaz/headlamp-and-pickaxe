var miner1, cursors, facing, map, layer;

var playState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        miner1 = game.add.sprite(1024 / 2 + 128, 576 / 2 + 96, 'miner1');
        miner1.anchor.x = 0.5; 
        miner1.anchor.y = 0.5; 
        miner1.animations.add('idleright', [0, 1, 2, 3, 2, 1]);
        miner1.animations.add('idleleft', [4, 5, 6, 7, 6, 5]);
        miner1.animations.add('walkright', [32, 33, 34, 35, 36, 37, 38, 39]);
        miner1.animations.add('walkleft', [40, 41, 42, 43, 44, 45, 46, 47]);
        miner1.animations.play('idleright', 8, true);
        game.physics.enable(miner1);
        miner1.body.setSize(64, 192, 96, 64);
        miner1.body.gravity.set(0, 1000);
        cursors = game.input.keyboard.createCursorKeys();
        game.world.setBounds(0, 0, 10240, 5760);
        game.camera.follow(miner1, game.camera.FOLLOW_LOCKON);
        map = game.add.tilemap('map');
        map.addTilesetImage('tiles');
        map.setCollisionBetween(1, 16);
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();        
    },
    
    update: function () {
        
        game.physics.arcade.collide(miner1, layer);
        miner1.body.velocity.x = 0;

        if (cursors.left.isDown) {
            miner1.body.velocity.x = -250;
            if (facing != 'left') {
                miner1.animations.play('walkleft', 16, true);
                facing = 'left';
            }
        }
        else if (cursors.right.isDown) {
            miner1.body.velocity.x = 250;
            if (facing != 'right') {
                miner1.animations.play('walkright', 16, true);
                facing = 'right';
            }
        } else {
            if (facing != 'idle') {                
                if (facing == 'left') {
                    miner1.animations.play('idleleft', 8, true);
                } else {
                    miner1.animations.play('idleright', 8, true);
                }
                facing = 'idle';
            }
        }
    }
}