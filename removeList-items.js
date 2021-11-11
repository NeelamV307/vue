
const app = Vue.createApp({
    data() {
        return {
            enteredGoal: '',
            goals: []
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoal);
        },
        removeItem(indx) {
            this.goals.splice(indx, 1);
        }
    },
});


app.mount('#user-goals');

