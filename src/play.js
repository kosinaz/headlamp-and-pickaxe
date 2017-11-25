var miner1, cursors, facing;

var playState = {

    create: function () {

        miner1 = game.add.sprite(150, 150, 'miner1');
        miner1.animations.add('idleright', [0, 1, 2, 3, 2, 1]);
        miner1.animations.add('idleleft', [4, 5, 6, 7, 6, 5]);
        miner1.animations.add('walkright', [32, 33, 34, 35, 36, 37, 38, 39]);
        miner1.animations.add('walkleft', [40, 41, 42, 43, 44, 45, 46, 47]);
        miner1.animations.play('idleright', 8, true);
        cursors = game.input.keyboard.createCursorKeys();

    },

    update: function () {

        if (cursors.left.isDown) {
            miner1.x -= 6;
            if (facing != 'left') {
                miner1.animations.play('walkleft', 16, true);
                facing = 'left';
            }
        }
        else if (cursors.right.isDown) {
            miner1.x += 6;
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