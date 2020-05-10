<template class="editorTemplate">
    <b-container class="editor ">
        <b-row class="edit">
            <b-col col="image" cols="12" md="6" pb-2>
                <div id="download" ref="download">
                    <vue-draggable-resizable class="drags">
                        <b class="top-text " draggable="true" :style="[topSize,topColor,topFFamily]">
                            {{ topText}}</b>
                    </vue-draggable-resizable>
                    <img :src="imgToEdit" :alt="`Image to edit`" class="editImage position"/>
                    <vue-draggable-resizable class="drags">
                        <b class="bottom-text" draggable="true" :style="[bottomSize,bottomColor,bottomFFamily]">
                            {{bottomText}}</b>
                    </vue-draggable-resizable>
                </div>
            </b-col>

            <b-col class="options" cols="12" md="6">

                <input class="text-option m-2" v-model="topText" type="text" placeholder="Top text">


                <div class="slidecontainer font-top">
                    <spanp class="fontStyle col-auto">
                        Font size:
                    </spanp>
                    <input type="range" min="15" max="100" value="0" class="slider" v-model="defaultTopFont">
                </div>

                <select v-model="topColors" class="color-input">
                <option value="">Color</option>
                <option v-for="fontColor in fontColors" :key="fontColor" :value="fontColor" :style="{color : fontColor}">{{ fontColor }}
                </option>
            </select>


                <select v-model="topFamily" class="family-input mt-2">
                    <option value="">Font</option>
                    <option v-for="font in fonts" :key="font" :value="font" :style="{fontFamily : font}">{{ font }}
                    </option>
                </select><br>

                <input class="text-option m-2" v-model="bottomText" type="text" placeholder="Bottom text">

                <div class="slidecontainer font-bottom">
                    <spanp class="fontStyle col-auto">
                        Font size:
                    </spanp>
                    <input type="range" min="15" max="100" value="0" class="slider" v-model="defaultBottomFont">
                </div>


                <select v-model="bottomColors" class="color-input">
                    <option value="">Color</option>
                    <option v-for="fontColor in fontColors" :key="fontColor" :value="fontColor" :style="{color : fontColor}">{{ fontColor }}
                    </option>
                </select>

                <select v-model="bottomFamily" class="family-input">
                    <option value="">Font</option>
                    <option v-for="font in fonts" :key="font" :value="font" :style="{fontFamily : font}">{{ font }}
                    </option>
                </select>

                <b-button variant="success" @click="download" class="download-button mt-3">Download</b-button>

            </b-col>


        </b-row>
    </b-container>
</template>
<script>

    import {saveAsJpeg} from "save-html-as-image";

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
                defaultTopFont: 15,
                defaultBottomFont: 15,
                topColors: '',
                bottomColors: '',
                topFamily: '',
                bottomFamily: '',
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
                fontColors: ["black", "green", "red", "purple", "yellow", "orange", "blue", "pink", "gray"]

            }
        },
        computed: {


            topSize() {
                return {
                    fontSize: this.defaultTopFont + 'px'

                }
            },
            bottomSize() {
                return {
                    fontSize: this.defaultBottomFont + 'px'

                }
            },

            topColor() {
                return {
                    color: this.topColors

                }
            },
            bottomColor() {
                return {
                    color: this.bottomColors

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

            download() {
                const node = this.$refs.download
                saveAsJpeg(node, {filename: 'meme', printDate: false})
            }

        },


    }

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    .drags {
        border: none !important;

    }

    #download img {
        max-width: 100%;
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

    .color-input{
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
        width: 15px;
        height: 15px;
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

    @media screen and (max-width: 770px) {
        .editImage {
            height: 100%;
            width: 100%;
            justify-content: center;
        }

        .download-button {
            width: 100%;
        }


    }
</style>

