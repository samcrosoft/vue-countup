<template>
    <span></span>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                _iso: null
            }
        },
        props: {
            start: {
                type: Number,
                default: 0
            },
            end: {
                type: Number,
                required: !0
            },
            decimal: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 2.5
            },
            options: {
                type: Object
            }
        },
        computed: {
            startValue: function () {
                return this.start;
            },
            endValue: function () {
                return this.end;
            },
            decimalValue: function () {
                return this.decimal;
            },
            durationValue: function () {
                return this.duration;
            }
        },
        watch: {
            endValue(val, oldVal){
                this.reInitiateCounter();
            },
            startValue(val, oldVal){
                this.reInitiateCounter();
            },
            decimalValue(val, oldVal){
                this.reInitiateCounter();
            },
            durationValue(val, oldVal){
                this.reInitiateCounter();
            },
        },
        ready(){
            // instantiate the countUp for the element
            if(!this._iso){
                this.initiateCount();
            }
        },
        methods:{
            initiateCount(){
                this._iso = new CountUp(this.$el, this.startValue,
                        this.endValue,
                        this.decimalValue,
                        this.durationValue,
                        this.options
                );
                this._iso.start();
            },
            clearCountHolder(){
                this._iso = null;
            },
            reInitiateCounter(){
                // make sure that counter has been instantiated already!
                if(this._iso){
                    // clear out the counter
                    this.clearCountHolder();
                    // initiate the chart
                    this.initiateCount();
                }
            }
        }
    }
</script>