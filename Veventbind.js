const app = Vue.createApp({
    data() {
        return {
            counter: 5,
            name:'',
            confirmedName:''
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
           
            alert('Submitted');
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;

        },
        add(n) {
            this.counter = this.counter+n;
        },
        reduce(n) {
            this.counter = this.counter-n;
        },
    }
});
app.mount('#events');
