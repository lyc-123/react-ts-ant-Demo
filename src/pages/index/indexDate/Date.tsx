import * as React from 'react'
import './date.scss'
import { getCalendar } from "../../../utils/request/api/index";
class Date1 extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        this.state = {
            info:{
            },
            active:true
        }
        
    }
    public componentWillMount() {
        getCalendar().then((res:any)=>{
            this.setState({
                info:res.data,
                active:false,
            })
        })
    }
    public addClass = () => {
        let active = this.state.active;
        active = !active;
        this.setState({ active });
    }
    public render(){
        return(
            <div>
                {
                    this.state.active?
                <div className={`index-data-wrap  ${this.state.active?'index-open-card':''}`} onClick={()=>this.addClass()}>
                    <p>{this.state.info.solarTerm}</p>
                    <p>{this.state.info.nlDateDesc}</p>
                    <p>{this.state.info.tag1}</p>
                    <p>{this.state.info.tag2}</p>
                </div>
                :
                <div className={`index-data-wrap1  ${this.state['active']?'':'index-open-card1'}`} onClick={()=>this.addClass()}>
                    <p>{this.state['info']["holiday"]}</p>
                    <p>{this.state['info']["dateDesc"]}</p>
                    <p>{this.state['info']["tag1Desc"]}</p>
                    <p>{this.state['info']["tag2Desc"]}</p>
                </div>
                }
            </div>
            
        );
    }
}
export default Date1