// {
//     "version" : 2,
//     "name" : "Full Stack",
//     "builds" : [
//         {
//             "src" : "./index.js",
//             "use" : "@vercel/node"
//         }
//     ],
//     "routes" : [
//         {
//             "src" : "/(.*)",
//             "dest" : "/"
//         }
//     ]
// }



{
    "version" : 2,
    "name" : "Full Stack",
    "builds" : [
        {
            "src" : "./server.js",
            "use" : "@vercel/node"
        }
    ],
    "routes" : [
        {
            "src" : "/(.*)",
            "dest" : "/"
        }
    ]
}
