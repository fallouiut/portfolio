import { TextContent } from "./TextContent";

export class EnglishTextContent implements TextContent {

    readonly lang: string = 'en';
    
    getInfos() {
        return "Créated at 2021/10/10";
    }

    getButtonsName() {
        return {
            fallou: "The F.",
            school: "School",
            pro   : "Professional",
            perso : "Personal",
            stack : "Tech. Stack",
        }
    }

    getPresentationContent() {
        return {
            age      : "24 y. o.",
            forLiving: "App developer",
            location : "Marseille",
            driveLicense  : "French license"
        }
    }

    getSchoolContent() {
        return [

            {
                img: "assets/imgs/school/aix-marseille.png",
                years: "2019 - 2022",
                name: "M.A. - Software Engineering"
            },

            {
                img: "assets/imgs/school/aix-marseille.png",
                years: "2018 - 2019",
                name: "Computer Science Bachelor"
            },

            {
                img: "assets/imgs/school/iut_logo.png",
                years: "2015 - 2018",
                name: "Computer Science A.D."
            },


            {
                img: "assets/imgs/school/lvh.png",
                years: "2012 - 2015",
                name: "High School Graduation"
            },


        ]
    }

    getExperiencesContent() {
        return [
            {
                expName:    "Internship - Web Development",
                duration:   "2021, Apr. - 2021, Sept",
                company:   "Stanley Security France",
                techs:      ".NET / Transact-SQL",
                description: "Database migration. API end-point development",
                place: "Remote work",
                rapportUrl: "",
                imgUrl:     "assets/imgs/companies/logo_stanley.png",

            },
            {
                expName:    "Internship - Desktop Development",
                duration:   "2020, May - 2020, Sept.",
                company:   "Université Gustave Eiffel",
                techs:      "C++ / QT / Qml",
                description: "Developing the Database module for Alizé 2.0 software",
                rapportUrl: "assets/rapports/rapport_2020.pdf",
                imgUrl:     "assets/imgs/companies/uge.png",
                place: "Remote work + Nantes",


            },
            {
                expName:    "Internship - Web Development",
                duration:   "2018, Apr. - 2018, June",
                company:   "Benjamin Bellantonio",
                techs:      "Symfony / Socket.io / jQuery / RabbitMQ / Docker",
                description: "Déveloping some features (forms, realtime notifications & chat, weather news system) for Angel Protect System's website",
                rapportUrl: "assets/rapports/rapport_2018.pdf",
                imgUrl:     "assets/imgs/companies/aps.png",
                place: "Gardanne",


            }
        ]
    }

    getPersonalContent() {
        return [
            
            {
                img     : "assets/imgs/pp.png",
                duration: "2021",
                descr   : "My own portfolio",
                url     : ""
            },

            {
                img     : "assets/imgs/persos/kyn.png",
                duration: "2019, Dec - 2020, Feb",
                descr   : "Finishing + content adding",
                url     : "https://kyntradingco.com/"
            },

            {
                img     : "assets/imgs/persos/assak_logo.png",
                duration: "2016 - in progress",
                descr   : "School courses shares, School assistance",
                url     : "https://www.assak.fr"
            },


        ];
    }
    
}