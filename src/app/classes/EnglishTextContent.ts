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

    
}