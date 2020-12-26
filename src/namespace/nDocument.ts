import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';

namespace nDocument {
    
    export const Package = (packageName: string, ...documentNames: string[]) =>
        (new cPackage(packageName, ...documentNames));
    
     export const Document = (documentName: string, packageName?: string) =>
        (new cDocument(documentName, packageName));

}

export { nDocument };