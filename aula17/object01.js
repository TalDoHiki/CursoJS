friend = {
    name:'John', 
    sex:'M', 
    weight:85.4,
    fatten(f=0){
        console.log('Fed up!')
        this.weight += f
    }
}

friend.fatten(2)
console.log(`${friend.name} weighs ${friend.weight}Kg`)