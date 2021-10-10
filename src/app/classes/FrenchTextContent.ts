import { TextContent } from "./TextContent";

export class FrenchTextContent implements TextContent {

    readonly lang: string = 'fr';
    
    getButtonsName() {
        return {
            fallou: "Le F.",
            school: "Scolaire",
            pro   : "Professionel",
            perso : "Personnel",
            stack : "Stack",
        }
    }

    getPresentationContent() {
        return {
            age      : "24 ans",
            forLiving: "Développeur",
            location : "Marseille",
            driveLicense  : "Permis B (2017)"
        }
    }

    getSchoolContent() {
        return [

            {
                img: "assets/imgs/school/aix-marseille.png",
                years: "2019 - 2022",
                name: "Master Informatique - Ingénierie du Logiciel"
            },

            {
                img: "assets/imgs/school/aix-marseille.png",
                years: "2018 - 2019",
                name: "Licence Informatique - Aix-Montperrin"
            },

            {
                img: "assets/imgs/school/iut_logo.png",
                years: "2015 - 2018",
                name: "DUT Informatique - Aix-en-Provence"
            },


            {
                img: "assets/imgs/school/iut_logo.png",
                years: "2012 - 2015",
                name: "Baccalauréat STL - Lycée Victor Hugo"
            },

        ]
    }

    getExperiencesContent() {
        return [
            {
                expName:    "Stage - Développeur",
                duration:   "Avr. 2021 - Sept. 2021",
                compagny:   "Stanley Security France",
                techs:      ".NET / Transact-SQL",
                description: "Migration de doonnées d'une base à une autre. Développement de certaines requêtes de l'API de l'espace client",
                rapportUrl: "",
                imgUrl:     "assets/imgs/companies/logo_stanley.png",

            },
            {
                expName:    "Stage - Développeur",
                duration:   "Mai. 2020 - Sept. 2020",
                compagny:   "Université Gustave Eiffel",
                techs:      "C++ / QT / Qml",
                description: "Développement du module 'Base de données' du logiciel Alizé 2.0",
                rapportUrl: "",
                imgUrl:     "assets/imgs/companies/uge.png",

            },
            {
                expName:    "Stage - Développeur",
                duration:   "Avr. 2018 - Juin. 2018",
                compagny:   "Benjamin Bellantonio",
                techs:      "Symfony / Socket.io / jQuery / RabbitMQ / Docker",
                description: "Développement de certaines fonctionnalités du site 'Angel Protect System'",
                rapportUrl: "",
                imgUrl:     "assets/imgs/companies/aps.png",

            }
        ]
    }

    
}