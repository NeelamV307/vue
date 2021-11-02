const app = Vue.createApp({
    data() {
        return {
            name: '',
            n:'',
            confirmedName: '',
            confName:''
        }
    },
    methods: {
        msg() {
            alert('Heyyyy u are on alert!')
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        confInput() {
            this.confName = this.n;
        },
        setName(event) {
            this.name = event.target.value;

        },
        setNames(event) {
            this.n = event.target.value;

        },
    },
    
});
app.mount('#assignment');