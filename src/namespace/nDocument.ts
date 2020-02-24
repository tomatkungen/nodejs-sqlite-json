import { cDocument } from '../class/cDocument';

namespace nDocument {
    
    export const createDocument = (documentName: string) => 
        (new cDocument(documentName));
    

    export const document = (documentName: string) => {
        (new cDocument(documentName));


    export const createPackage = (packageName: string) =>
        (new cDocument(packageName));

}

export { nDocument };