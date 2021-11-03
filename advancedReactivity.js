const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            name: ''

        };
    },
    methods: {
        outputFullname() {
            if (this.name === '') {
                return '';
            }
            return this.name+' '+'VAZ';
        },
        resetInput() {
            this.name = '';
        },

        setName(event, lastName) {
            this.name = event.target.value;

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
