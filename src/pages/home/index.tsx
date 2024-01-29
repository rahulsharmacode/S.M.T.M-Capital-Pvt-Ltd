import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { webColors } from "../../utils/constant"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from "react-router-dom";
import  Headsection  from "../../component/headsection";


const index = () => {

    const portfolioValue = [
        {id: 0 , gain:'+18,234.10', gainLabel : "Day's Gain", unrelised:'-12.12 lac' , unrelisedLabel : "Unrelised Gain" },
        {id: 1 , gain:'+18,234.10', gainLabel : "Day's Gain", unrelised:'-12.12 lac' , unrelisedLabel : "Unrelised Gain" },
        {id: 2 , gain:'+18,234.10', gainLabel : "Day's Gain", unrelised:'-12.12 lac' , unrelisedLabel : "Unrelised Gain" },
        {id: 3 , gain:'+18,234.10', gainLabel : "Day's Gain", unrelised:'-12.12 lac' , unrelisedLabel : "Unrelised Gain" },
    ]
  return (<>
  <Container fluid style={{backgroundColor : webColors.primary , minHeight : '100vh' , height : '100%'}}> 
    <Container>
        <Row>

            <Headsection title="Portfolio" />
           

            <Col xs={12} className="d-flex justify-content-between align-items-center" style={{height : 60}}>
                <div className="item-box">
                <Button style={{backgroundColor : webColors.light}} className="btn-info white-btn">Overview</Button>
                </div>
                <div className="item-box">
                <Button style={{backgroundColor : webColors.cardBg, color : 'white'}} className="btn-info light-btn">+ Portfolio</Button>
                </div>
            </Col>

            <Col xs={12} className="">
                <Card style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                    <Card.Header className="border-0 d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                        <p className="fs-16-500 my-auto">Total Portfolio Value</p>
                        <p className="fs-20-600 my-auto">5.45 Cr</p>
                    </Card.Header>
                    <Card.Body className="" >
                        {
                            portfolioValue.map((val:any,index:number) =>{
                            return  <Row className="mb-lg-3 mb-2" key={index}>
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600"  style={{color : webColors.success}}>{val.gain}</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>{ val.gainLabel || "Day's Gain"}</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>{val.unrelised}</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>{ val.unrelisedLabel || "Unrelised Gain"}</p>
                            </Col>
                        </Row>
                            })
                        }
                       
                        
                    </Card.Body>
                    <Card.Footer className="border-0 ">
                        <Row className="mb-lg-3 mb-2">
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600 text-white">+18,234.10</p>
                                <small  className="my-0 fs-18-600"   style={{color : webColors.success}}>(+9.99%)</small>
                                <p className="my-0"   style={{color : webColors.secondary}}>Realised Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600 text-white">-12.12 lac</p>
                                <small  className="my-0 fs-18-600"   style={{color : webColors.danger}}>(-9.99%)</small>
                                <p className="my-0"   style={{color : webColors.secondary}}>Overall Gain</p>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>

            <Col xs={12} className="my-lg-4 my-2">
                
                <div className="title-box w-100">
                <p className="fs-24-400 text-white">Your Portfolio</p>
                </div>

                <div className="tab-box">
                <Tabs
      defaultActiveKey="daysgain"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="daysgain" title="Day's gain">
      <Card className="bg-transparent border-0">
                  
                    <Card.Body className="" >
                        <NavLink to={'/protfolio-details/farm'} className={'text-decoration-none '}>
                        <Row className="mb-lg-3 mb-2 p-2 rounded-2"  style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600">Farm</p>
                                <p className="my-0 fs-18-600">68,121.00</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-234.00</p>
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-0.36%</p>
                            </Col>
                        </Row>
                        </NavLink>

                        <NavLink to={'/protfolio-details/mero'} className={'text-decoration-none '}>
                        <Row className="mb-lg-3 mb-2 p-2 rounded-2"  style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600">Mero</p>
                                <p className="my-0 fs-18-600">68,121.00</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-234.00</p>
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-0.36%</p>
                            </Col>
                        </Row>
                        </NavLink>
                    </Card.Body>
                
                </Card>
      </Tab>
      <Tab eventKey="Unrealised" title="Unrealised">
      <p className="text-white text-center font-24-500">No Data</p>
      </Tab>
      <Tab eventKey="Relised" title="Relised">
      <p className="text-white text-center font-24-500">No Data</p>
      </Tab>
      <Tab eventKey="Overall" title="Overall">
        <p className="text-white text-center font-24-500">No Data</p>
      </Tab>
    </Tabs>
                </div>
            </Col>


        </Row>
    </Container>
  </Container>
  
  </>)
}

export default index