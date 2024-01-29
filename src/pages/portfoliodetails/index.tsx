import { Button, Card, Col, Container, Dropdown, Row, Table } from "react-bootstrap"
import { webColors } from "../../utils/constant"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import  Headsection  from "../../component/headsection";
import { useEffect, useState } from "react";


const index = () => {

    let {slug} = useParams<any>();
    let navigate = useNavigate()

    const portfolioItems = [
        {
            id : 0, title : 'Farm' , slug:"farm"
        },
        {
            id : 0, title : 'Mero' , slug:"mero"
        },
    ];

    const [currentPortfolio , setcurrentPortfolio] = useState<any>([]);
    const [currentStockRs , setcurrentStockRs] = useState<boolean>(false);


    useEffect(()=>{
        let filterData = portfolioItems.find((item) => item.slug == slug?.toString());
        setcurrentPortfolio(
            filterData);

    } , [slug]);


    const stockData = [
        {id: 0 , title: 'ADBL' , gainPer : '+0.53%' , gainRs : '+1400 Rs' , lossPer: '+148.00%' , lossRs : '-1400 Rs'},
        {id: 1 , title: 'RDBL' , gainPer : '+0.73%' , gainRs : '+1800 Rs' , lossPer: '+122.00%' , lossRs : '-1800 Rs'},
        {id: 2 , title: 'TDBL' , gainPer : '+0.23%' , gainRs : '+200 Rs' , lossPer: '+170.00%' , lossRs : '-200 Rs' },
        {id: 3 , title: 'YDBL' , gainPer : '+0.73%' , gainRs : '+1500 Rs' , lossPer: '+108.00%' , lossRs : '-1500 Rs'},

    ]

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
            

            <Headsection title={`${currentPortfolio?.title}`} />
           

            <Col xs={12} className="d-flex justify-content-between align-items-center" style={{height : 60}}>
                
                <div className="item-box">
                <NavLink to={'/'}>
                <Button style={{backgroundColor : webColors.cardBg, color : 'white'}} className="btn-info light-btn">Back to Overview</Button>
                </NavLink>
                </div>
                <div className="item-box">
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-info" style={{backgroundColor : webColors.light}}>
      {currentPortfolio?.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
            portfolioItems.map((val:any,index:number) => {
                return <NavLink to={`/protfolio-details/${val.slug}`}  className="text-decoration-none" key={index}>
                    <div className="box p-2 text-black border-bottom">
                    {val.title}
                    </div>
                </NavLink>
            })
        }
        
      </Dropdown.Menu>
    </Dropdown>
                </div>
            </Col>

            <Col xs={12} className="">
                <Card style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                    <Card.Header className="border-0 d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                        <p className="fs-16-500 my-auto">Portfolio Value</p>
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
                
                <div className="title-box w-100 d-flex justify-content-between align-items-center mb-2">
                <p className="fs-24-400 text-white my-auto">Stocks</p>

                <div className="btn-box">
                    <Button onClick={()=>{setcurrentStockRs(false)}} className="border-0 me-2" style={{ backgroundColor : !currentStockRs ? webColors.skyblue : webColors.cardBg , borderRadius : '50%' , height : 40 , width : 40}}>
                    %
                    </Button>
                    <Button onClick={()=>{setcurrentStockRs(true)}} className="border-0"  style={{ backgroundColor : currentStockRs ? webColors.skyblue : webColors.cardBg , borderRadius : '50%' , height : 40 , width : 40}}>
                    Rs
                    </Button>
                </div>
                </div>

                <div className="table-box bg-transparent">
                    <Table bgcolor="" className="bg-transparent" style={{backgroundColor : 'transparent'}}>
                        
                            <thead>
                                <tr>
                                    <td></td>
                                    <td><strong className="font-18-500">Day's Gain </strong> </td>
                                    <td><strong className="font-18-500">Unrealised Gain </strong> </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stockData.map((val:any,index:number)=>{
                                        return  <tr onClick={() => navigate(`/protfolio/stock-details/${currentPortfolio.slug}`)}  key={index}>
                                        <td><strong className="font-18-500">{val.title}</strong></td>
                                        <td><strong  style={{color : webColors.success}}>{currentStockRs  ? val.gainRs : val.gainPer}</strong></td>
                                        <td><strong  style={{color : webColors.danger}}>{currentStockRs  ? val.lossRs : val.lossPer}</strong></td>
                                    </tr>
                                       
                                    })
                                }
                                
                                
                            </tbody>
                    </Table>
                </div>
            </Col>


        </Row>
    </Container>
  </Container>
  
  </>)
}

export default index