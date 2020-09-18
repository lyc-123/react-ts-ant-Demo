import * as React from 'react'
import Header from '../../pages/index/indexHeader/Header'
import Data1 from '../../pages/index/indexDate/Date'
import SwiperBox from '../../pages/index/indexSwiper/Swiper'
import { Tag ,Button} from 'antd-mobile'


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
                <div className="header-box">
                    <Data1/>
                    <SwiperBox/>
                </div>
                <Tag >Basic</Tag>
                <Button type="primary">ddsad</Button>
                <div className="pDiv">dasdasdsad</div>
            </div>
        );
    }
}
