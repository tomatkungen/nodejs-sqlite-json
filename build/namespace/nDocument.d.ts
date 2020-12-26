import { cDocument } from '../class/cDocument';
import { cPackage } from '../class/cPackage';
declare namespace nDocument {
    const Package: (packageName: string, ...documentNames: string[]) => cPackage;
    const Document: (documentName: string, packageName?: string | undefined) => cDocument;
}
export { nDocument };
