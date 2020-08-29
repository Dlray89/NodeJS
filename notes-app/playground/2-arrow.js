// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

const event = {
    name: 'Birthday PArty',
    guestList: ['David', 'Lisa', 'Tex'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()