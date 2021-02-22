class Human {
	
		constructor (name, age){
			this.name = name;
			this.age= age;
		}

		talk = ()=>{
			console.log("Mr Professor" + this.name + "speaks German and has been appointed as new dean of CS.");

		}		
	}
	

	class Man extends Human{

	}

	const Edy = new Man("Professor Edward Asamoah Frempong");
	 Edy.talk();