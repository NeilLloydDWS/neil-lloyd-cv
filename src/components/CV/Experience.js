import React from 'react'
import { Card, Row, Col, Divider, Tag } from 'antd'

const Experience = ({ experience }) => (
  <>
    <h3 className="text-center mt-10 mb-5">Recent work projects</h3>
    <Card className="work-experience">
      {experience.map((item, i) => (
        <Row type="flex" justify="space-around" key={item.company.name}>
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {item.company.period}
          </Divider>
          <Col span={4} className="hide-mobile">
            {item.company.logo ? (
              <div>
                <img
                  src={`/companies/${item.company.logo}`}
                  alt={item.company.name}
                  className="max-w-3/4 inline"
                />
              </div>
            ) : (
                <h2 className="text-2xl">{item.company.name}</h2>
              )}
          </Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
            {item.projects.map((project, i) => (
              <Row type="flex" justify="space-around" key={project.name} className="mb-5">
                {project.logo && (
                  <Col span={5}>
                    <img
                      src={`/companies/${project.logo}`}
                      alt={project.name}
                      className="inline"
                      height={project.logoHeight}
                    />
                  </Col>
                )}
                <Col span={project.logo ? 19 : 24} className="text-lg">
                  <h2>{project.name}</h2>
                  <h3>{project.role}</h3>
                  <p>{project.description}</p>
                  {project.achievements && (
                    <ul>
                      {project.achievements.map(achievement => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                  <div className="py-1">
                    {project.stack.me &&
                      project.stack.me.map(tech => (
                        <Tag color="#0B9B00" key={tech} className="mb-1 text-base">
                          {tech}
                        </Tag>
                      ))}
                    {project.stack.all &&
                      project.stack.all.map(tech => (
                        <Tag color="#a2a2a2" key={tech} className="mb-1 text-base">
                          {tech}
                        </Tag>
                      ))}
                  </div>

                  {project.subprojects.map((subproject, x) => (
                    <><Divider />
                      <Row type="flex" key={project.name}>

                        <Col span={project.logo ? 19 : 24} className="text-lg">
                          <h3>{subproject.name}</h3>
                          <h4>{subproject.role}</h4>
                        </Col>

                      </Row>
                      <Row type="flex" key={project.name}>

                        {subproject.logo && (
                          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                            <div className="py-1">
                              {subproject.integrationLogos.map((logo, x) => (

                                <img
                                  src={`/companies/${logo.logo}`}
                                  alt={subproject.name}
                                  className="inline"
                                  height={logo.logoHeight}
                                />


                              ))}</div>
                          </Col>
                        )}
                      </Row>
                      <Row type="flex" key={project.name}>
                        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                          <p>{subproject.description}</p>
                          {subproject.achievements && (
                            <ul>
                              {subproject.achievements.map(achievement => (
                                <li key={achievement}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                          <div className="py-1">
                          {subproject.stack && (<h4>Main Aggregate Roots:</h4>)}
                            {subproject.stack &&
                              subproject.stack.map(tech => (
                                
                                <Tag color="#0B9B00" key={tech} className="mb-1 text-base">
                                  {tech}
                                </Tag>
                              ))}
                          </div><div className="py-1">
                            {/* {subproject.integrationLogos.map((logo, x) => (
                             <img
                             src={`/companies/${logo.logo}`}
                             alt={subproject.name}
                             className="inline"
                             height={logo.logoHeight}
                           />
                          ))} */}
                          </div>
                        </Col>
                      </Row>
                    </>
                  ))}
                </Col>

                {item.projects.length - 1 > i && <Divider />}
              </Row>
            ))}
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Experience
