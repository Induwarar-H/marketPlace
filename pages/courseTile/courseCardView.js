import React from 'react'
import Link from "next/link";
import * as courseService from '../../services/course'
import Router, { withRouter } from 'next/router'

class courseCardView extends React.Component {
    state = {
        course: []
    };

    async componentDidMount() {
        await this.fetchCourse();
    }

    fetchCourse = async () => {
        await courseService.loadAllCourses().then(res => {
            if (res.success) {
                this.setState({course: res.body})
            }
        }).catch(err => {
            console.log(err)
        })
    };

    selectCourseView = () => {
        console.log('select course')
        this.context.router.transitionTo('/single-courses-1');
        // router.push('/single-courses-1');
    };
    navigateToSelectedCourse = (id)=>{
        console.log(id)
        Router.push(`/courseTile/${id}`)
    }

    render() {

        return (
            <div className="row">

                {this.state.course.map((course, index) => {
                    return <div className="col-lg-4 col-md-6 courseTile" key={course.id}>

                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <div onClick={()=>{this.navigateToSelectedCourse(course.id)}} >
                                    <div align="center" className="display-inline">
                                        <img src={course.imageUrl} alt={"."}
                                             className="blur-img"
                                        />
                                        <img src={course.imageUrl} alt={"."}
                                             className="slideshow-pro-image shadow"
                                        />
                                    </div>
                                </div>
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
                                    <div onClick={()=>{this.navigateToSelectedCourse(course.id)}} >
                                        <a>{course.name}
                                        </a>
                                    </div>
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
                })}

            </div>
        )
    }
}

export default courseCardView

