export class Coords{

} 

export class GradeConversor{
    private grade:number;
    constructor(grade:string){
        this.grade = parseFloat(grade);    
    }
    //Function to convert Decimal Grades to Minutes, seconds and miliseconds
    toMSM():String{
        let minutes = Math.trunc(this.grade); // Grades after seconds
        let decimals = this.grade - minutes;
        let preseconds = decimals*60;
        let seconds = Math.trunc(preseconds); // Seconds after miliseconds
        let premiliseconds = preseconds - seconds;
        let miliseconds = premiliseconds * 60; // Miliseconds

        let converted = `${minutes} ${seconds}'${miliseconds}"`;
        return converted;
    }
}