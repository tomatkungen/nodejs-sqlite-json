import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';

namespace nDocument {
    
    export const Package = (packageName: string) =>
        (new cPackage(packageName));
    
     export const Document = (documentName: string) =>
        (new cDocument(documentName));

}

export { nDocument };