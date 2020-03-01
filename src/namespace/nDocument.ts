import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';

namespace nDocument {
    
    export const Document = (documentName: string) =>
        (new cDocument(documentName));
    
    export const Package = (packageName: string) =>
        (new cPackage(packageName));

}

export { nDocument };