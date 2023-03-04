import React,{useEffect, useState} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../common/Spinner';
import Property from './Property';
import {getproperties} from '../../api/apiSlice';
import Title from '../common/Title';
    
	
	
const PropertiesPage = () => {
    const {properties,status}=useSelector((state)=>state.api)
    const [url,setUrl]= useState("/api/properties/all/")
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(getproperties({'url': url}));
    },[dispatch,url])
    if (status==="pending"){
        return <Spinner />;
    }


    return (
        <>
            <Container>
                <Row>
                    <Col className='mg-top text-center'>
                    <h1>Our catalog of properties</h1>
                    <hr className='hr-text'/>
                    </Col>
                </Row>
                {
                    <>
                    <Title title="Our Properties Catalog"/>
                    <Row className='mt-3'>
                    {status==="success" && properties && properties.results && properties.results.map((property)=>(
                        <Col key={property.id} sm={12} md={6} lg={4} xl={4}><Property property={property}/></Col>
                    ))}
                    {status==="error" && <Col sm={12} md={6} lg={4} xl={3}>Network Error</Col>}
                    </Row>
                    <div className='text-center'>
                    {properties && properties.previous && <button onClick={()=>{setUrl(properties.previous.replace("http://127.0.0.1/", "/"))}}>Previous</button>} {properties && properties.next && <button onClick={()=>{setUrl(properties.next.replace("http://127.0.0.1/", "/"))}}>Next</button>}
                    </div>
                    </>
                }
            </Container>
        </>
    )
}

export default PropertiesPage;
