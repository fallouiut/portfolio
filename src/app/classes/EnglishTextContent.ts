import { TextContent } from "./TextContent";

export class EnglishTextContent implements TextContent {

    readonly lang: string = 'en';
    
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
                img: "assets/imgs/school/iut_logo.png",
                years: "2012 - 2015",
                name: "High School Graduation"
            },


        ]
    }

    getExperiencesContent() {
        throw new Error("Method not implemented.");
    }
    
}