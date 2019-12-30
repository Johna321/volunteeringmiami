import React, {Component} from 'react';
import Template from './template.jsx';
import './bizContactHub.css';


class bizContactHub extends Component{
    state={
        1: {
            expanded: false,
            name:'Mixological Inc',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '5728 cool guy street',
            volunteersNeeded: 'We need volunteers!',
            dailyServiceHours: '6 hours per day',
            totalProjectServiceHours: '72 hours',
            credentials: '2 Years of School at Wittenberg',
            gpa: '3.5',
            certficiation: 'Adobe Certification',
            talents: 'Skill and aspiration',
            languages: 'English, Esperanto',
            dressCode: 'Red shirt',
            anyFurtherSpecifications: 'Make sure to wear a red shirt'
        },
        2: {
            expanded: false,
            name:'Business Name 2',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: 'Please volunteer for us.',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        3: {
            expanded: false,
            name:'Business Name 3',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        4: {
            expanded: false,
            name:'Business Name 4',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        5: {
            expanded: false,
            name:'Business Name 5',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        6: {
            expanded: false,
            name:'Business Name 6',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        7: {
            expanded: false,
            name:'Business Name 7',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        },
        8: {
            expanded: false,
            name:'Business Name 8',
            photo: require('../mainpage/businessphotos/bizimage.jpg'),
            hours:'20 hours',
            summary:'Brief summary.',
            location: '',
            volunteersNeeded: '',
            dailyServiceHours: '',
            totalProjectServiceHours: '',
            credentials: '',
            gpa: '',
            certficiation: '',
            talents: '',
            languages: '',
            dressCode: '',
            anyFurtherSpecifications: ''
        }
    }
    render(){
        return(
            <div className="bigparent">
                <Template name={this.state[2].name} />
            </div>
        );
    }
}

export default bizContactHub;