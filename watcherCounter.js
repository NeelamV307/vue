// JavaScript source code
const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            //name: '',
            //lastName: '',
           // fullname: ''
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        },
        //name(value) {
        //    if (value === '') {
        //        this.fullname = '';
        //    }
        //    else {
        //        this.fullname = value + ' ' + this.lastName;

        //    }

        //},
        //lastName(value) {
        //    if (value === '') {
        //        this.fullname = '';
        //    }
        //    else {
        //        this.fullname = this.name + ' ' + value;

        //    }
        //}
    },
   
    methods: {

        

        add(n) {
            this.counter = this.counter + n;
        },
        reduce(n) {
            this.counter = this.counter - n;
        },
    }
});
app.mount('#events');
