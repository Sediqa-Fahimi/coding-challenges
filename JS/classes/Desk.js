// class Desk{
    
// }
const Desk = class{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    updateNameColor(newName,newColor){
        this.name = newName;
        this.color = newColor;
    }
}
export default Desk;