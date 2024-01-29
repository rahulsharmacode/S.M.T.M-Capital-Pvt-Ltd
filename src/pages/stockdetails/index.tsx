import { Button, Card, Col, Container, Dropdown, Row, Table } from "react-bootstrap"
import { webColors } from "../../utils/constant"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import  Headsection  from "../../component/headsection";
import { useEffect, useState } from "react";
import { BackArrow } from "../../assets/icons/svgIcons";


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
        {id: 0 , date: '2022-11-08' , type : 'Secondary' , qty : '1400' , price : '1400'},
        {id: 1 , date: '2022-11-08' , type : 'Secondary' , qty : '1800', price : '1800'},
        {id: 2 , date: '2022-11-08' , type : 'Secondary' , qty : '200', price : '200' },
        {id: 3 , date: '2022-11-08' , type : 'Secondary' , qty : '1500', price : '1500'},

    ]

  return (<>
  <Container fluid style={{backgroundColor : webColors.primary , minHeight : '100vh' , height : '100%'}}> 
    <Container>
        <Row>
            

            <Headsection title={`${currentPortfolio?.title}`} />
           

            <Col xs={12} className="d-flex justify-content-between align-items-center" style={{height : 60}}>
                
                <div className="item-box" onClick={()=>{navigate(-1)}}>
                <BackArrow color={'white'} className="cursor-pointer" />
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
                <Card className="text-white border-0" style={{backgroundColor : webColors.primary}}>
                    <Card.Header className="border-0 d-flex justify-content-between align-items-center flex-wrap bg-transparent">
                        <p className="fs-16-500 my-auto">Portfolio Value</p>
                        <p className="fs-20-600 my-auto">5.45 Cr</p>
                    </Card.Header>
                    <Card.Body className="rounded-2"  style={{backgroundColor : webColors.cardBg , color : 'white'}} >
                        <Row className="mb-lg-3 mb-2">
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600"  style={{color : webColors.success}}>+18,234.10</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Day's Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-12.12 lac</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Unrelised Gain</p>
                            </Col>
                        </Row>
                        <Row className="mb-lg-3 mb-2">
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600"  style={{color : webColors.success}}>+18,234.10</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Day's Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-12.12 lac</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Unrelised Gain</p>
                            </Col>
                        </Row>
                        <Row className="mb-lg-3 mb-2">
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600"  style={{color : webColors.success}}>+18,234.10</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Day's Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600"   style={{color : webColors.danger}}>-12.12 lac</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Unrelised Gain</p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="border-0" >
                        <Row className="mb-lg-2 mb-2 p-2 rounded-2" style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600 text-white">+18,234.10</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Realised Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600 text-white">-12.12 lac</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Overall Gain</p>
                            </Col>
                        </Row>
                        <Row className="mb-lg-2 mb-2 p-2 rounded-2" style={{backgroundColor : webColors.cardBg , color : 'white'}}>
                            <Col xs={6} className="">
                                <p className="my-0 fs-18-600 text-white">+18,234.10</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Realised Gain</p>
                            </Col>
                            <Col xs={6} className="text-end">
                                <p className="my-0 fs-18-600 text-white">-12.12 lac</p>
                                <p className="my-0"   style={{color : webColors.secondary}}>Overall Gain</p>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>

            <Col xs={12} className="my-lg-4 my-2">
                
                <div className="title-box w-100 d-flex justify-content-between align-items-center mb-2">
                <p className="fs-24-400 text-white my-auto">Transaction</p>

                
                </div>

                <div className="table-box bg-transparent">
                    <Table bgcolor="" className="bg-transparent" style={{backgroundColor : 'transparent'}}>
                        
                            <thead>
                                <tr>
                                    <td><strong className="font-18-500">Date </strong> </td>
                                    <td><strong className="font-18-500">Type </strong> </td>
                                    <td><strong className="font-18-500">Qty </strong> </td>
                                    <td><strong className="font-18-500">Price </strong> </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stockData.map((val:any,index:number)=>{
                                        return <tr key={index}>
                                        <td><strong className="font-18-500">{val.date}</strong></td>
                                        <td><strong >{val.type}</strong></td>
                                        <td><strong >{val.qty}</strong></td>
                                        <td><strong >{val.price}</strong></td>

                                 

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