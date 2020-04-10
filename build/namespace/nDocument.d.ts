import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';
declare namespace nDocument {
    const Document: (documentName: string) => cDocument;
    const Package: (packageName: string) => cPackage;
}
export { nDocument };
