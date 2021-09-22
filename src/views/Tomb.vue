<template lang="">
    <div id="tomb">
        <div id="box" :class="{'musique': rickroll}">
            <img src="https://avatars.githubusercontent.com/u/36853313" id="header-image" />
            <h1>Hello, je suis Tom</h1>
            <p>Je suis un connaisseur dans le domaine ferroviaire (j'en fait quelques vidéos), mais je fais aussi du développement web front.</p>
            Un exemple de projet que j'ai réalisé grâce à une API : <a href="https://tomymy.fr/rer-a/" class="link">Horaire RER A</a>
        </div>
        <div id="train" @click="audio()">
            <img src="http://mlgtraffic.net/images/SNCF/AE/Z20900_2S_IdFM_L.gif">
            <img src="http://mlgtraffic.net/images/SNCF/AE/ZR201900_2S_IdFM_L.gif">
            <img src="http://mlgtraffic.net/images/SNCF/AE/ZR202900_2S_IdFM_R.gif">
            <img src="http://mlgtraffic.net/images/SNCF/AE/Z20900_2S_IdFM_R.gif">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                audio_play: 0,
                rickroll: false
            }
        },
        methods: {
            audio: function () {
                this.audio_play += 1;
                var audio1 = new Audio('https://www.myinstants.com/media/sounds/sncf-france-jingle.mp3');
                var audio2 = new Audio('https://www.myinstants.com/media/sounds/rick-astley-never-gonna-give-you-up-mp3cut_2.mp3');
                if (this.audio_play == 1)  {
                    audio1.play();
                } else if (this.audio_play == 2){
                    audio2.play();
                    this.rickroll = true;
                    
                } else if (this.audio_play <= 3) {
                    this.audio_play = 0;
                    audio1.pause();
                    audio1.currentTime = 0;
                    audio2.pause();
                    audio2.currentTime = 0;
                    this.rickroll = false;
                }

            }
        }
    }
</script>
<style lang="css" scoped>
    #tom {
        position: relative;
    }

    #box {
        position: relative;
        padding: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-bottom: 1px solid black;
        background-color: rgba(243, 244, 246);
        width: 90%;
        margin: 0 auto;
    }

    #header-image {
        width: 200px;
    }

    #train {
        position: absolute;
        overflow: hidden;
        left: -1200px;
        animation: 8s linear infinite transport;
        animation-delay: 1s;
        display: flex;
        justify-content: center;
        align-items: baseline;
        flex-wrap: nowrap;
    }
    .musique {
        background: linear-gradient(to right, #FBBF24, #EF4444);
        animation: 1s linear infinite musique-background;
    }
    .link {
        padding: 5px 10px;
        background-color: #E3051C;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
    }

    @keyframes transport {
        from {
            left: -1200px;
        }

        to {
            left: 2200px;
        }
    }
    @keyframes musique-background {
        0% {
            background: linear-gradient(to left, #FBBF24, #EF4444);
            color: white;
        }
        50% {
            background: linear-gradient(to right, #FBBF24, #EF4444);
            color: black;
        }
        100% {
            background: linear-gradient(to left, #FBBF24, #EF4444);
            color: white;
        }
    }
</style>