const result = {
    data () {
        return {
            result:'',
            numbers: [1,2,3,4,5,6,7,8,9,".",0,"00"],
            operators: ["+","-","/","*","(",")"]
        }
    },
    methods: {
        input (char) {
            this.result+=char;
        },
        calculate () {
            this.result=eval(this.result);
        },
        reset () {
            this.result="";
        }
    }
}
Vue.createApp(result).mount('#calc')