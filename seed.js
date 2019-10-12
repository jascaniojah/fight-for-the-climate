const mongoose  = require("mongoose");
var Fact        = require("./models/fact")

var headlines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc lobortis tempor vulputate.",
    "Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet.",
    "Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc lobortis tempor vulputate.",
    "Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet.",
    "Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc lobortis tempor vulputate.",
    "Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet.",
    "Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nunc lobortis tempor vulputate.",
    "Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet.",
    "Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis.",
]

var details = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis tempor vulputate. Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet. Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis. Vestibulum dapibus eleifend ex, vitae aliquam lorem rutrum nec.",
    "Nunc dapibus metus ac velit gravida, id sollicitudin purus gravida. Ut tincidunt elit sollicitudin convallis accumsan. Donec eget tempor tortor. Nam vulputate facilisis risus, id volutpat diam porta vitae. Sed volutpat at ligula a tempor. Nullam tempor euismod lacus, sed vehicula nulla laoreet et.",
    "Suspendisse gravida placerat cursus. Suspendisse sed neque pretium nisl consequat ullamcorper. Fusce eleifend dui at tincidunt tempus. Nunc auctor, dolor ut tempus consequat, eros nisi ultrices nunc, at dapibus lorem felis vel nunc. In hendrerit, diam ac aliquet placerat, quam elit posuere est, quis tempor mauris felis nec risus. Ut suscipit sagittis ullamcorper.",
    "Duis in metus non quam tincidunt tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a nisl varius, condimentum urna et, cursus mi.",
    "Proin dui nisi, finibus ut ligula nec, placerat mollis enim. Fusce eget mauris ut nisl porta venenatis. Nunc pulvinar vehicula sem vel elementum. In mollis lectus quis tortor suscipit accumsan. In rutrum, urna ut consequat molestie, nisi justo suscipit augue, nec porttitor lacus est ultricies sem. Aliquam pellentesque nunc sem, nec maximus sapien rutrum et.",
    "Curabitur porttitor a justo at auctor. Duis venenatis sem nisl, et blandit libero vehicula at. Nullam diam nibh, maximus ut justo condimentum, ullamcorper posuere tortor. Maecenas ultricies congue dignissim. Maecenas ac massa venenatis, porttitor dolor sed, aliquet mauris. Pellentesque posuere tincidunt efficitur. Nulla venenatis dictum porta. Praesent tristique maximus tortor, a blandit enim rhoncus porttitor.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis tempor vulputate. Vivamus feugiat enim quam, sed laoreet diam facilisis sit amet. Suspendisse fermentum, ligula at imperdiet laoreet, libero massa feugiat ipsum, id euismod augue magna eget felis. Vestibulum dapibus eleifend ex, vitae aliquam lorem rutrum nec.",
    "Nunc dapibus metus ac velit gravida, id sollicitudin purus gravida. Ut tincidunt elit sollicitudin convallis accumsan. Donec eget tempor tortor. Nam vulputate facilisis risus, id volutpat diam porta vitae. Sed volutpat at ligula a tempor. Nullam tempor euismod lacus, sed vehicula nulla laoreet et.",
    "Suspendisse gravida placerat cursus. Suspendisse sed neque pretium nisl consequat ullamcorper. Fusce eleifend dui at tincidunt tempus. Nunc auctor, dolor ut tempus consequat, eros nisi ultrices nunc, at dapibus lorem felis vel nunc. In hendrerit, diam ac aliquet placerat, quam elit posuere est, quis tempor mauris felis nec risus. Ut suscipit sagittis ullamcorper.",
    "Duis in metus non quam tincidunt tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a nisl varius, condimentum urna et, cursus mi.",
    "Proin dui nisi, finibus ut ligula nec, placerat mollis enim. Fusce eget mauris ut nisl porta venenatis. Nunc pulvinar vehicula sem vel elementum. In mollis lectus quis tortor suscipit accumsan. In rutrum, urna ut consequat molestie, nisi justo suscipit augue, nec porttitor lacus est ultricies sem. Aliquam pellentesque nunc sem, nec maximus sapien rutrum et.",
    "Curabitur porttitor a justo at auctor. Duis venenatis sem nisl, et blandit libero vehicula at. Nullam diam nibh, maximus ut justo condimentum, ullamcorper posuere tortor. Maecenas ultricies congue dignissim. Maecenas ac massa venenatis, porttitor dolor sed, aliquet mauris. Pellentesque posuere tincidunt efficitur. Nulla venenatis dictum porta. Praesent tristique maximus tortor, a blandit enim rhoncus porttitor.",
    "Suspendisse gravida placerat cursus. Suspendisse sed neque pretium nisl consequat ullamcorper. Fusce eleifend dui at tincidunt tempus. Nunc auctor, dolor ut tempus consequat, eros nisi ultrices nunc, at dapibus lorem felis vel nunc. In hendrerit, diam ac aliquet placerat, quam elit posuere est, quis tempor mauris felis nec risus. Ut suscipit sagittis ullamcorper.",
    "Duis in metus non quam tincidunt tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a nisl varius, condimentum urna et, cursus mi.",
    "Proin dui nisi, finibus ut ligula nec, placerat mollis enim. Fusce eget mauris ut nisl porta venenatis. Nunc pulvinar vehicula sem vel elementum. In mollis lectus quis tortor suscipit accumsan. In rutrum, urna ut consequat molestie, nisi justo suscipit augue, nec porttitor lacus est ultricies sem. Aliquam pellentesque nunc sem, nec maximus sapien rutrum et.",
    "Curabitur porttitor a justo at auctor. Duis venenatis sem nisl, et blandit libero vehicula at. Nullam diam nibh, maximus ut justo condimentum, ullamcorper posuere tortor. Maecenas ultricies congue dignissim. Maecenas ac massa venenatis, porttitor dolor sed, aliquet mauris. Pellentesque posuere tincidunt efficitur. Nulla venenatis dictum porta. Praesent tristique maximus tortor, a blandit enim rhoncus porttitor.",
]

var creators = [
    "Nick Greseth",
    "August Halverson",
    "Jack Johnson",
    "Laura Engles WIlder",
    "McLovin",
    "Jeff Nelson",
    "Nick Greseth",
    "August Halverson",
    "Jack Johnson",
    "Laura Engles WIlder",
    "Nick Greseth",
    "August Halverson",
    "Jack Johnson",
    "Laura Engles WIlder",
    "McLovin",
    "Jeff Nelson"
]

function seedDatabase() {
    console.log("Seeding the database...");
    Fact.deleteMany({}, function(err){
        if (err) {
            console.log("A fatal error occurred while emptying the database");
        } else {
            for (var i = 1; i < headlines.length; i++) {
                var newFact = {
                    headline: headlines[i],
                    details: details[i],
                    creator: creators[i]
                }

                Fact.create(newFact, function(err, factCreated){
                    if (err) {
                        console.log("A fatal error occured while adding fact to the database");
                    } else {
                        console.log("Fact added to db!")
                    }
                })
            }
        }
    })
}

module.exports = seedDatabase;