export const hardCoded = {
    header: {
        profileName: "Henry Ryu",
        profileDetails: "SF-based full-stack developer trained in React.js, Redux, Vue.js, Angular.js, Node.js, Express.js, Ruby on Rails, PostgreSQL, JavaScript, CSS and HTML5.",   
        profileSocials: {
            githubURL: "https://github.com/hkryucr",
            linkedInURL: "https://www.linkedin.com/in/henryryume/",
            angelListURL: "https://angel.co/u/henry-ryu"
        }
    },
    body: {
        leftPanel: [
            {
                tabId: -1,
                title: "Trello Clone",
                content: "A clone app of Trello (web-based list-making applications), built on Vue.js, Socket.io, Express.js, Node.js"
            },
            {
                tabId: 0,
                title: "Eat Together",
                content: "A social matching app built on MERN(MongoDB, Express.js, React, Node.js)"
            },
            {
                tabId: 1,
                title: "Yocal",
                content: "A clone app of Yelp built on Ruby on Rails, PostgreSQL database, React.js and Redux"
            },
            {
                
                tabId: 2,
                title: "3D Path Finder",
                content: "An interactive algorithm visualization built with JavaScript, CSS, and HTML"
            },
            {
                tabId: 3,
                title: "Collection",
                content: "The collection of Urban Design / GIS(Geosptatial Information System) projects"
            },
        ],
        projectInfo: [
            {
                title: "Trello Clone",
                gitLink: "https://github.com/hkryucr/trello-clone",
                liveLink: "https://trello2.herokuapp.com/",
                stacks: "(Vue.js, Socket.io, Node.js, Express.js, MongoDB, JavaScript, CSS)",
                info:
                "Single-page full-stack web application modeled after Trello.",
                infoFeatures: [
                "Served as a project lead for a 4-person team developing a project, managing application, controlling Git workflow and leading system design while overseeing completion within 2 months time frame",
                "Implemented fully responsive, device-agnostic front end web page using Vue.js, CSS flexbox, and media queries.",
                "Utilized Socket.io to implement real-time communication between web clients and server.",
                "Developed reusable, modular modal components for optimized front-end architecture and faster development workflow."
                ],
                imgUrl: "https://trello-clone-bg.s3-us-west-1.amazonaws.com/board_interface.gif",
            },
            {
                title: "Eat Together (Chicken Tinder)",
                gitLink: "https://github.com/hkryucr/mern-ct",
                liveLink: "https://lit-atoll-81167.herokuapp.com/",
                stacks: "(React.js, Node.js, Express.js, MongoDB, React/Flux, JavaScript, CSS)",
                info:
                "A web app to help groups match everyone's dietary preferences and location to restaurants and bars.",
                infoFeatures: [
                "Architected SPA (Single-Page Application) using best practices in state management by incorporating React with Redux.",
                "Implemented fully responsive, device-agnostic front end web page using React, CSS flexbox, and media queries.",
                "Integrated search feature with Mapbox API to show business locations in a map view.",
                "Constructed user authentication with Passport.js and BCrypt for password hashing.",
                "Conducted code reviews and assisted other team members with building UI."
                ],
                imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/CT_Overview.gif",
            },
            {
                title: "Yocal",
                gitLink: "https://github.com/hkryucr/fsp-yocal",
                liveLink: "http://fsp-yocal.herokuapp.com/#/",
                stacks:
                "(Ruby on Rails, PostgreSQL, React/Redux, JavaScript, CSS, HTML)",
                info:
                "A clone app showcasing the major features and functions on Yelp.",
                infoFeatures: [
                "Produced reusable react components to mimic Yelp's design system.",
                "Integrated geolocation-based searching with Google Maps API to display the location of businesses on a map.",
                "Integrated Yelp Fusion API with Ruby on Rails backend to display restaurants.",
                "Implemented a fast search feature that auto-completes by front-loaded results and filtering by Regular Expressions.",
                "Developed feature for users to upload their images to the AWS S3 backend that is optimized with Active Storage.",
                "Built full user authentication for signup/login using BCrypt",
                ],
                imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/Yocal_Overall_App.gif",
            },
            {
                title: "3D Path Finder",
                gitLink: "https://github.com/hkryucr/3d-path-finder",
                liveLink: "https://hkryucr.github.io/3d-path-finder/",
                stacks: "(JavaScript, CSS, HTML)",
                info: "A single page app that visualizes path finding algorithms.",
                infoFeatures: [
                "Implemented efficient algorithms such as Dijkstra's algorithm to find the shortest path of nodes.",
                "Created an easy-to-understand visualization to display the shortest path using javascript and CSS.",
                ],
                imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/Path_Finder.gif",
            }
        ]
    }
}   
