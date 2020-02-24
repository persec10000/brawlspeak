import {Dimensions} from "react-native";

export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
export const ENV = "prod"; /* prod or develop  case sensitive!!!*/
const brawlersData = [

    /* --------------- START COMMON --------------- */

     {
        name: "Shelly",
        boxImage: require('./static/images/brawlers/shelly/shelly_1.png'),
        profileImages: [
            require('./static/images/brawlers/shelly/shelly.png'),
            require('./static/images/brawlers/shelly/skin_1.png'),
            require('./static/images/brawlers/shelly/skin_2.png'),
            require('./static/images/brawlers/shelly/skin_3.png')
        ],
        quotes: [
            {
                text: "\"Let's go!\"",
                sound: 'shelly_1.mp3'
            },
            {
                text: "\"Let's go get 'em\"",
                sound: 'shelly_2.mp3'
            },
            {
                text: "\"Let's do this\"",
                sound: 'shelly_3.mp3'
            },
            {
                text: "\"HA HA!\"",
                sound: 'shelly_4.mp3'
            },
            {
                text: "\"Bling bling\"",
                sound: 'shelly_5.mp3'
            },
            {
                text: "\"Increíble!\"",
                sound: 'shelly_6.mp3'
            },
            {
                text: "\"Fantástico\"",
                sound: 'shelly_11.mp3'
            },
            {
                text: "\"Así me gusta!\"",
                sound: 'shelly_7.mp3'
            },
            {
                text: "\"Yippee!\"",
                sound: 'shelly_8.mp3'
            },
            {
                text: "\"Woo-hoo!\"",
                sound: 'shelly_12.mp3'
            },
            {
                text: "\"Haa ha ha ha..\"",
                sound: 'shelly_9.mp3'
            },
            {
                text: "\"Bang!\"",
                sound: 'shelly_10.mp3'
            },
            {
                text: "\"Booom..\"",
                sound: 'shelly_13.mp3'
            },
            {
                text: "\"Winning..\"",
                sound: 'shelly_14.mp3'
            },
            {
                text: "\"Yes!\"",
                sound: 'shelly_15.mp3'
            },
            {
                text: "\"No!..\"",
                sound: 'shelly_16.mp3'
            },
        ],
        hitSounds: ['shelly_hurt_1.mp3', 'shelly_hurt_2.mp3', 'shelly_hurt_3.mp3', 'shelly_hurt_4.mp3', 'shelly_hurt_5.mp3']
    },

    {
        name: "Nita",
        boxImage: require('./static/images/brawlers/nita/nita_1.png'),
        profileImages: [
            require('./static/images/brawlers/nita/nita.png'),
            require('./static/images/brawlers/nita/skin_1.png'),
            require('./static/images/brawlers/nita/skin_2.png'),
            require('./static/images/brawlers/nita/skin_3.png'),
            require('./static/images/brawlers/nita/skin_4.png')
        ],
        quotes: [
            {
                text: "\"Nita!\"",
                sound: 'nita_1.mp3'
            },
            {
                text: "\"Mwahaha\"",
                sound: 'nita_2.mp3'
            },
            {
                text: "\"Yeah!\"",
                sound: 'nita_3.mp3'
            },
            {
                text: "\"Bear!\"",
                sound: 'nita_4.mp3'
            },
            {
                text: "\"Ya!\"",
                sound: 'nita_5.mp3'
            },
            {
                text: "\"Ha!\"",
                sound: 'nita_6.mp3'
            },
            {
                text: "\"Rrra!\"",
                sound: 'nita_7.mp3'
            },
            {
                text: "\"Ai Yai!\"",
                sound: 'nita_8.mp3'
            }
        ],
        hitSounds: ['nita_hurt_1.mp3', 'nita_hurt_2.mp3', 'nita_hurt_3.mp3', 'nita_hurt_4.mp3', 'nita_hurt_5.mp3']
    },

    {
        name: "Colt",
        boxImage: require('./static/images/brawlers/colt/colt_1.png'),
        profileImages: [
            require('./static/images/brawlers/colt/colt.png'),
            require('./static/images/brawlers/colt/skin_1.png'),
            require('./static/images/brawlers/colt/skin_2.png'),
            require('./static/images/brawlers/colt/skin_3.png'),
            require('./static/images/brawlers/colt/skin_4.png')
        ],
        quotes: [
            {
                text: "\"Watch out, here I come!\"",
                sound: 'colt_1.mp3'
            },
            {
                text: "\"Time for trouble!\"",
                sound: 'colt_2.mp3'
            },
            {
                text: "\"Too pretty for pain!\"",
                sound: 'colt_3.mp3'
            },
            {
                text: "\"Brawn and beauty!\"",
                sound: 'colt_4.mp3'
            },
            {
                text: "\"Pew pew pew!\"",
                sound: 'colt_5.mp3'
            },
            {
                text: "\"Check out my guns, ha ha ha!\"",
                sound: 'colt_12.mp3'
            },
            {
                text: "\"This is too easy!\"",
                sound: 'colt_6.mp3'
            },
            {
                text: "\"Sorry noob\"",
                sound: 'colt_7.mp3'
            },
            {
                text: "\"Have mercy!\"",
                sound: 'colt_11.mp3'
            },
            {
                text: "\"I want my mommy!\"",
                sound: 'colt_8.mp3'
            },
            {
                text: "\"I'm too pretty!\"",
                sound: 'colt_9.mp3'
            },
            {
                text: "\"Ha ha ha!\"",
                sound: 'colt_10.mp3'
            },
            {
                text: "\"Selfie time\"",
                sound: 'colt_13.mp3'
            },
            {
                text: "\"Primetime baby!\"",
                sound: 'colt_14.mp3'
            },
            {
                text: "\"Heh, watch and learn\"",
                sound: 'colt_15.mp3'
            },
            {
                text: "\"I'm too good!\"",
                sound: 'colt_16.mp3'
            },
            {
                text: "\"Number one!\"",
                sound: 'colt_17.mp3'
            },
            {
                text: "\"Check out my headshot\"",
                sound: 'colt_18.mp3'
            },
            {
                text: "\"Oh, that's gotta hurt\"",
                sound: 'colt_19.mp3'
            },
            {
                text: "\"Nice headshot\"",
                sound: 'colt_20.mp3'
            },
            {
                text: "\"Yes!\"",
                sound: 'colt_21.mp3'
            },
            {
                text: "\"Grahhh...\"",
                sound: 'colt_22.mp3'
            },
            {
                text: "\"Bulletstorm!\"",
                sound: 'colt_23.mp3'
            },
        ],
        hitSounds: ['colt_hurt_1.mp3', 'colt_hurt_2.mp3', 'colt_hurt_3.mp3', 'colt_hurt_4.mp3', 'colt_hurt_5.mp3', 'colt_hurt_6.mp3', 'colt_hurt_7.mp3', 'colt_hurt_7.mp3']
    },

    {
        name: "Bull",
        boxImage: require('./static/images/brawlers/bull/bull_1.png'),
        profileImages: [
            require('./static/images/brawlers/bull/bull.png'),
            require('./static/images/brawlers/bull/skin_1.png'),
            require('./static/images/brawlers/bull/skin_2.png'),
            require('./static/images/brawlers/bull/skin_3.png')
        ],
        quotes: [
            {
                text: "\"Don't mess with the bull!\"",
                sound: 'bull_1.mp3'
            },
            {
                text: "\"Yo I'm in charge\"",
                sound: 'bull_2.mp3'
            },
            {
                text: "\"Bull sad...\"",
                sound: 'bull_11.mp3'
            },
            {
                text: "\"You wanna brawl??\"",
                sound: 'bull_3.mp3'
            },
            {
                text: "\"You better Bull-lieve it!\"",
                sound: 'bull_4.mp3'
            },
            {
                text: "\"Bulldozer!\"",
                sound: 'bull_6.mp3'
            },
            {
                text: "\"Charge!\"",
                sound: 'bull_7.mp3'
            },
            {
                text: "\"Angry bull!\"",
                sound: 'bull_8.mp3'
            },
            {
                text: "\"You got me\"",
                sound: 'bull_10.mp3'
            },
            {
                text: "\"Ahhay!\"",
                sound: 'bull_9.mp3'
            },
            {
                text: "\"He he he huu\"",
                sound: 'bull_12.mp3'
            },
            {
                text: "\"Bull's in charge\"",
                sound: 'bull_13.mp3'
            },
            {
                text: "\"No one beats the bull\"",
                sound: 'bull_14.mp3'
            },
            {
                text: "\"And stay down\"",
                sound: 'bull_15.mp3'
            },
            {
                text: "\"HA ha ha ha\"",
                sound: 'bull_16.mp3'
            },
            {
                text: "\"Yeah, that'll teach'ya\"",
                sound: 'bull_17.mp3'
            },
            {
                text: "\"Ha ha\"",
                sound: 'bull_18.mp3'
            },
            {
                text: "Bull Cry",
                sound: 'bull_19.mp3'
            },
        ],
        hitSounds: ['bull_hurt_1.mp3', 'bull_hurt_2.mp3', 'bull_hurt_3.mp3', 'bull_hurt_4.mp3', 'bull_hurt_5.mp3']
    },

    {
        name: "Jessie",
        boxImage: require('./static/images/brawlers/jessie/jessie_1.png'),
        profileImages: [
            require('./static/images/brawlers/jessie/jessie.png'),
            require('./static/images/brawlers/jessie/skin_1.png'),
            require('./static/images/brawlers/jessie/skin_2.png'),
            require('./static/images/brawlers/jessie/skin_3.png')
        ],
        quotes: [
            {
                text: "\"Jess will fix it!\"",
                sound: 'jessie_1.mp3'
            },
            {
                text: "\"Build and brawl!\"",
                sound: 'jessie_2.mp3'
            },
            {
                text: "\"Time to get constructive\"",
                sound: 'jessie_3.mp3'
            },
            {
                text: "\"Where will I put my friend?\"",
                sound: 'jessie_4.mp3'
            },
            {
                text: "\"We can do this!\"",
                sound: 'jessie_5.mp3'
            },
            {
                text: "\"Socket to ya!\"",
                sound: 'jessie_11.mp3'
            },
            {
                text: "\"Say hello to my little friend\"",
                sound: 'jessie_6.mp3'
            },
            {
                text: "\"Sorry...\"",
                sound: 'jessie_7.mp3'
            },
            {
                text: "\"Ha ha ha!\"",
                sound: 'jessie_8.mp3'
            },
            {
                text: "\"Y-Yes!\"",
                sound: 'jessie_9.mp3'
            },
            {
                text: "\"Im No. 1 !\"",
                sound: 'jessie_12.mp3'
            },
            {
                text: "\"Im in the lead\"",
                sound: 'jessie_13.mp3'
            },
            {
                text: "\"Leading score!\"",
                sound: 'jessie_14.mp3'
            },
            {
                text: "\"Technologoy wins\"",
                sound: 'jessie_15.mp3'
            },
            {
                text: "\"Broken beyond repair\"",
                sound: 'jessie_16.mp3'
            },
            {
                text: "\"Dont mess with Jess\"",
                sound: 'jessie_17.mp3'
            },
            {
                text: "\"Woo-Hoo\"",
                sound: 'jessie_18.mp3'
            },
            {
                text: "\"Noo..\"",
                sound: 'jessie_19.mp3'
            },
            {
                text: "\"Constructing\"",
                sound: 'jessie_20.mp3'
            },
            {
                text: "\"Great spot\"",
                sound: 'jessie_21.mp3'
            },
            {
                text: "\"Turret time!\"",
                sound: 'jessie_22.mp3'
            },
        ],
        hitSounds: ['jessie_hurt_1.mp3', 'jessie_hurt_2.mp3', 'jessie_hurt_3.mp3', 'jessie_hurt_4.mp3', 'jessie_hurt_5.mp3', 'jessie_hurt_6.mp3']
    },

    {
        name: "Brock",
        boxImage: require('./static/images/brawlers/brock/brock_1.png'),
        profileImages: [
            require('./static/images/brawlers/brock/brock.png'),
            require('./static/images/brawlers/brock/skin_1.png'),
            require('./static/images/brawlers/brock/skin_2.png'),
            require('./static/images/brawlers/brock/skin_3.png'),
            require('./static/images/brawlers/brock/skin_4.png')
        ],
        quotes: [
            {
                text: "\"Easy\"",
                sound: 'brock_9.mp3'
            },
            {
                text: "\"Whew! Let's go\"",
                sound: 'brock_1.mp3'
            },
            {
                text: "\"Gotta get that loot\"",
                sound: 'brock_2.mp3'
            },
            {
                text: "\"High score!\"",
                sound: 'brock_10.mp3'
            },
            {
                text: "\"Let's do this\"",
                sound: 'brock_3.mp3'
            },
            {
                text: "\"Time to move to the boom box groove\"",
                sound: 'brock_4.mp3'
            },
            {
                text: "\"It's go time\"",
                sound: 'brock_5.mp3'
            },
            {
                text: "\"It's time to level up\"",
                sound: 'brock_6.mp3'
            },
            {
                text: "\"Ok, Ok, you got skills\"",
                sound: 'brock_11.mp3'
            },
            {
                text: "\"Game on\"",
                sound: 'brock_7.mp3'
            },
            {
                text: "\"Move those feet to the boom box beat!\"",
                sound: 'brock_8.mp3'
            },
            {
                text: "\"Brock is OP\"",
                sound: 'brock_12.mp3'
            },
            {
                text: "\"Brock dont stop\"",
                sound: 'brock_13.mp3'
            },
            {
                text: "\"I'm ballin'\"",
                sound: 'brock_14.mp3'
            },
            {
                text: "\"Gotta flex\"",
                sound: 'brock_15.mp3'
            },
            {
                text: "\"I'm on top of my game\"",
                sound: 'brock_16.mp3'
            },
            {
                text: "\"Whoo, take the L'\"",
                sound: 'brock_17.mp3'
            },
            {
                text: "\"Ohh, you got destroyed\"",
                sound: 'brock_18.mp3'
            },
            {
                text: "\"You got wrecked\"",
                sound: 'brock_19.mp3'
            },
            {
                text: "\"Ohh, i was lagging\"",
                sound: 'brock_20.mp3'
            },
            {
                text: "\"Ohh you so lucky!\"",
                sound: 'brock_21.mp3'
            },
            {
                text: "\"Damn, Brock got nerfed\"",
                sound: 'brock_22.mp3'
            },
            {
                text: "\"The box goes BOOM!\"",
                sound: 'brock_23.mp3'
            },
            {
                text: "\"Boom box baby\"",
                sound: 'brock_24.mp3'
            },
            {
                text: "\"Ah yeah, turning up the boom box!\"",
                sound: 'brock_25.mp3'
            },
            {
                text: "\"Rocket rain\"",
                sound: 'brock_26.mp3'
            },

        ],
        hitSounds: ['brock_hurt_1.mp3', 'brock_hurt_2.mp3', 'brock_hurt_3.mp3', 'brock_hurt_4.mp3', 'brock_hurt_5.mp3']
    },

    {
        name: "Dynamike",
        boxImage: require('./static/images/brawlers/dynamike/dynamike_1.png'),
        profileImages: [
            require('./static/images/brawlers/dynamike/dynamike.png'),
            require('./static/images/brawlers/dynamike/skin_1.png'),
            require('./static/images/brawlers/dynamike/skin_2.png'),
        ],
        mechaImages: [
            require('./static/images/brawlers/dynamike/skin_3.png')
        ],
        quotes: [
            {
                text: "\"Kapowee!\"",
                sound: 'dyna_8.mp3'
            },
            {
                text: "\"I got a short fuse\"",
                sound: 'dyna_1.mp3'
            },
            {
                text: "\"Here, birdie birdie birdie\"",
                sound: 'dyna_2.mp3'
            },
            {
                text: "\"Who wants some TNT?\"",
                sound: 'dyna_3.mp3'
            },
            {
                text: "\"Down the mine\"",
                sound: 'dyna_4.mp3'
            },
            {
                text: "\"Yeehihihi\"",
                sound: 'dyna_5.mp3'
            },
            {
                text: "\"Hihiyeh\"",
                sound: 'dyna_6.mp3'
            },
            {
                text: "\"Yaow!\"",
                sound: 'dyna_7.mp3'
            },
            {
                text: "\"Birds are singing\"",
                sound: 'dyna_9.mp3'
            },
            {
                text: "\"Not bad for an old timer\"",
                sound: 'dyna_10.mp3'
            },
            {
                text: "\"Dyno-mite!\"",
                sound: 'dyna_11.mp3'
            },
            {
                text: "\"He he he\"",
                sound: 'dyna_12.mp3'
            },
            {
                text: "\"He ha ha\"",
                sound: 'dyna_13.mp3'
            },
            {
                text: "\"Owww!\"",
                sound: 'dyna_14.mp3'
            },
        ],

        mechaQuotes: [
            {
                text: "\"Kapowee!\"",
                sound: 'dyna_mecha_8.mp3'
            },
            {
                text: "\"I got a short fuse\"",
                sound: 'dyna_mecha_1.mp3'
            },
            {
                text: "\"Here, birdie birdie birdie\"",
                sound: 'dyna_mecha_2.mp3'
            },
            {
                text: "\"Who wants some TNT?\"",
                sound: 'dyna_mecha_3.mp3'
            },
            {
                text: "\"Down the mine\"",
                sound: 'dyna_mecha_4.mp3'
            },
            {
                text: "\"Yeehihihi\"",
                sound: 'dyna_mecha_5.mp3'
            },
            {
                text: "\"Hihiyeh\"",
                sound: 'dyna_mecha_6.mp3'
            },
            {
                text: "\"Yaow!\"",
                sound: 'dyna_mecha_7.mp3'
            },
            {
                text: "\"Birds are singing\"",
                sound: 'dyna_mecha_9.mp3'
            },
            {
                text: "\"Not bad for an old timer\"",
                sound: 'dyna_mecha_10.mp3'
            },
            {
                text: "\"Dyno-mite!\"",
                sound: 'dyna_mecha_11.mp3'
            },
            {
                text: "\"He he he\"",
                sound: 'dyna_mecha_12.mp3'
            },
            {
                text: "\"He ha ha\"",
                sound: 'dyna_mecha_13.mp3'
            },
            {
                text: "\"Owww!\"",
                sound: 'dyna_mecha_14.mp3'
            },
        ],
        hitSounds: ['dyna_hurt_1.mp3', 'dyna_hurt_2.mp3', 'dyna_hurt_3.mp3', 'dyna_hurt_4.mp3', 'dyna_hurt_5.mp3', 'dyna_hurt_6.mp3'],
        mechaHitSounds: ['dyna_mecha_hurt_1.mp3', 'dyna_mecha_hurt_2.mp3', 'dyna_mecha_hurt_3.mp3', 'dyna_mecha_hurt_4.mp3', 'dyna_mecha_hurt_5.mp3', 'dyna_mecha_hurt_6.mp3']
    },

    {
        name: "Bo",
        boxImage: require('./static/images/brawlers/bo/bo_1.png'),
        profileImages: [
            require('./static/images/brawlers/bo/bo.png'),
        ],
        mechaImages: [
            require('./static/images/brawlers/bo/skin_1.png'),
            require('./static/images/brawlers/bo/skin_2.png'),
            require('./static/images/brawlers/bo/skin_3.png')
        ],
        quotes: [
            {
                text: "\"Live strong, as the mountains\"",
                sound: 'bo_1.mp3'
            },
            {
                text: "\"I fight for my ancestors\"",
                sound: 'bo_2.mp3'
            },
            {
                text: "\"I am guided by the spirits\"",
                sound: 'bo_3.mp3'
            },
            {
                text: "\"We must fight for peace!\"",
                sound: 'bo_4.mp3'
            },
            {
                text: "Bo Yells",
                sound: 'bo_5.mp3'
            },
            {
                text: "\"Fly! like an eagle\"",
                sound: 'bo_6.mp3'
            },
            {
                text: "\"Ha!\"",
                sound: 'bo_7.mp3'
            },
            {
                text: "\"Hu!\"",
                sound: 'bo_8.mp3'
            },
            {
                text: "\"May you find peace\"",
                sound: 'bo_9.mp3'
            },
            {
                text: "\"There is much.. to learn\"",
                sound: 'bo_10.mp3'
            },
            {
                text: "\"One breath, one shot\"",
                sound: 'bo_11.mp3'
            },
            {
                text: "\"My mind is clear\"",
                sound: 'bo_12.mp3'
            },
            {
                text: "\"My aim is true\"",
                sound: 'bo_13.mp3'
            },
            {
                text: "\"There is no end, only new beginnings\"",
                sound: 'bo_14.mp3'
            },
            {
                text: "\"I am one with nature\"",
                sound: 'bo_15.mp3'
            },
            {
                text: "\"The spirits are calling my name\"",
                sound: 'bo_16.mp3'
            },
            {
                text: "\"Day and night cannot dwell together\"",
                sound: 'bo_17.mp3'
            },
            {
                text: "\"The is no death, only a change of worlds\"",
                sound: 'bo_18.mp3'
            },
            {
                text: "\"Let your spirit soar\"",
                sound: 'bo_19.mp3'
            },
            {
                text: "\"The wind speaks to me\"",
                sound: 'bo_20.mp3'
            },
            {
                text: "\"I have beed blessed by the spirits\"",
                sound: 'bo_21.mp3'
            },
            {
                text: "\"The weakness of the enemy makes our strength\"",
                sound: 'bo_22.mp3'
            },
            {
                text: "\"Patience is the key\"",
                sound: 'bo_23.mp3'
            },
        ],

        mechaQuotes: [
            {
                text: "\"Live strong, as the mountains\"",
                sound: 'bo_mecha_1.mp3'
            },
            {
                text: "\"I fight for my ancestors\"",
                sound: 'bo_mecha_2.mp3'
            },
            {
                text: "\"I am guided by the spirits\"",
                sound: 'bo_mecha_3.mp3'
            },
            {
                text: "\"We must fight for peace!\"",
                sound: 'bo_mecha_4.mp3'
            },
            {
                text: "Bo Yells",
                sound: 'bo_mecha_5.mp3'
            },
            {
                text: "\"Fly! like an eagle\"",
                sound: 'bo_mecha_6.mp3'
            },
            {
                text: "\"Ha!\"",
                sound: 'bo_mecha_7.mp3'
            },
            {
                text: "\"Hu!\"",
                sound: 'bo_mecha_8.mp3'
            },
            {
                text: "\"May you find peace\"",
                sound: 'bo_mecha_9.mp3'
            },
            {
                text: "\"There is much.. to learn\"",
                sound: 'bo_mecha_10.mp3'
            },
            {
                text: "\"One breath, one shot\"",
                sound: 'bo_mecha_11.mp3'
            },
            {
                text: "\"My mind is clear\"",
                sound: 'bo_mecha_12.mp3'
            },
            {
                text: "\"My aim is true\"",
                sound: 'bo_mecha_13.mp3'
            },
            {
                text: "\"There is no end, only new beginnings\"",
                sound: 'bo_mecha_14.mp3'
            },
            {
                text: "\"I am one with nature\"",
                sound: 'bo_mecha_15.mp3'
            },
            {
                text: "\"The spirits are calling my name\"",
                sound: 'bo_mecha_16.mp3'
            },
            {
                text: "\"Day and night cannot dwell together\"",
                sound: 'bo_mecha_17.mp3'
            },
            {
                text: "\"The is no death, only a change of worlds\"",
                sound: 'bo_mecha_18.mp3'
            },
            {
                text: "\"Let your spirit soar\"",
                sound: 'bo_mecha_19.mp3'
            },
            {
                text: "\"The wind speaks to me\"",
                sound: 'bo_mecha_20.mp3'
            },
            {
                text: "\"I have beed blessed by the spirits\"",
                sound: 'bo_mecha_21.mp3'
            },
            {
                text: "\"The weakness of the enemy makes our strength\"",
                sound: 'bo_mecha_22.mp3'
            },
            {
                text: "\"Patience is the key\"",
                sound: 'bo_mecha_23.mp3'
            },
        ],
        hitSounds: ['bo_hurt_1.mp3', 'bo_hurt_2.mp3', 'bo_hurt_3.mp3', 'bo_hurt_4.mp3'],
        mechaHitSounds: ['bo_mecha_hurt_1.mp3', 'bo_mecha_hurt_2.mp3', 'bo_mecha_hurt_3.mp3', 'bo_mecha_hurt_4.mp3']
    },

    {
        name: "Tick",
        boxImage: require('./static/images/brawlers/tick/tick_1.png'),
        profileImages: [
            require('./static/images/brawlers/tick/tick.png')
        ],
        quotes: [
            {
                text: "\"??@?&!!@£$?!* #1\"",
                sound: 'tick_1.mp3'
            },
            {
                text: "\"??@?&!!@£$?!* #2\"",
                sound: 'tick_2.mp3'
            },
            {
                text: "\"??@?&!!@£$?!* #3\"",
                sound: 'tick_3.mp3'
            },
            {
                text: "\"??@?&!!@£$?!* #4\"",
                sound: 'tick_4.mp3'
            },
            {
                text: "\"??@?&!!@£$?!* #5\"",
                sound: 'tick_5.mp3'
            },
            {
                text: "\"??@?&!!@£$?!* #6\"",
                sound: 'tick_6.mp3'
            }
        ],
        hitSounds: ['tick_hurt_1.mp3', 'tick_hurt_2.mp3', 'tick_hurt_3.mp3']
    },

    {
        name: "8Bit",
        boxImage: require('./static/images/brawlers/8bit/8bit_1.png'),
        profileImages: [
            require('./static/images/brawlers/8bit/8bit.png'),
            require('./static/images/brawlers/8bit/skin_1.png')
        ],
        mechaImages: [
            require('./static/images/brawlers/8bit/skin_2.png')
        ],
        quotes: [
            {
                text: "\"Player 1 get ready\"",
                sound: 'bit_1.mp3'
            },
            {
                text: "\"Let's Go!\"",
                sound: 'bit_3.mp3'
            },
            {
                text: "Jingle #1",
                sound: 'bit_13.mp3'
            },
            {
                text: "\"Player 1 get ready\"",
                sound: 'bit_2.mp3'
            },
            {
                text: "\"New high score!\"",
                sound: 'bit_4.mp3'
            },
            {
                text: "Jingle #2",
                sound: 'bit_15.mp3'
            },
            {
                text: "\"Game... NOT over\"",
                sound: 'bit_5.mp3'
            },
            {
                text: "\"You win!\"",
                sound: 'bit_9.mp3'
            },
            {
                text: "Jingle #3",
                sound: 'bit_12.mp3'
            },
            {
                text: "\"Well done!\"",
                sound: 'bit_10.mp3'
            },
            {
                text: "\"You lose...!\"",
                sound: 'bit_7.mp3'
            },
            {
                text: "Jingle #4",
                sound: 'bit_14.mp3'
            },
            {
                text: "\"Mission failed\"",
                sound: 'bit_8.mp3'
            },
            {
                text: "\"Shutting down jingle\"",
                sound: 'bit_6.mp3'
            },
            {
                text: "Cry Jingle",
                sound: 'bit_11.mp3'
            },
        ],
        mechaQuotes: [
            {
                text: "\"Having a fun time!\"",
                sound: 'bit_virus_1.mp3'
            },
            {
                text: "\"Behold! My circle of power!\"",
                sound: 'bit_virus_2.mp3'
            },
            {
                text: "\"Come get some, yum yum!\"",
                sound: 'bit_virus_3.mp3'
            },
            {
                text: "\"I eat Brawlers for breakfast!\"",
                sound: 'bit_virus_4.mp3'
            },
            {
                text: "\"I am not a bug, I am a feature!\"",
                sound: 'bit_virus_5.mp3'
            },
            {
                text: "\"You better run away\"",
                sound: 'bit_virus_6.mp3'
            },
            {
                text: "\"I'm one mean green machine\"",
                sound: 'bit_virus_7.mp3'
            },
            {
                text: "\"No happy, oh oh be sad!\"",
                sound: 'bit_virus_8.mp3'
            },
            {
                text: "\"I will de-de-destroy yo-o-o-u!\"",
                sound: 'bit_virus_9.mp3'
            },
            {
                text: "\"I am the leader of everything ever\"",
                sound: 'bit_virus_10.mp3'
            },
            {
                text: "\"I am too good for this game\"",
                sound: 'bit_virus_11.mp3'
            },
            {
                text: "\"Who's in the lead? I'm in the lead!\"",
                sound: 'bit_virus_12.mp3'
            },
            {
                text: "Laughs #1",
                sound: 'bit_virus_13.mp3'
            },
            {
                text: "\"Evil wins again\"",
                sound: 'bit_virus_14.mp3'
            },
            {
                text: "\"Laughs #2\"",
                sound: 'bit_virus_15.mp3'
            },
            {
                text: "\"All I do is win, all you do is lose!\"",
                sound: 'bit_virus_16.mp3'
            },
            {
                text: "\"Laughs #3\"",
                sound: 'bit_virus_17.mp3'
            },
            {
                text: "\"Can't divide by zero!\"",
                sound: 'bit_virus_18.mp3'
            },
            {
                text: "\"Out of memory!\"",
                sound: 'bit_virus_19.mp3'
            },
            {
                text: "Groans #1",
                sound: 'bit_virus_20.mp3'
            },
            {
                text: "\"Groans #2\"",
                sound: 'bit_virus_21.mp3'
            },
        ],
        hitSounds: ['bit_hurt_1.mp3', 'bit_hurt_2.mp3', 'bit_hurt_3.mp3', 'bit_hurt_4.mp3', 'bit_hurt_5.mp3'],
        mechaHitSounds: ['bit_virus_hurt_1.mp3', 'bit_virus_hurt_2.mp3', 'bit_virus_hurt_3.mp3']
    },

    {
        name: "Emz",
        boxImage: require('./static/images/brawlers/emz/emz_1.png'),
        profileImages: [
            require('./static/images/brawlers/emz/emz.png')
        ],
        quotes: [
            {
                text: "\"#I'm so gonna win everything\"",
                sound: 'emz_1.mp3'
            },
            {
                text: "\"I'm so overpowered, about this\"",
                sound: 'emz_2.mp3'
            },
            {
                text: "\"#Loser\"",
                sound: 'emz_18.mp3'
            },
            {
                text: "\"Ha ha ha ha ha ...\"",
                sound: 'emz_25.mp3'
            },
            {
                text: "\"I'm only here for the trophies\"",
                sound: 'emz_3.mp3'
            },
            {
                text: "\"Ugh, did someone here unfollow me?\"",
                sound: 'emz_4.mp3'
            },
            {
                text: "\"Look at me! Ugh, not from that angle!\"",
                sound: 'emz_5.mp3'
            },
            {
                text: "\"#Winning!\"",
                sound: 'emz_6.mp3'
            },
            {
                text: "\"Time to update my blog\"",
                sound: 'emz_7.mp3'
            },
            {
                text: "\"You are so, bad, oh my god\"",
                sound: 'emz_13.mp3'
            },
            {
                text: "\"#No filter\"",
                sound: 'emz_14.mp3'
            },
            {
                text: "\"You totally deserved that\"",
                sound: 'emz_15.mp3'
            },
            {
                text: "\"#Boring\"",
                sound: 'emz_16.mp3'
            },
            {
                text: "\"Eat my scrunchie!\"",
                sound: 'emz_17.mp3'
            },
            {
                text: "\"Are you serious?!\"",
                sound: 'emz_19.mp3'
            },
            {
                text: "\"I won't like your next post!\"",
                sound: 'emz_20.mp3'
            },
            {
                text: "\"Try my new perfume\"",
                sound: 'emz_21.mp3'
            },
            {
                text: "\"Gotta get rid of that smell\"",
                sound: 'emz_22.mp3'
            },
            {
                text: "\"I can finally breathe again\"",
                sound: 'emz_23.mp3'
            },
            {
                text: "\"Time for a detox\"",
                sound: 'emz_24.mp3'
            },
            {
                text: "\"They say, 'she's too wrapped up in herself'. Ugh, #Haters\"",
                sound: 'emz_26.mp3'
            },
            {
                text: "\"You're like totally not getting a friendship bracelet\"",
                sound: 'emz_27.mp3'
            },
            {
                text: "\"Try some Zom-bie, by me\"",
                sound: 'emz_28.mp3'
            },
            {
                text: "Emz giggles",
                sound: 'emz_29.mp3'
            },
        ],
        hitSounds: ['emz_hurt_1.mp3', 'emz_hurt_2.mp3', 'emz_hurt_3.mp3', 'emz_hurt_4.mp3', 'emz_hurt_5.mp3', 'emz_hurt_6.mp3', 'emz_hurt_7.mp3']
    },

    /* --------------- END COMMON --------------- */

    /* --------------- START RARE --------------- */

    {
        name: "El Primo",
        boxImage: require('./static/images/brawlers/primo/primo_1.png'),
        profileImages: [
            require('./static/images/brawlers/primo/primo.png'),
            require('./static/images/brawlers/primo/skin_1.png'),
            require('./static/images/brawlers/primo/skin_2.png'),
            require('./static/images/brawlers/primo/skin_3.png')
        ],
        quotes: [
            {
                text: "\"El Primo!\"",
                sound: 'primo_3.mp3'
            },
            {
                text: "\"Grahhh...!\"",
                sound: 'primo_1.mp3'
            },
            {
                text: "\"Soy el mejor!\"",
                sound: 'primo_8.mp3'
            },
            {
                text: "\"Showtime\"",
                sound: 'primo_2.mp3'
            },
            {
                text: "\"You lose...!\"",
                sound: 'primo_13.mp3'
            },
            {
                text: "\"Ha ha ha ha ha!\"",
                sound: 'primo_4.mp3'
            },
            {
                text: "\"Buenas noches!\"",
                sound: 'primo_12.mp3'
            },
            {
                text: "\"For pain and for glory!\"",
                sound: 'primo_5.mp3'
            },
            {
                text: "\"Vámonos!\"",
                sound: 'primo_6.mp3'
            },
            {
                text: "\"Adiós, amigos!..\"",
                sound: 'primo_9.mp3'
            },
            {
                text: "\"Me muero!..\"",
                sound: 'primo_10.mp3'
            },
            {
                text: "\"Adiós mundo cruel!\"",
                sound: 'primo_11.mp3'
            },
            {
                text: "\"El Primo, is here\"",
                sound: 'primo_7.mp3'
            },
            {
                text: "\"Eeel Primoo!\"",
                sound: 'primo_14.mp3'
            },
            {
                text: "\"Primoo!\"",
                sound: 'primo_15.mp3'
            },
            {
                text: "\"Hu hu hu!\"",
                sound: 'primo_16.mp3'
            },
            {
                text: "\"Macho punch\"",
                sound: 'primo_17.mp3'
            },
            {
                text: "\"Primo punch\"",
                sound: 'primo_18.mp3'
            },
            {
                text: "\"Fists of fury\"",
                sound: 'primo_19.mp3'
            },
            {
                text: "\"El campeón!\"",
                sound: 'primo_22.mp3'
            },
        ],
        hitSounds: ['primo_hurt_1.mp3', 'primo_hurt_2.mp3', 'primo_hurt_3.mp3', 'primo_hurt_4.mp3']
    },

    {
        name: "Barley",
        boxImage: require('./static/images/brawlers/barley/barley_1.png'),
        profileImages: [
            require('./static/images/brawlers/barley/barley.png'),
            require('./static/images/brawlers/barley/skin_1.png'),
            require('./static/images/brawlers/barley/skin_2.png'),
            require('./static/images/brawlers/barley/skin_3.png'),
            require('./static/images/brawlers/barley/skin_4.png'),
            require('./static/images/brawlers/barley/skin_5.png')
        ],
        quotes: [
            {
                text: "\"I'm ready to serve\"",
                sound: 'barley_1.mp3'
            },
            {
                text: "\"Another round?\"",
                sound: 'barley_2.mp3'
            },
            {
                text: "\"Ready for another?\"",
                sound: 'barley_3.mp3'
            },
            {
                text: "\"New customers!\"",
                sound: 'barley_4.mp3'
            },
            {
                text: "\"Whoopsie!\"",
                sound: 'barley_5.mp3'
            },
            {
                text: "\"A little... strong?\"",
                sound: 'barley_10.mp3'
            },
            {
                text: "\"Awfully sorry\"",
                sound: 'barley_11.mp3'
            },
            {
                text: "\"Ho ho ho!\"",
                sound: 'barley_6.mp3'
            },
            {
                text: "\"You've been served\"",
                sound: 'barley_7.mp3'
            },
            {
                text: "\"This one's on the house!\"",
                sound: 'barley_9.mp3'
            },
            {
                text: "\"Its been a pleasure\"",
                sound: 'barley_12.mp3'
            },
            {
                text: "\"Happy to serve\"",
                sound: 'barley_13.mp3'
            },
            {
                text: "\"Bottoms up\"",
                sound: 'barley_14.mp3'
            },
            {
                text: "\"Oops, my bad\"",
                sound: 'barley_15.mp3'
            },
            {
                text: "\"Its been lovley\"",
                sound: 'barley_16.mp3'
            },
        ],
        hitSounds: ['barley_hurt_1.mp3', 'barley_hurt_2.mp3', 'barley_hurt_3.mp3', 'barley_hurt_4.mp3']
    },

    {
        name: "Poco",
        boxImage: require('./static/images/brawlers/poco/poco_1.png'),
        profileImages: [
            require('./static/images/brawlers/poco/poco.png'),
            require('./static/images/brawlers/poco/skin_1.png'),
            require('./static/images/brawlers/poco/skin_2.png')
        ],
        quotes: [
            {
                text: "\"Feel the power of music!\"",
                sound: 'poco_1.mp3'
            },
            {
                text: "\"Let's rock!\"",
                sound: 'poco_2.mp3'
            },
            {
                text: "\"Give me a beat!\"",
                sound: 'poco_3.mp3'
            },
            {
                text: "\"Let's get this party started!\"",
                sound: 'poco_4.mp3'
            },
            {
                text: "\"I'm turning it up to eleven!\"",
                sound: 'poco_5.mp3'
            },
            {
                text: "\"Hey! You broke my guitar!\"",
                sound: 'poco_6.mp3'
            },
            {
                text: "\"Power chord!\"",
                sound: 'poco_7.mp3'
            },
            {
                text: "\"Sweet sounds!\"",
                sound: 'poco_8.mp3'
            },
            {
                text: "\"Lead guitar for the win!\"",
                sound: 'poco_9.mp3'
            },
            {
                text: "\"Musical mayhem!\"",
                sound: 'poco_10.mp3'
            },
            {
                text: "\"I got a bone to pick\"",
                sound: 'poco_11.mp3'
            },
            {
                text: "\"I'm bailing\"",
                sound: 'poco_12.mp3'
            },
            {
                text: "\"Still friends?\"",
                sound: 'poco_13.mp3'
            },
            {
                text: "\"Wow, that sucks\"",
                sound: 'poco_14.mp3'
            },
            {
                text: "\"Too bad man...\"",
                sound: 'poco_15.mp3'
            },
            {
                text: "\"Poco goes loco!\"",
                sound: 'poco_16.mp3'
            },
            {
                text: "\"I'm stoked!\"",
                sound: 'poco_17.mp3'
            },
        ],
        hitSounds: ['poco_hurt_3.mp3', 'poco_hurt_2.mp3', 'poco_hurt_3.mp3', 'poco_hurt_4.mp3']
    },

    {
        name: "Rosa",
        boxImage: require('./static/images/brawlers/rosa/rosa_1.png'),
        profileImages: [
            require('./static/images/brawlers/rosa/rosa.png')
        ],
        quotes: [
            {
                text: "\"Aloe aloe aloe\"",
                sound: 'rosa_1.mp3'
            },
            {
                text: "\"Time to take care of the weeds!\"",
                sound: 'rosa_2.mp3'
            },
            {
                text: "\"Rosa is my name, botany is my game!\"",
                sound: 'rosa_3.mp3'
            },
            {
                text: "\"Ah! Fungus!\"",
                sound: 'rosa_10.mp3'
            },
            {
                text: "\"Petals to the meadow!\"",
                sound: 'rosa_4.mp3'
            },
            {
                text: "\"Flower power!\"",
                sound: 'rosa_5.mp3'
            },
            {
                text: "\"Kabloom!!\"",
                sound: 'rosa_6.mp3'
            },
            {
                text: "\"Make like a tree and leaf\"",
                sound: 'rosa_9.mp3'
            },
            {
                text: "\"Haha! Beaten by a boxing botanist!\"",
                sound: 'rosa_11.mp3'
            },
            {
                text: "\"Time to blossom!\"",
                sound: 'rosa_7.mp3'
            },
            {
                text: "\"Botany for the win!\"",
                sound: 'rosa_8.mp3'
            },
            {
                text: "\"Ready for composting\"",
                sound: 'rosa_12.mp3'
            },
            {
                text: "\"You grow girl\"",
                sound: 'rosa_13.mp3'
            },
            {
                text: "\"I rose to the occasion\"",
                sound: 'rosa_14.mp3'
            },
            {
                text: "\"Tempest florally\"",
                sound: 'rosa_15.mp3'
            },
            {
                text: "\"Noo!..\"",
                sound: 'rosa_16.mp3'
            },
            {
                text: "\"I'm wilting!\"",
                sound: 'rosa_17.mp3'
            },
            {
                text: "\"Weed'em and reap, darling\"",
                sound: 'rosa_18.mp3'
            },
        ],
        hitSounds: ['rosa_hurt_1.mp3', 'rosa_hurt_2.mp3', 'rosa_hurt_3.mp3', 'rosa_hurt_4.mp3', 'rosa_hurt_5.mp3', 'rosa_hurt_6.mp3', 'rosa_hurt_7.mp3']
    },

    /* --------------- END RARE --------------- */

    /* --------------- START SUPER RARE --------------- */

    {
        name: "Rico",
        boxImage: require('./static/images/brawlers/rico/rico_1.png'),
        profileImages: [
            require('./static/images/brawlers/rico/rico.png'),
            require('./static/images/brawlers/rico/skin_1.png'),
            require('./static/images/brawlers/rico/skin_2.png'),
            require('./static/images/brawlers/rico/skin_3.png')
        ],
        quotes: [
            {
                text: "\"I do not come in peace\"",
                sound: 'rico_1.mp3'
            },
            {
                text: "\"Ready for battle\"",
                sound: 'rico_2.mp3'
            },
            {
                text: "\"Ha ha ha ha\"",
                sound: 'rico_7.mp3'
            },
            {
                text: "\"Let's go\"",
                sound: 'rico_3.mp3'
            },
            {
                text: "\"Game over..\"",
                sound: 'rico_10.mp3'
            },
            {
                text: "\"Ow ow ow ow...!\"",
                sound: 'rico_9.mp3'
            },
            {
                text: "\"Do not run away\"",
                sound: 'rico_4.mp3'
            },
            {
                text: "\"Go team\"",
                sound: 'rico_5.mp3'
            },
            {
                text: "\"Robot power\"",
                sound: 'rico_11.mp3'
            },
            {
                text: "\"Teamwork for the win\"",
                sound: 'rico_6.mp3'
            },
            {
                text: "\"I will be back\"",
                sound: 'rico_8.mp3'
            },
            {
                text: "\"Total Pwnage\"",
                sound: 'rico_12.mp3'
            },
            {
                text: "\"I am ridiculously amazing\"",
                sound: 'rico_13.mp3'
            },
            {
                text: "\"I got skills to pay the bills\"",
                sound: 'rico_14.mp3'
            },
            {
                text: "\"I am not sorry\"",
                sound: 'rico_15.mp3'
            },
            {
                text: "\"I got you\"",
                sound: 'rico_16.mp3'
            },
            {
                text: "\"You have been eliminated\"",
                sound: 'rico_17.mp3'
            },
            {
                text: "\"Soorryy..\"",
                sound: 'rico_18.mp3'
            },
            {
                text: "\"That must have hurt\"",
                sound: 'rico_19.mp3'
            },
            {
                text: "\"You lose, I win\"",
                sound: 'rico_20.mp3'
            },
            {
                text: "\"Sadness\"",
                sound: 'rico_21.mp3'
            },
            {
                text: "\"Domination mode engaged\"",
                sound: 'rico_22.mp3'
            },
            {
                text: "\"Play time is over\"",
                sound: 'rico_23.mp3'
            },
            {
                text: "\"Danger, Danger\"",
                sound: 'rico_24.mp3'
            },
            {
                text: "\"Unleashing ultimate power\"",
                sound: 'rico_25.mp3'
            },
            {
                text: "\"Run away, think of your future\"",
                sound: 'rico_26.mp3'
            },
            {
                text: "\"Just a regular day at the office\"",
                sound: 'rico_27.mp3'
            },
        ],
        hitSounds: ['rico_hurt_1.mp3', 'rico_hurt_2.mp3', 'rico_hurt_3.mp3', 'rico_hurt_4.mp3', 'rico_hurt_5.mp3']
    },

    {
        name: "Darryl",
        boxImage: require('./static/images/brawlers/darryl/darryl_1.png'),
        profileImages: [
            require('./static/images/brawlers/darryl/darryl.png'),
            require('./static/images/brawlers/darryl/skin_1.png')
        ],
        quotes: [],
        hitSounds: []
    },

    {
        name: "Penny",
        boxImage: require('./static/images/brawlers/penny/penny_1.png'),
        profileImages: [
            require('./static/images/brawlers/penny/penny.png'),
            require('./static/images/brawlers/penny/skin_1.png'),
            require('./static/images/brawlers/penny/skin_2.png')
        ],
        quotes: [
            {
                text: "\"Let's go!\"",
                sound: 'penny_1.mp3'
            },
            {
                text: "\"Yeah!\"",
                sound: 'penny_2.mp3'
            },
            {
                text: "\"Ha ha!\"",
                sound: 'penny_3.mp3'
            },
            {
                text: "\"Hi hi hi hi hi..\"",
                sound: 'penny_4.mp3'
            },
            {
                text: "\"Number one!\"",
                sound: 'penny_8.mp3'
            },
            {
                text: "\"He he he!\"",
                sound: 'penny_6.mp3'
            },
            {
                text: "Penny cackles",
                sound: 'penny_5.mp3'
            },
            {
                text: "\"I'm the best!\"",
                sound: 'penny_7.mp3'
            },
            {
                text: "\"Bye bye\"",
                sound: 'penny_9.mp3'
            },
            {
                text: "\"He he he he he\"",
                sound: 'penny_10.mp3'
            },
            {
                text: "\"Y-Yes\"",
                sound: 'penny_11.mp3'
            },
            {
                text: "\"Ha ha ha ha ha\"",
                sound: 'penny_12.mp3'
            },
        ],
        hitSounds: ['penny_hurt_1.mp3', 'penny_hurt_2.mp3', 'penny_hurt_3.mp3']
    },

    {
        name: "Carl",
        boxImage: require('./static/images/brawlers/carl/carl_1.png'),
        profileImages: [
            require('./static/images/brawlers/carl/carl.png'),
            require('./static/images/brawlers/carl/skin_1.png'),
            require('./static/images/brawlers/carl/skin_2.png'),
            require('./static/images/brawlers/carl/skin_3.png'),
            require('./static/images/brawlers/carl/skin_4.png')
        ],
        quotes: [
            {
                text: "\"Ha ha! Geology rocks\"",
                sound: 'carl_1.mp3'
            },
            {
                text: "\"I'm detecting seismic activity!\"",
                sound: 'carl_2.mp3'
            },
            {
                text: "\"The rocks, speak to me\"",
                sound: 'carl_3.mp3'
            },
            {
                text: "\"So much ignorance, but so little time...\"",
                sound: 'carl_4.mp3'
            },
            {
                text: "\"Let's uncover the mystery of history!\"",
                sound: 'carl_5.mp3'
            },
            {
                text: "\"Carl is my name, geology is my game\"",
                sound: 'carl_6.mp3'
            },
            {
                text: "\"Triangulation, rocks the nation\"",
                sound: 'carl_7.mp3'
            },
            {
                text: "\"He he ha ha ha...\"",
                sound: 'carl_8.mp3'
            },
            {
                text: "\"Awawasa!$!@#\"",
                sound: 'carl_9.mp3'
            },
            {
                text: "\"Ne Ha ha\"",
                sound: 'carl_10.mp3'
            },
            {
                text: "\"Ah! I'm eroding!\"",
                sound: 'carl_11.mp3'
            },
            {
                text: "\"Sub-optimal performance\"",
                sound: 'carl_12.mp3'
            },
            {
                text: "\"Smoldering boulders\"",
                sound: 'carl_13.mp3'
            },
            {
                text: "\"No no no!..\"",
                sound: 'carl_14.mp3'
            },
            {
                text: "\"I guess, you plateaued\"",
                sound: 'carl_15.mp3'
            },
            {
                text: "\"Evolution, it must've passed you by\"",
                sound: 'carl_16.mp3'
            },
            {
                text: "\"Will you learn, highly doubtful\"",
                sound: 'carl_17.mp3'
            },
            {
                text: "\"Your best is my worst\"",
                sound: 'carl_18.mp3'
            },
            {
                text: "\"He he, my calculations are always correct\"",
                sound: 'carl_19.mp3'
            },
            {
                text: "\"Eureka!\"",
                sound: 'carl_20.mp3'
            },
            {
                text: "\"Truly, groundbreaking\"",
                sound: 'carl_21.mp3'
            },
            {
                text: "\"Ha ha! Winning by a landslide\"",
                sound: 'carl_22.mp3'
            },
            {
                text: "\"Carl-culating awesomeness level\"",
                sound: 'carl_23.mp3'
            },
        ],
        hitSounds: ['carl_hurt_1.mp3', 'carl_hurt_2.mp3', 'carl_hurt_3.mp3', 'carl_hurt_4.mp3', 'carl_hurt_5.mp3']
    },

    /* --------------- END SUPER RARE --------------- */

    /* --------------- START EPIC --------------- */

    {
        name: "Piper",
        boxImage: require('./static/images/brawlers/piper/piper_1.png'),
        profileImages: [
            require('./static/images/brawlers/piper/piper.png'),
            require('./static/images/brawlers/piper/skin_1.png'),
            require('./static/images/brawlers/piper/skin_2.png'),
            require('./static/images/brawlers/piper/skin_3.png')
        ],
        quotes: [
            {
                text: "\"I'm sugar and spice\"",
                sound: 'piper_1.mp3'
            },
            {
                text: "\"Come get it\"",
                sound: 'piper_2.mp3'
            },
            {
                text: "\"This ain't my first rodeo\"",
                sound: 'piper_3.mp3'
            },
            {
                text: "\"Gimme some sugar!\"",
                sound: 'piper_4.mp3'
            },
            {
                text: "\"Oh my!\"",
                sound: 'piper_5.mp3'
            },
            {
                text: "\"Ha ha ha ha..\"",
                sound: 'piper_11.mp3'
            },
            {
                text: "\"Ha, kiss my grits!\"",
                sound: 'piper_6.mp3'
            },
            {
                text: "Piper cackles",
                sound: 'piper_7.mp3'
            },
            {
                text: "\"Bless your heart\"",
                sound: 'piper_8.mp3'
            },
            {
                text: "\"Goodness gracious!\"",
                sound: 'piper_9.mp3'
            },
            {
                text: "\"Oh my stars\"",
                sound: 'piper_10.mp3'
            },
            {
                text: "\"Ah, sweetie?\"",
                sound: 'piper_12.mp3'
            },
            {
                text: "\"You're welcome\"",
                sound: 'piper_13.mp3'
            },
            {
                text: "\"Ah, too bad\"",
                sound: 'piper_14.mp3'
            },
            {
                text: "\"Ah, stick a fork in me, I'm done\"",
                sound: 'piper_15.mp3'
            },
        ],
        hitSounds: ['piper_hurt_1.mp3', 'piper_hurt_2.mp3', 'piper_hurt_3.mp3', 'piper_hurt_4.mp3', 'piper_hurt_5.mp3', 'piper_hurt_6.mp3']
    },

    {
        name: "Pam",
        boxImage: require('./static/images/brawlers/pam/pam_1.png'),
        profileImages: [
            require('./static/images/brawlers/pam/pam.png')
        ],
        quotes: [
            {
                text: "\"My tools, ain't for fools!\"",
                sound: 'pam_1.mp3'
            },
            {
                text: "\"Let's get scrappy!\"",
                sound: 'pam_2.mp3'
            },
            {
                text: "\"Wham bam, here comes Pam!\"",
                sound: 'pam_3.mp3'
            },
            {
                text: "\"Come to mama!\"",
                sound: 'pam_4.mp3'
            },
            {
                text: "\"Rubbish rampage!\"",
                sound: 'pam_5.mp3'
            },
            {
                text: "\"Who's your mama!\"",
                sound: 'pam_6.mp3'
            },
            {
                text: "\"You got scrapped\"",
                sound: 'pam_7.mp3'
            },
            {
                text: "\"It's just a scratch\"",
                sound: 'pam_8.mp3'
            },
            {
                text: "\"Repair, reuse, recycle!\"",
                sound: 'pam_9.mp3'
            },
            {
                text: "\"Come on, we can do this!\"",
                sound: 'pam_10.mp3'
            },
            {
                text: "\"Time to fix this mess!\"",
                sound: 'pam_11.mp3'
            },
            {
                text: "\"Repair, reuse, recycle\"",
                sound: 'pam_13.mp3'
            },
            {
                text: "\"I'll fix you up\"",
                sound: 'pam_14.mp3'
            },
            {
                text: "\"Ooh, mama's gotta rest\"",
                sound: 'pam_15.mp3'
            },
            {
                text: "\"Ah, scrap it\"",
                sound: 'pam_16.mp3'
            },
            {
                text: "\"No!..\"",
                sound: 'pam_17.mp3'
            },
            {
                text: "\"Not tough enough\"",
                sound: 'pam_18.mp3'
            },
            {
                text: "\"Nothing to salvage\"",
                sound: 'pam_19.mp3'
            },
            {
                text: "\"Don't be crying\"",
                sound: 'pam_20.mp3'
            },
            {
                text: "\"This is my scrap yard\"",
                sound: 'pam_23.mp3'
            },
            {
                text: "\"Top of the scrap heap\"",
                sound: 'pam_24.mp3'
            },
        ],
        hitSounds: ['pam_hurt_1.mp3', 'pam_hurt_2.mp3', 'pam_hurt_3.mp3', 'pam_hurt_4.mp3', 'pam_hurt_5.mp3']
    },

    {
        name: "Frank",
        boxImage: require('./static/images/brawlers/frank/frank_1.png'),
        profileImages: [
            require('./static/images/brawlers/frank/frank.png'),
            require('./static/images/brawlers/frank/skin_1.png'),
            require('./static/images/brawlers/frank/skin_2.png')
        ],
        quotes: [
            {
                text: "Laugh",
                sound: 'frank_2.mp3'
            },
            {
                text: "Groan #1",
                sound: 'frank_1.mp3'
            },
            {
                text: "Groan #2",
                sound: 'frank_3.mp3'
            },
            {
                text: "Groan #3",
                sound: 'frank_4.mp3'
            },
            {
                text: "Groan #4",
                sound: 'frank_5.mp3'
            },
        ],
        hitSounds: ['frank_hurt_1.mp3']
    },

    {
        name: "Bibi",
        boxImage: require('./static/images/brawlers/bibi/bibi_1.png'),
        profileImages: [
            require('./static/images/brawlers/bibi/bibi.png'),
            require('./static/images/brawlers/bibi/skin_1.png')
        ],
        quotes: [
            {
                text: "\"Batter up!\"",
                sound: 'bibi_1.mp3'
            },
            {
                text: "\"Smack attack!\"",
                sound: 'bibi_2.mp3'
            },
            {
                text: "\"Bibi Bye Bye...\"",
                sound: 'bibi_7.mp3'
            },
            {
                text: "\"Tough as nails, hard as a rock\"",
                sound: 'bibi_3.mp3'
            },
            {
                text: "\"Let's play!\"",
                sound: 'bibi_4.mp3'
            },
            {
                text: "\"Somebody order a knuckle sandwich?\"",
                sound: 'bibi_5.mp3'
            },
            {
                text: "\"Mr. Bat wants to play\"",
                sound: 'bibi_6.mp3'
            },
            {
                text: "\"Sayonara\"",
                sound: 'bibi_8.mp3'
            },
            {
                text: "\"Watch it nerd!\"",
                sound: 'bibi_9.mp3'
            },
            {
                text: "\"Home run!\"",
                sound: 'bibi_10.mp3'
            },
            {
                text: "\"Brilliant Bibi\"",
                sound: 'bibi_11.mp3'
            },
            {
                text: "\"Can't touch this\"",
                sound: 'bibi_12.mp3'
            },
            {
                text: "\"I love you Mr. Bat\"",
                sound: 'bibi_13.mp3'
            },
            {
                text: "\"I'm a cool cat\"",
                sound: 'bibi_14.mp3'
            },
            {
                text: "\"Mr. Bat says hi\"",
                sound: 'bibi_15.mp3'
            },
            {
                text: "\"Oh my gosh!\"",
                sound: 'bibi_16.mp3'
            },
            {
                text: "\"Swing and a miss\"",
                sound: 'bibi_17.mp3'
            },
            {
                text: "\"Strike out\"",
                sound: 'bibi_18.mp3'
            },
            {
                text: "\"Chew on this!\"",
                sound: 'bibi_19.mp3'
            },
            {
                text: "\"Bubble trouble!\"",
                sound: 'bibi_20.mp3'
            },
            {
                text: "\"Konnichi-whack!\"",
                sound: 'bibi_21.mp3'
            },
            {
                text: "\"Base bubble!\"",
                sound: 'bibi_22.mp3'
            },
        ],
        hitSounds: ['bibi_hurt_1.mp3', 'bibi_hurt_2.mp3', 'bibi_hurt_3.mp3', 'bibi_hurt_4.mp3']
    },

    {
        name: "Bea",
        boxImage: require('./static/images/brawlers/bea/bea_1.png'),
        profileImages: [
            require('./static/images/brawlers/bea/bea.png'),
            require('./static/images/brawlers/bea/skin_1.png')
        ],
        quotes: [
            {
                text: "\"Hay Ya!\"",
                sound: 'bea_1.mp3'
            },
            {
                text: "\"Think of the ecosystem\"",
                sound: 'bea_2.mp3'
            },
            {
                text: "\"Sweet nectar\"",
                sound: 'bea_7.mp3'
            },
            {
                text: "\"This is most unfortunate\"",
                sound: 'bea_3.mp3'
            },
            {
                text: "\"The hive never forgets!\"",
                sound: 'bea_4.mp3'
            },
            {
                text: "\"Bee-utiful\"",
                sound: 'bea_5.mp3'
            },
            {
                text: "\"Bee-utiful #2\"",
                sound: 'bea_6.mp3'
            },
            {
                text: "\"I feel like the queen bee!\"",
                sound: 'bea_8.mp3'
            },
            {
                text: "\"Hive-five!\"",
                sound: 'bea_9.mp3'
            },
            {
                text: "\"I'm buzzing!\"",
                sound: 'bea_10.mp3'
            },
            {
                text: "\"Bee-lieve in yourself\"",
                sound: 'bea_11.mp3'
            },
            {
                text: "\"I'm the bee's knees\"",
                sound: 'bea_12.mp3'
            },
            {
                text: "\"Let's go explore!\"",
                sound: 'bea_13.mp3'
            },
            {
                text: "\"Let's see what's buzzing!\"",
                sound: 'bea_14.mp3'
            },
            {
                text: "\"What a fascinating biosphere\"",
                sound: 'bea_15.mp3'
            },
            {
                text: "\"Bee cool\"",
                sound: 'bea_16.mp3'
            },
            {
                text: "\"So many specimens to discover!\"",
                sound: 'bea_17.mp3'
            },
            {
                text: "\"Bee free!\"",
                sound: 'bea_18.mp3'
            },
            {
                text: "\"Don't call me honey\"",
                sound: 'bea_19.mp3'
            },
            {
                text: "\"For the colony!\"",
                sound: 'bea_20.mp3'
            },
            {
                text: "\"Hope you like bees!\"",
                sound: 'bea_21.mp3'
            },
        ],
        hitSounds: ['bea_hurt_1.mp3', 'bea_hurt_2.mp3', 'bea_hurt_3.mp3', 'bea_hurt_4.mp3', 'bea_hurt_5.mp3']
    },

    /* --------------- END EPIC --------------- */

    /* --------------- START MYTHIC --------------- */

    {
        name: "Mortis",
        boxImage: require('./static/images/brawlers/mortis/mortis_1.png'),
        profileImages: [
            require('./static/images/brawlers/mortis/mortis.png'),
            require('./static/images/brawlers/mortis/skin_1.png'),
            require('./static/images/brawlers/mortis/skin_2.png'),
            require('./static/images/brawlers/mortis/skin_3.png')
        ],
        quotes: [
            {
                text: "\"I bring you the gift of darkness!\"",
                sound: 'mortis_1.mp3'
            },
            {
                text: "\"Mortis, bringer of doom!\"",
                sound: 'mortis_2.mp3'
            },
            {
                text: "\"I am a creature of the night!\"",
                sound: 'mortis_3.mp3'
            },
            {
                text: "\"Have much fear, Mortis is here!\"",
                sound: 'mortis_4.mp3'
            },
            {
                text: "\"Haaa! ha ha ha ha\"",
                sound: 'mortis_5.mp3'
            },
            {
                text: "\"Bear witness to my fitness!\"",
                sound: 'mortis_6.mp3'
            },
            {
                text: "\"Witness my power!\"",
                sound: 'mortis_7.mp3'
            },
            {
                text: "Mortis taunts",
                sound: 'mortis_8.mp3'
            },
            {
                text: "\"Feel my wrath!\"",
                sound: 'mortis_9.mp3'
            },
            {
                text: "\"Mortis, the magnificent!\"",
                sound: 'mortis_10.mp3'
            },
            {
                text: "\"Your soul is mine!\"",
                sound: 'mortis_11.mp3'
            },
            {
                text: "\"Ha ha haaaa\"",
                sound: 'mortis_12.mp3'
            },
            {
                text: "\"Creatures of the night!\"",
                sound: 'mortis_13.mp3'
            },
            {
                text: "\"Bringer of bats!\"",
                sound: 'mortis_14.mp3'
            },
            {
                text: "\"Fly free my pretties!\"",
                sound: 'mortis_15.mp3'
            },
            {
                text: "\"Slice and dice!\"",
                sound: 'mortis_16.mp3'
            },
            {
                text: "\"Dashingly handsome!\"",
                sound: 'mortis_17.mp3'
            },
            {
                text: "\"Dash and destroy!\"",
                sound: 'mortis_18.mp3'
            },
            {
                text: "\"We shall meet again\"",
                sound: 'mortis_19.mp3'
            },
            {
                text: "\"Betrayal!\"",
                sound: 'mortis_20.mp3'
            },
            {
                text: "\"Gloom and doom\"",
                sound: 'mortis_21.mp3'
            },
            {
                text: "\"Mortis, the mortal\"",
                sound: 'mortis_22.mp3'
            },
            {
                text: "\"Mortally wounded\"",
                sound: 'mortis_23.mp3'
            },
            {
                text: "\"I believe you got owned\"",
                sound: 'mortis_24.mp3'
            },
            {
                text: "\"Time to rest\"",
                sound: 'mortis_25.mp3'
            },
            {
                text: "\"You have been bested\"",
                sound: 'mortis_26.mp3'
            },
            {
                text: "\"My excellence is undeniable!\"",
                sound: 'mortis_27.mp3'
            },
        ],
        hitSounds: ['mortis_hurt_1.mp3', 'mortis_hurt_2.mp3', 'mortis_hurt_3.mp3', 'mortis_hurt_4.mp3']
    },

    {
        name: "Tara",
        boxImage: require('./static/images/brawlers/tara/tara_1.png'),
        profileImages: [
            require('./static/images/brawlers/tara/tara.png'),
            require('./static/images/brawlers/tara/skin_1.png'),
            require('./static/images/brawlers/tara/skin_2.png')
        ],
        quotes: [
            {
                text: "Shriek #1",
                sound: 'tara_1.mp3'
            },
            {
                text: "Shriek #2",
                sound: 'tara_2.mp3'
            },
            {
                text: "Shriek #3",
                sound: 'tara_3.mp3'
            },
            {
                text: "Shriek #4",
                sound: 'tara_4.mp3'
            },
            {
                text: "Shriek #5",
                sound: 'tara_5.mp3'
            },
            {
                text: "Shriek #6",
                sound: 'tara_6.mp3'
            },
        ],
        hitSounds: ['tara_hurt_1.mp3', 'tara_hurt_2.mp3', 'tara_hurt_3.mp3']
    },

    {
        name: "Gene",
        boxImage: require('./static/images/brawlers/gene/gene_1.png'),
        profileImages: [
            require('./static/images/brawlers/gene/gene.png'),
            require('./static/images/brawlers/gene/skin_1.png')
        ],
        quotes: [
            {
                text: "Chuckle #1",
                sound: 'gene_1.mp3'
            },
            {
                text: "Chuckle #2",
                sound: 'gene_2.mp3'
            },
            {
                text: "Chuckle #3",
                sound: 'gene_3.mp3'
            },
            {
                text: "Chuckle #4",
                sound: 'gene_4.mp3'
            },
            {
                text: "Chuckle #5",
                sound: 'gene_5.mp3'
            },
            {
                text: "Chuckle #6",
                sound: 'gene_6.mp3'
            },
            {
                text: "Chuckle #7",
                sound: 'gene_7.mp3'
            },
            {
                text: "Chuckle #8",
                sound: 'gene_8.mp3'
            },
            {
                text: "Chuckle #9",
                sound: 'gene_9.mp3'
            },
        ],
        hitSounds: ['gene_hurt_1.mp3', 'gene_hurt_2.mp3']
    },

    {
        name: "Max",
        boxImage: require('./static/images/brawlers/max/max_1.png'),
        profileImages: [
            require('./static/images/brawlers/max/max.png'),
            require('./static/images/brawlers/max/skin_1.png')
        ],
        quotes: [
            {
                text: "\"Max to the max!\"",
                sound: 'max_1.mp3'
            },
            {
                text: "\"Free energy!\"",
                sound: 'max_2.mp3'
            },
            {
                text: "\"Turn it to max\"",
                sound: 'max_3.mp3'
            },
            {
                text: "\"Max energy!\"",
                sound: 'max_4.mp3'
            },
            {
                text: "\"Turbo time\"",
                sound: 'max_5.mp3'
            },
            {
                text: "\"Three two one BLAST OFF!\"",
                sound: 'max_6.mp3'
            },
            {
                text: "\"No time gotta move\"",
                sound: 'max_7.mp3'
            },
            {
                text: "\"Go go go go!\"",
                sound: 'max_8.mp3'
            },
            {
                text: "\"Let's go, come on, zip zip!\"",
                sound: 'max_9.mp3'
            },
            {
                text: "\"Max energy for max results\"",
                sound: 'max_10.mp3'
            },
            {
                text: "\"This is just the warm-up, right\"",
                sound: 'max_11.mp3'
            },
            {
                text: "\"In the lead, winning, number one, best of the best, whoo!\"",
                sound: 'max_12.mp3'
            },
            {
                text: "\"Why is everyone so slow?\"",
                sound: 'max_13.mp3'
            },
            {
                text: "\"Yes yes yes yes!\"",
                sound: 'max_14.mp3'
            },
            {
                text: "\"Kablam pow zap sizzle!\"",
                sound: 'max_15.mp3'
            },
            {
                text: "\"Faster than lightning\"",
                sound: 'max_16.mp3'
            },
            {
                text: "\"See ya!\"",
                sound: 'max_17.mp3'
            },
            {
                text: "\"Try to keep up\"",
                sound: 'max_18.mp3'
            },
            {
                text: "\"Sorry, I didn't see you there\"",
                sound: 'max_19.mp3'
            },
            {
                text: "\"Sugar crush!\"",
                sound: 'max_20.mp3'
            },
            {
                text: "\"Energy levels, critical\"",
                sound: 'max_21.mp3'
            },
            {
                text: "\"Time, to slow, down\"",
                sound: 'max_22.mp3'
            },
            {
                text: "\"Crashing, crashing!\"",
                sound: 'max_23.mp3'
            },
            {
                text: "\"Hey! What happened?\"",
                sound: 'max_24.mp3'
            },
        ],
        hitSounds: ['max_hurt_1.mp3', 'max_hurt_2.mp3', 'max_hurt_3.mp3', 'max_hurt_4.mp3']
    },

    {
        name: "MrP",
        boxImage: require('./static/images/brawlers/mrp/mrp_1.png'),
        profileImages: [
            require('./static/images/brawlers/mrp/mrp.png'),
            require('./static/images/brawlers/mrp/skin_1.png'),
        ],
        quotes: [
            {
                text: "Laughs #1",
                sound: 'mrp_1.mp3'
            },
            {
                text: "Laughs #2",
                sound: 'mrp_2.mp3'
            },
            {
                text: "Laughs #3",
                sound: 'mrp_3.mp3'
            },
            {
                text: "Laughs #4",
                sound: 'mrp_4.mp3'
            },
            {
                text: "Laughs #5",
                sound: 'mrp_6.mp3'
            },
            {
                text: "Laughs #6",
                sound: 'mrp_7.mp3'
            },
            {
                text: "Laughs #7",
                sound: 'mrp_8.mp3'
            },
            {
                text: "Laughs #8",
                sound: 'mrp_9.mp3'
            },
            {
                text: "Laughs #9",
                sound: 'mrp_10.mp3'
            },
            {
                text: "Laughs #10",
                sound: 'mrp_11.mp3'
            },
            {
                text: "Laughs #11",
                sound: 'mrp_12.mp3'
            },
            {
                text: "Laughs #12",
                sound: 'mrp_21.mp3'
            },
            {
                text: "Laughs #13",
                sound: 'mrp_22.mp3'
            },
            {
                text: "Chimes #1",
                sound: 'mrp_5.mp3'
            },
            {
                text: "Chimes #2",
                sound: 'mrp_13.mp3'
            },
            {
                text: "Whimpers",
                sound: 'mrp_14.mp3'
            },
            {
                text: "Groans",
                sound: 'mrp_15.mp3'
            },
            {
                text: "Rattles",
                sound: 'mrp_16.mp3'
            },
            {
                text: "Cheers",
                sound: 'mrp_17.mp3'
            },
            {
                text: "Yells #1",
                sound: 'mrp_18.mp3'
            },
            {
                text: "Yells #2",
                sound: 'mrp_19.mp3'
            },
            {
                text: "Yells #3",
                sound: 'mrp_20.mp3'
            },
        ],
        hitSounds: ['mrp_hurt_1.mp3', 'mrp_hurt_2.mp3', 'mrp_hurt_3.mp3', 'mrp_hurt_4.mp3']
    },

    /* --------------- END MYTHIC --------------- */

    /* --------------- START LEGENDARY --------------- */

    {
        name: "Leon",
        boxImage: require('./static/images/brawlers/leon/leon_1.png'),
        profileImages: [
            require('./static/images/brawlers/leon/leon.png'),
            require('./static/images/brawlers/leon/skin_1.png'),
            require('./static/images/brawlers/leon/skin_3.png')
        ],
        mechaImages: [
            require('./static/images/brawlers/leon/skin_2.png')
        ],
        quotes: [
            {
                text: "\"Sneaky time\"",
                sound: 'leon_17.mp3'
            },
            {
                text: "\"Invisibility!\"",
                sound: 'leon_18.mp3'
            },
            {
                text: "\"Let's go!\"",
                sound: 'leon_1.mp3'
            },
            {
                text: "\"We can do this!\"",
                sound: 'leon_2.mp3'
            },
            {
                text: "\"Time to brawl\"",
                sound: 'leon_3.mp3'
            },
            {
                text: "\"Yeah!\"",
                sound: 'leon_4.mp3'
            },
            {
                text: "\"Leon in the lead\"",
                sound: 'leon_5.mp3'
            },
            {
                text: "\"Hey Nita, check me out\"",
                sound: 'leon_6.mp3'
            },
            {
                text: "\"Untouchable\"",
                sound: 'leon_7.mp3'
            },
            {
                text: "\"WooHoo!\"",
                sound: 'leon_8.mp3'
            },
            {
                text: "\"Yes, yes, yess!\"",
                sound: 'leon_11.mp3'
            },
            {
                text: "\"Ha ha ha ha\"",
                sound: 'leon_12.mp3'
            },
            {
                text: "\"Not fair\"",
                sound: 'leon_13.mp3'
            },
            {
                text: "\"You got me..\"",
                sound: 'leon_14.mp3'
            },
            {
                text: "\"Nitaaa!..\"",
                sound: 'leon_15.mp3'
            },
            {
                text: "\"Noooo!..\"",
                sound: 'leon_16.mp3'
            },
            {
                text: "\"Watch this\"",
                sound: 'leon_19.mp3'
            },
            {
                text: "\"Ha, see ya\"",
                sound: 'leon_20.mp3'
            }
        ],
        mechaQuotes: [
            {
                text: "WOLF: Leon howls #1",
                sound: 'leon_wolf_17.mp3'
            },
            {
                text: "WOLF: Leon howls #2",
                sound: 'leon_wolf_18.mp3'
            },
            {
                text: "\"Let's go!\"",
                sound: 'leon_1.mp3'
            },
            {
                text: "\"We can do this!\"",
                sound: 'leon_2.mp3'
            },
            {
                text: "\"Time to brawl\"",
                sound: 'leon_3.mp3'
            },
            {
                text: "\"Yeah!\"",
                sound: 'leon_4.mp3'
            },
            {
                text: "\"Leon in the lead\"",
                sound: 'leon_5.mp3'
            },
            {
                text: "\"Hey Nita, check me out\"",
                sound: 'leon_6.mp3'
            },
            {
                text: "\"Untouchable\"",
                sound: 'leon_7.mp3'
            },
            {
                text: "\"WooHoo!\"",
                sound: 'leon_8.mp3'
            },
            {
                text: "\"Yes, yes, yess!\"",
                sound: 'leon_11.mp3'
            },
            {
                text: "\"Ha ha ha ha\"",
                sound: 'leon_12.mp3'
            },
            {
                text: "\"Not fair\"",
                sound: 'leon_13.mp3'
            },
            {
                text: "\"You got me..\"",
                sound: 'leon_14.mp3'
            },
            {
                text: "\"Nitaaa!..\"",
                sound: 'leon_15.mp3'
            },
            {
                text: "\"Noooo!..\"",
                sound: 'leon_16.mp3'
            },
            {
                text: "\"Watch this\"",
                sound: 'leon_19.mp3'
            },
            {
                text: "\"Ha, see ya\"",
                sound: 'leon_20.mp3'
            }
        ],
        hitSounds: ['leon_hurt_1.mp3', 'leon_hurt_2.mp3', 'leon_hurt_3.mp3']
    },

    {
        name: "Spike",
        boxImage: require('./static/images/brawlers/spike/spike_1.png'),
        profileImages: [
            require('./static/images/brawlers/spike/spike.png'),
            require('./static/images/brawlers/spike/skin_1.png')
        ],
        mechaImages: [
            require('./static/images/brawlers/spike/skin_2.png')
        ],
        quotes: [],
        hitSounds: []
    },

    {
        name: "Crow",
        boxImage: require('./static/images/brawlers/crow/crow_1.png'),
        profileImages: [
            require('./static/images/brawlers/crow/crow.png'),
            require('./static/images/brawlers/crow/skin_1.png'),
            require('./static/images/brawlers/crow/skin_2.png'),
        ],
        mechaImages: [
            require('./static/images/brawlers/crow/skin_3.png'),
            require('./static/images/brawlers/crow/skin_4.png'),
            require('./static/images/brawlers/crow/skin_5.png')
        ],
        quotes: [
            {
                text: "\"Ka-kaw!\"",
                sound: 'crow_6.mp3'
            },
            {
                text: "\"Let's settle this beef\"",
                sound: 'crow_1.mp3'
            },
            {
                text: "\"I smell a rat\"",
                sound: 'crow_2.mp3'
            },
            {
                text: "\"Don't mess with my crew\"",
                sound: 'crow_3.mp3'
            },
            {
                text: "\"I'm the boss of bosses!\"",
                sound: 'crow_4.mp3'
            },
            {
                text: "\"Talk is cheap\"",
                sound: 'crow_5.mp3'
            },
            {
                text: "\"Sleeping with the fishes\"",
                sound: 'crow_8.mp3'
            },
            {
                text: "\"I always get my mark\"",
                sound: 'crow_10.mp3'
            },
            {
                text: "\"Nice piece of work!\"",
                sound: 'crow_11.mp3'
            },
            {
                text: "\"Hey, you clipped me\"",
                sound: 'crow_12.mp3'
            },
        ],
        mechaQuotes: [
            {
                text: "\"Ka-kaw!\"",
                sound: 'crow_mecha_6.mp3'
            },
            {
                text: "\"Let's settle this beef\"",
                sound: 'crow_mecha_1.mp3'
            },
            {
                text: "\"I smell a rat\"",
                sound: 'crow_mecha_2.mp3'
            },
            {
                text: "\"Don't mess with my crew\"",
                sound: 'crow_mecha_3.mp3'
            },
            {
                text: "\"I'm the boss of bosses!\"",
                sound: 'crow_mecha_4.mp3'
            },
            {
                text: "\"Talk is cheap\"",
                sound: 'crow_mecha_5.mp3'
            },
            {
                text: "\"Sleeping with the fishes\"",
                sound: 'crow_mecha_8.mp3'
            },
            {
                text: "\"I always get my mark\"",
                sound: 'crow_mecha_10.mp3'
            },
            {
                text: "\"Nice piece of work!\"",
                sound: 'crow_mecha_11.mp3'
            },
            {
                text: "\"Hey, you clipped me\"",
                sound: 'crow_mecha_12.mp3'
            },
        ],
        hitSounds: ['crow_hurt_1.mp3', 'crow_hurt_2.mp3', 'crow_hurt_3.mp3', 'crow_hurt_4.mp3', 'crow_hurt_5.mp3', 'crow_hurt_6.mp3', 'crow_hurt_7.mp3'],
        mechaHitSounds: ['crow_mecha_hurt_1.mp3', 'crow_mecha_hurt_2.mp3', 'crow_mecha_hurt_3.mp3', 'crow_mecha_hurt_4.mp3', 'crow_mecha_hurt_5.mp3', 'crow_mecha_hurt_6.mp3']
    },

    {
        name: "Sandy",
        boxImage: require('./static/images/brawlers/sandy/sandy_1.png'),
        profileImages: [
            require('./static/images/brawlers/sandy/sandy.png'),
            require('./static/images/brawlers/sandy/skin_1.png')
        ],
        quotes: [
            {
                text: "\"So tired..\"",
                sound: 'sandy_1.mp3'
            },
            {
                text: "\"Huh, I guess I'll have to do stuff...\"",
                sound: 'sandy_2.mp3'
            },
            {
                text: "\"Yay, woo-hoo\"",
                sound: 'sandy_3.mp3'
            },
            {
                text: "\"Did I, do something?\"",
                sound: 'sandy_4.mp3'
            },
            {
                text: "\"So tired of winning\"",
                sound: 'sandy_5.mp3'
            },
            {
                text: "\"Nap-time\"",
                sound: 'sandy_6.mp3'
            },
            {
                text: "\"Sweet dreams!\"",
                sound: 'sandy_7.mp3'
            },
            {
                text: "\"Seriously? Shh...\"",
                sound: 'sandy_8.mp3'
            },
            {
                text: "\"Go to sleep...\"",
                sound: 'sandy_9.mp3'
            },
            {
                text: "\"Sandstorm!\"",
                sound: 'sandy_10.mp3'
            },
            {
                text: "\"Sand shroud\"",
                sound: 'sandy_11.mp3'
            },
            {
                text: "\"Huh, nighty night!\"",
                sound: 'sandy_12.mp3'
            },
            {
                text: "\"To sleep, perchance to dream\"",
                sound: 'sandy_13.mp3'
            },
            {
                text: "Sandy snores",
                sound: 'sandy_14.mp3'
            },
            {
                text: "\"Huh, good night\"",
                sound: 'sandy_15.mp3'
            },
            {
                text: "\"Get some rest\"",
                sound: 'sandy_16.mp3'
            },
            {
                text: "\"So cool, yeah..\"",
                sound: 'sandy_17.mp3'
            },
            {
                text: "\"So..happy..\"",
                sound: 'sandy_18.mp3'
            },
            {
                text: "\"Uahh Amazing\"",
                sound: 'sandy_19.mp3'
            },
            {
                text: "\"Calm down everyone!\"",
                sound: 'sandy_20.mp3'
            },
            {
                text: "\"For the win..\"",
                sound: 'sandy_21.mp3'
            },
        ],
        hitSounds: ['sandy_hurt_1.mp3', 'sandy_hurt_2.mp3', 'sandy_hurt_3.mp3', 'sandy_hurt_4.mp3', 'sandy_hurt_5.mp3', 'sandy_hurt_6.mp3']
    },

    {
        name: "Question",
        boxImage: require('./static/images/brawlers/question/question_mark.png'),
        profileImages: [],
        quotes: [],
        hitSounds: []
    },
];

export default brawlersData;
