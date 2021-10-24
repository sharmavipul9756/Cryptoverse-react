import React, {useState} from 'react'
import {millify} from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'
import {useGetCryptosQuery} from '../Services/cryptoApi';
const Cryptocurrencies = () => {
    // const count = simplified ? 10 : 100;
    const {data : cryptoList, isFetching} = useGetCryptosQuery(); 
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    console.log(cryptoList);
    return (
        <>
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos.map((crypto)=>{
                    return (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
                            <Link to={`/crypto/${crypto.id}`}>
                                <Card title={`${crypto.rank}. ${crypto.name}`}
                                extra={<img className="crypto-image"
                                src={crypto.iconUrl}/>}
                                hoverable
                                >
                                    <p>Price : {millify(crypto.price)}</p>
                                    <p>Price : {millify(crypto.marketCap)}</p>
                                    <p>Price : {millify(crypto.change)}%</p>

                                </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Cryptocurrencies
