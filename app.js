const app= Vue.createApp({
	
	data(){
	return{
		firstName:'raj',
		lastName:'vazirani',
		email:'nee@gmail.com',
	
		pic:'C:\Users\91969\OneDrive\Pictures\shop\pic-2.png',
	}
	},
	
	methods:{
	async	getuser(){
			const res= await fetch('https:randomuser.me/api')
			const {results}= await res.json()
			//console.log(results);
			this.firstName= results[0].name.first
			this.lastName=results[0].name.last
			this.email=results[0].email
			
			this.pic= results[0].pic.large
			
			},
	},
})

app.mount('#app')