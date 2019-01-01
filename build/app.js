/* eslint-disable no-new */
/* eslint-disable no-undef */

Vue.component('message', {
    props: ['title', 'body'],

    data () {
        return {
            isVisible: true
        }
    },

    methods: {
        hideModal () {
            this.isVisible = false
        }
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button class="close" @click="hideModal">x</button>
            </div>

            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
})

new Vue({
    el: '#root'
})
