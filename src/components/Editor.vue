<template class="editorTemplate">
    <b-container class="editor ">
        <b-row class="edit">
            <b-col col="image" cols="6">
                <div id="download" ref="download">
                    <vue-draggable-resizable class="drags" @dragging="onDrag">
                        <b class="top-text apply-font" draggable="true" :style="[topSize,topColor,topFFamily]">{{
                            topText}}</b>
                    </vue-draggable-resizable>
                    <img :src="imgToEdit" :alt="`Image to edit`" class=""/>
                    <vue-draggable-resizable class="drags" @dragging="onDrag">
                        <b class="bottom-text" draggable="true" :style="[bottomSize,bottomColor,bottomFFamily]">{{
                            bottomText}}</b>
                    </vue-draggable-resizable>
                </div>
            </b-col>

            <b-col class="options" cols="6">

                <input class="text-option m-2" v-model="topText" type="text" placeholder="Top text">


                <div class="slidecontainer font-top">
                    <spanp class="fontStyle col-auto">
                        Font size:
                    </spanp>
                    <input type="range" min="15" max="100" value="0" class="slider" v-model="topFont">
                </div>

                <div class="slidecontainer color-top">
                    <spanp class="fontStyle col-auto">
                        Font color:
                    </spanp>
                    <input type="range" min="000000" max="999999" value="0" class="slider"
                           v-model="topColors">
                </div>

                <select v-model="topFamily" class="family-input mt-2">
                    <option>Fonts</option>
                    <option v-for="font in fonts" :key="font" :value="font" :style="{fontFamily : font}">{{ font }}
                    </option>
                </select><br>

                <input class="text-option m-2" v-model="bottomText" type="text" placeholder="Bottom text">

                <div class="slidecontainer font-bottom">
                    <spanp class="fontStyle col-auto">
                        Font size:
                    </spanp>
                    <input type="range" min="15" max="100" value="0" class="slider" v-model="bottomFont">
                </div>

                <div class="slidecontainer color-bottom">
                    <spanp class="fontStyle col-auto">
                        Font color:
                    </spanp>
                    <input type="range" min="000000" max="999999" class="slider"
                           v-model="bottomColors">
                </div>

                <select v-model="bottomFamily" class="family-input">
                    <option>Fonts</option>
                    <option v-for="font in fonts" :key="font" :value="font" :style="{fontFamily : font}">{{ font }}
                    </option>
                </select>

                <b-button variant="success" @click="download" class="download-button mt-3">Download</b-button>

            </b-col>


        </b-row>
    </b-container>
</template>
<script>

    import {saveAsPng} from "save-html-as-image";

    export default {


        name: 'Editor',
        props: {
            imgToEdit: {
                type: String
            },

        },
        data() {
            return {
                topText: '',
                bottomText: '',
                topFont: 15,
                bottomFont: 15,
                topColors: '',
                bottomColors: '',
                topFamily: '',
                bottomFamily: '',
                x: 0,
                y: 0,
                fonts: ["Arial",
                    "aakar",
                    "Karumbi",
                    "Samanata",
                    "Tibetan Machine Uni",
                    "Ubuntu Light",
                    "monospace",
                    "Vemana2000",
                    "Droid Sans",
                    "Pacifico"],


            }
        },
        computed: {
            topSize() {
                return {
                    fontSize: this.topFont + 'px'

                }
            },
            bottomSize() {
                return {
                    fontSize: this.bottomFont + 'px'

                }
            },

            topColor() {
                return {
                    color: '#' + this.topColors

                }
            },
            bottomColor() {
                return {
                    color: '#' + this.bottomColors

                }
            },
            topFFamily() {
                return {

                    fontFamily: this.topFamily
                }
            },
            bottomFFamily() {
                return {
                    fontFamily: this.bottomFamily
                }
            }


        },
        methods: {

            onDrag: function (x, y) {
                this.x = x
                this.y = y
            },
            download() {
                const node = this.$refs.download
                saveAsPng(node, {filename: 'meme', printDate: false})
            }

        },


    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    .drags {
        border: none !important;

    }


    .fontStyle {
        margin-bottom: 0;
        padding-top: 10px;
    }

    .family-input {
        height: 20px;
        width: 30%;
        text-align: center;
    }

    .slider {
        -webkit-appearance: none;
        width: 30%;
        height: 10px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: yellowgreen;
        cursor: pointer;
    }


    .editor {
        text-align: center;
    }

    .top-text {
        position: absolute;
        top: 0;
        left: 10%;

    }

    .bottom-text {
        position: absolute;
        bottom: 100%;
        left: 10%;
    }

    .editor img {
        height: 100%;
        width: 100%;
    }


    .text-option {
        padding: 5px;
        text-align: center;
    }

    .download-button {
        width: 100%;
    }
</style>

