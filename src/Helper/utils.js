// Here I'll have everything else that isn't an 'action', 
// doesn't change the 'state' and isn't connected with another Component

export const getRandomNumber = () => {
    return console.log(Math.floor( Math.random() * 11 ));
};
