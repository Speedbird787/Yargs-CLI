// const yargs = require("yargs")

const { Plane, movieArr } = require("./utils");

// const {Movie, movieArr} = require("./utils");
// //console.log (yargs.argv);

// const app = (args) => {
//     if (args.add) {
//         const movie = new Movie (args.movie, args.actor);
//         movie.add()
//         console.log(movieArr);
//     } else if (args.addMany) {
//         console.log ("add many command");
//     } else {
//         console.log ("incorrect amount");
//     }
// };

// app (yargs.argv);


const app = (args) => {
    if (args.add) {
      const Plane = new Plane(args.model, args.size, args.speed, args.manufacturer);
      cat.add();
      console.log(Plane)
    } else if (args.addMany) {
      const plane1 = new Plane (args.model, args.size, args.speed, args.manufacturer);
      const plane2 = new Plane (args.model1, args.size1, args.speed1, args.manufacturer1);
      plane1.add();
      plane2.add();
      console.log(planesArr)
    } else {
      console.log("command invalid")
    }
}
  
app(yargs.argv);