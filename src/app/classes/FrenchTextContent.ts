import { TextContent } from "./TextContent";

export class FrenchTextContent implements TextContent {

    readonly lang: string = 'fr';

    getInfos() {
        return "Crée le 10/10/2021";
    }
    
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
                img: "assets/imgs/school/lvh.png",
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
                company:   "Stanley Security France",
                techs:      ".NET / Transact-SQL",
                description: "Migration de données d'une base à une autre. Développement de certaines requêtes de l'API de l'espace client",
                rapportUrl: "",
                imgUrl:     "assets/imgs/companies/logo_stanley.png",
                place: "Télétravail",

            },
            {
                expName:    "Stage - Développeur",
                duration:   "Mai. 2020 - Sept. 2020",
                company:   "Université Gustave Eiffel",
                techs:      "C++ / QT / Qml",
                description: "Développement du module 'Base de données' du logiciel Alizé 2.0",
                rapportUrl: "assets/rapports/rapport_2020.pdf",

                imgUrl:     "assets/imgs/companies/uge.png",
                place: "Télétravail + Nantes",

            },
            {
                expName:    "Stage - Développeur",
                duration:   "Avr. 2018 - Juin. 2018",
                company:   "Benjamin Bellantonio",
                techs:      "Symfony / Socket.io / jQuery / RabbitMQ / Docker",
                description: "Développement de certaines fonctionnalités (formulaires, chat et notifications en temps réel, système de news météo) du site 'Angel Protect System'",
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
                descr   : "Portfolio",
                url     : ""
            },

            {
                img     : "assets/imgs/persos/kyn.png",
                duration: "Déc 2019 - Fev 2020",
                descr   : "Finition + ajout de contenu",
                url     : "https://kyntradingco.com/"
            },

            {
                img     : "assets/imgs/persos/assak_logo.png",
                duration: "2016 - en cours",
                descr   : "Partage de cours, aide scolaire",
                url     : "https://www.assak.fr"
            },

        ];
    }
    
}