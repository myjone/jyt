import React, { Component } from 'react';
import Commanbar from '@/components/pc/CommanBar';
class About extends Component {
    state = {  }
    render() { 
        return (  
            <div>
               <div className='w1200 about'>
                   <h1 className='fullH1'>公司简介</h1>
                   <p className='about-content'>
                   小鹅通是专注新教育的技术服务商，业务矩阵包含SaaS服务、流量服务、生态服务三大服务模式，从工具、流量、人才等多方面为教育机构及内容从业者赋能，并提供集营销获客、效率提升、商业变现为闭环的一整套互联网解决方案。
                   </p>
                   <p className='about-content'>
                   自2016年12月上线至今，小鹅通已经服务了超过50万商家，其中不乏众多一线教育品牌及知名机构，如好未来家长大学、英孚青少儿英语、吴晓波频道、十点课堂、樊登读书、张德芬空间等，累计为客户创造营收35亿元，覆盖C端用户3亿人。
                   </p>
               </div>
               <div className='w1200 about'>
                   <h1 className='fullH1'>我们努力践行的文化</h1>
                   <ul className="about-item-wrap">
                        <li>
                            <p className="tile">
                                使命
                            </p>
                            <p className="info">
                               让知识更有价值
                            </p>
                        </li>
                        <li>
                            <p className="tile">
                                愿景
                            </p>
                            <p className="info">
                                最值得信赖的技术服务商
                            </p>
                        </li>
                        <li>
                            <p className="tile">
                            价值观
                            </p>
                            <p className="info">
                            以客户为中心，向善，有担当
                            </p>
                        </li>
                   </ul>
               </div>
               <div className='w1200 about'>
                   <h1 className='fullH1'>我们始终秉承的理念</h1>
                   <ul className="about-item-wrap">
                        <li>
                            <p className="tile">
                            专业技术
                            </p>
                            <p className="info">
                            我们拥有行业专业技术实力与资深工程开发团队，为您的商业变现及产品需求保驾护航。

贴心服务
我们始终坚持优质的服务理念，无论任何时候您遇到困难，我们都会及时提供精准有效的解决方案。

创业伙伴

                            </p>
                        </li>
                        <li>
                            <p className="tile">
                            贴心服务
                            </p>
                            <p className="info">
                            我们始终坚持优质的服务理念，无论任何时候您遇到困难，我们都会及时提供精准有效的解决方案。
                            </p>
                        </li>
                        <li>
                            <p className="tile">
                            创业伙伴
                            </p>
                            <p className="info">
                            我们把每一位客户都当做创业伙伴，期盼在未来成长的道路上一路相伴，携手前行。
                            </p>
                        </li>
                   </ul>
               </div>
               

               <Commanbar/>
            </div>
        );
    }
}
 
export default About;