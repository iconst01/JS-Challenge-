function createP(name, ssn){
    //private
    let ntitle = name;
    let number = ssn;
//public
return{
    getName: function(){
        return ntitle;
    },
    getSSN: function(){
        return number;
    }
};

}

//console
const patient2 = createP("Itaty","704-60-4600");
console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());