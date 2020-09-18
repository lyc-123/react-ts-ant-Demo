import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.scss'
import './swiper1.scss'
import { showBanner } from "../../../utils/request/api/index";
class SwiperBox extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        this.state = {
            info:[]
        }
    }
    public componentWillMount() {
        showBanner().then((res:any)=>{
            this.setState({
                info:res.data.hotList,
                checkSwiper:0
            })
        })
    }
    public render(){
        console.log(this.state.info)
        return(
            <Swiper
            className="index-swiper-wrap"
            slidesPerView={1}
            direction='vertical'
            loop={true}
            autoplay={{
                delay: 3000,
                // stopOnLastSlide: false,
                disableOnInteraction: false,
            }}
            onSlideChange={(res) => {console.log(this.state.info[res.realIndex]);this.setState({checkSwiper:res.realIndex})}}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {
                this.state.info.map((value:any,index:number)=>{
                    return <SwiperSlide key={index}>
                    <img src={value.bannerImgUrl} alt=""/>
                    </SwiperSlide>
                })
            }
            <div className="index-swiper-pagination">
                {
                    this.state.info.map((value:any,index:number)=>{
                        return <div key={index} className={`index-swiper-pagination-icon ${this.state.checkSwiper===index?'pagination-active':''}`}></div>
                    })
                }
            </div>
            <div className="index-swiper-page">
                <div>{this.state.checkSwiper+1}/{this.state.info.length}</div>
            </div>
            </Swiper>
        );
    }
}
export default SwiperBox