import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';

namespace nDocument {
    
    export const create = (documentName: string) => {
        return new cDocument(documentName);
    };

    export const document = (documentName: string) => {
        return new cDocument(documentName);
    };

    export const createPackage = (packageName: string) => {
        return new cPackage(packageName);
    }

}

export { nDocument };