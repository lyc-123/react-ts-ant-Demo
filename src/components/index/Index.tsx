import * as React from 'react'
import Header from '../../pages/index/indexHeader/Header'
import Data1 from '../../pages/index/indexDate/Date'
import './index.scss'
interface IProps{
    name: string;
}
export default class Index extends React.Component<{}>{
    public constructor(props:IProps){
        super(props)
    }
    public render(){
        return(
            <div className="wrap">
                <Header/>
                <Data1/>
            </div>
        );
    }
}
