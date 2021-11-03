// JavaScript source code
const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            name: '',
            lastName:'',
           fullname:''
        };
    },
  watch: {
        name(value) {
            if (value === '') {
                this.fullname = '';
            }
            else {
                this.fullname = value + ' ' + this.lastName;

            }

        },
        lastName(value) {
            if (value === '') {
                this.fullname = '';
            }
            else {
                this.fullname = this.name + ' ' + value;

            }
        }
    },
    computed: {
        //fullname() {
        //    console.log('running.....');
        //    if (this.name === '') {
        //        return '';
        //    }
        //    return this.name + ' ' + 'VAZ';
        //},
    },
    methods: {
       
        resetInput() {
            this.name = '';
            this.lastName=''
        },

        
        add(n) {
            this.counter = this.counter + n;
        },
        reduce(n) {
            this.counter = this.counter - n;
        },
    }
});
app.mount('#events');
