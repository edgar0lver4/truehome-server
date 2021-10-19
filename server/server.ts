import express,{Application, Router} from 'express';
import cors from 'cors';
const corsOptions = {
    origin:'*'
}
export default class Server{
    protected directions:Array<any> = []
    private app:Application | undefined;
    private port:String;
    private defaultPath:String;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.defaultPath = '/api';
    }

    public addApiDir(direction:String, route:Router):void {
        let direct = {
            apiDir: direction,
            router: route
        }
        this.directions.push(direct);       
    } 

    public start():void{
        this.app?.use(cors(corsOptions));
        for(let i = 0; i < this.directions.length; i++){
            this.app?.use(this.defaultPath+this.directions[i].apiDir,this.directions[i].router);
            console.log("Listen route "+this.defaultPath+this.directions[i].apiDir)
        }
        this.listen();
    }

    private listen(){
        this.app?.listen(this.port,()=>{
            console.log('Application runs in port '+this.port)
        });
    }
}