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

    
}