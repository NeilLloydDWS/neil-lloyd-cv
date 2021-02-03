import React from 'react'
import { Card, Col, Divider, Row } from 'antd'

const Travel = ({ travel }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Travel</h3>
    <Card>
      {travel.map((travel, i) => (<Row key={travel.year} className="text-lg">
        <Divider orientation="left" className={i === 0 && 'mt-0'}>
          {travel.year}
        </Divider>
        <Row className="text-lg" >
          <Col span={24}>{travel.description}</Col>


          {travel.countries.map((activity, i) => (
            <Col type="flex" justify="space-around" align="middle">
              <img
                src={`/companies/${activity.logo}`}
                alt={activity.place}
                className="max-w-3/4 inline"
                height={activity.logoHeight}
              />
              <p>{activity.place}</p>
            </Col>

           
          ))}


        </Row>

      </Row>))}

    </Card>
  </>
)

export default Travel
