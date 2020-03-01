import { cDocument } from "./cDocument";
import { iPackage } from "../interface/iStructure";
import { cSqlite } from "./cSqlite";

class cPackage implements iPackage {

    private _packageName: string;
    private _cSqlite: cSqlite;

    constructor(packageName: string) {
        this._packageName   = packageName;
        this._cSqlite       = new cSqlite();

        this._cSqlite
            .executePreDefiniedQuery(
                'CreateTable',
                this._packageName
            );
    }

    public add(documentName: string): cPackage { 

        this._cSqlite
            .executePreDefiniedQuery(
                'InsertIntoTable',
                this._packageName,
                documentName
            );

        return this; 
    }

    public toJson(): { [key: string]: any } {

        return this._cSqlite
            .selectPreDefinedQuery('SelectLimitOne', this._packageName)
            .reduce((prev: { [key: string]: any }, curr: { [key: string]: any }) => {
                return {...prev, ...curr};
            }, {});

    }

    public toArray(): { [column: string]: any }[] {

        return this._cSqlite
            .selectPreDefinedQuery('SelectLimitOne', this._packageName)
            .reduce((prev: any[], obj: { [column: string]: any }) => {

                Object.keys(obj).forEach((key: string) => {
                    let newObj: { [column: string]: any } = {};
                    newObj[key] = obj[key];
                    prev.push(newObj);
                });

                return prev;
            }, []);
    }

    public document(documentName: string): cDocument {
        return new cDocument(documentName, this._packageName);
    }

}

export {cPackage};