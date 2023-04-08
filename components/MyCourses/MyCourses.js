import React from 'react'
import Link from "next/link";

class MyCourses extends React.Component {
    state = {
        paidCourse: []
    }

    async componentDidMount() {
        await this.setState({paidCourse: this.props.paidCourses})
        console.log( this.props.paidCourses)
    }

    render() {
        return (
            <div className="row">
                {this.props.paidCourses.map((course,index)=>
                    <div className="col-lg-4 col-md-4 courseTile" key={course.id}>

                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <Link href={`CourseDetails/${course.id}`}>
                                    <div align="center" className="display-inline">
                                        <img src={course.imageUrl} alt={"."}
                                             className="blur-img"
                                        />
                                        <img src={course.imageUrl} alt={"."}
                                             className="slideshow-pro-image shadow"
                                        />
                                    </div>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">{course.fee}</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image"/>
                                    <span>{course.teacher.name}</span>
                                </div>

                                <h3>
                                    <Link href={`CourseDetails/${course.id}`} >
                                        <a>{course.name}
                                        </a>
                                    </Link>
                                </h3>

                                {/*<p style={{textOverflow:'ellipsis',overflow: "hidden",whiteSpace:'nowrap'}}>{course.description} </p>*/}
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 145 Students
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                )}


            </div>
        );
    }
}

export default MyCourses;