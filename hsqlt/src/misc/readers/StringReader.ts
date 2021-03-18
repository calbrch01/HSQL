import {IReader} from './Reader';
export class StringReader implements IReader{
    constructor(public str:string){}
    async read(){
        return this.str;
    }
    async readPart(pos:number,len:number){
        const str = await this.read();
        return str.substring(pos,pos+len);
    }
    getSourceName() {return 'string'}
}