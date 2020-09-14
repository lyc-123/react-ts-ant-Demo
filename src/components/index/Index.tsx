import * as React from 'react'
import Header from '../../pages/index/indexHeader/Header'
import { getCalendar } from "../../utils/request/api/index";
interface IProps{
    name: string;
}
export default class Index extends React.Component<{}>{
    public constructor(props:IProps){
        super(props)
    }
    public componentDidMount() {
        getCalendar().then(res=>{
            console.log(res)
        })
    }
    public render(){
        return(
            <div>
                <Header/>
                首页
            </div>
        );
    }
}
