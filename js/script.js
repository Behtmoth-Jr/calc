const result = {
    data () {
        return {
            result:'',
            numbers: [9,8,7,6,5,4,3,2,1,".",0,"00"],
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