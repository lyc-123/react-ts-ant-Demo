import * as React from 'react'
import './date.scss'
import { getCalendar } from "../../../utils/request/api/index";
class Date1 extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        this.state = {
            info:{
            },
            active:false
        }
        
    }
    public componentWillMount() {
        getCalendar().then((res:any)=>{
            this.setState({
                info:res.data
            })
        })
    }
    public addClass = () => {
        let active = this.state.active;
        active = !active;
        this.setState({ active });
        console.log(this.state.active)
    }
    public render(){
        return(
            <div className="index-container">
                <div className={`index-wrap ${this.state.active?'index-open-card':'index-open-card1'}`}>
                    <div className='index-data-wrap-front' onClick={()=>this.addClass()}>
                        <p>{this.state.info.solarTerm}</p>
                        <p>{this.state.info.nlDateDesc}</p>
                        <p>{this.state.info.tag1}</p>
                        <p>{this.state.info.tag2}</p>
                    </div>
                    <div className='index-data-wrap-back' onClick={()=>this.addClass()}>
                        <p>{this.state['info']["holiday"]}</p>
                        <p>{this.state['info']["dateDesc"]}</p>
                        <p>{this.state['info']["tag1Desc"]}</p>
                        <p>{this.state['info']["tag2Desc"]}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Date1