class person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
}
var p1 = new person("sai" , "krishna");
console.log(p1.firstName);
console.log(p1.lastName);

// if we want to get firstname and lastname in a line we use print tag as show in below.

class person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    print(){
        console.log(this.firstName + "," + this.lastName);
    }
}
var p1 = new person("sai" , "krishna");
p1.print();