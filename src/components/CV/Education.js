import React from 'react'
import { Card, Row, Col, Divider } from 'antd'

const Education = ({ education }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Education</h3>
    <Card className="education">
      {education.map((institution, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Col span={4}>
          <img
                src={`/people/${institution.logo}`}
                alt={institution.place}
                className="max-w-3/4 inline"
                height={institution.logoHeight}
              />
          </Col>
          <Col span={12}>
            <h3>{institution.place}</h3>
          </Col>
          <Col span={8}>
            <h3>{institution.degree}</h3>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Education
