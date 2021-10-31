const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finsh course and learn vue!',
            courseGoalB: 'Master in vue',
            vueLink: 'https://vuejs.org/v2/guide/'
        };
    },
    methods: {
        outputGoal: function () {
            const rand = Math.random();
            if (rand < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');