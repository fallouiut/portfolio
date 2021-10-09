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


    
}