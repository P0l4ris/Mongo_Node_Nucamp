//module.exports or simply exports make a JS file into a Node Module to export elsewhere in another JS file. these keywords are only used in NODE

//when not just a method use the whole model.exports
//changed from two separate methods into one module function
module.exports = (x,y, callback) => {
    //error object (global info)as first argument
    if ( x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() => 
            //null means no error first. innerFunction in here, no need to pass x,y
            callback(null, {
                perimeter: () => 2 * (x + y),
                area:()  => x*y
            }),
            2000
        );
    }
}