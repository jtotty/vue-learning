window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <input placeholder="Enter coupon code" @blur="onCouponApplied"></input>
    `,

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('Handling it!'));
    }
});