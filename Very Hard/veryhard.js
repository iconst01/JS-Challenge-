 function person(name, job, age){
    this.name = name;
    this.job = job;
    this.age =age;
 }
person.prototype.exercise = function(){
    console.log('running is hard! - said no one!.');
};
person.prototype.fetchJob = function(){
    console.log(`${this.name})is a ${this.job}.`);
}
function programmer(name, job , age,languages){ person.call(this,name,job,age);
    this.languages = languages || [];
    this.busy= true;
}

programmer.prototype = 
Object.create(person.prototype);
programmer.prototype.constructor=
programmer;


//add methos to programmer prototype

programmer.prototype.completeTask = 
function() {
    this.busy = false;
};
programmer.prototype.acceptnewtask=
function(){
    this.busy = true;
};
programmer.prototype.offerNewTask=
function(){
    if(this.busy){
    console.log(`${this.name}cant't accept any new task .`);
    }else{
        console.log(`${this.name}would love to take on a new task!`);
    }
};
programmer.prototype.learnLanguages = function(newLanguage){
    this.languages.push(newLanguage);
};




programmer.prototype.listLanguages = function(){
    console.log(`${this.name}knows the following languages: $ {this.languages.join(",")}.`);
};

const person1 = new person("Issac","Backend Engineer", 20);
person1.exercise();
person1.fetchJob();


const programmer1 = new programmer("Matt", "DevOps",30,["HTML","C#","Lua"]);
programmer1.exercise();
programmer1.fetchJob();
programmer1.offerNewTask();
programmer1.completeTask();
programmer1.offerNewTask();
programmer1.learnLanguages('JS');
programmer1.listLanguages();
