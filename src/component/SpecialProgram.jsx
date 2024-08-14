import BuildIcon from '@mui/icons-material/Build';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import "../styles/specialProgStyles.css"

const SpecialPrograms = () => {
  return (
    <div className="special-programs-container">
      <h2 className="section-title">Special Programs</h2>

      <div className="program-cards">
        {/* Job Training and Employment Services */}
        <div className="program-card">
          <div className="program-icon">
            <BuildIcon style={{ fontSize: 40, color: '#8B4513' }} />
          </div>
          <h3 className="program-title">Job Training and Employment Services</h3>
          <p className="program-description">
            We empower individuals with disabilities to achieve their full potential in the workplace. Our services include:
          </p>
          <ul className="program-list">
            <li>Vocational Training: Customized programs focusing on specific job skills.</li>
            <li>Job Placement: Assistance with finding suitable job opportunities.</li>
            <li>Supported Employment: Ongoing support for employees and employers.</li>
          </ul>
        </div>

        {/* Independent Living Programs */}
        <div className="program-card">
          <div className="program-icon">
            <LightbulbOutlinedIcon style={{ fontSize: 40, color: '#8B4513' }} className='icon'/>
          </div>
          <h3 className="program-title">Independent Living Programs</h3>
          <p className="program-description">
            Our programs help individuals with disabilities lead fulfilling lives through:
          </p>
          <ul className="program-list">
            <li>Skills Training: Workshops on essential life skills.</li>
            <li>Budgeting Assistance: Financial literacy programs.</li>
            <li>Home Modification Services: Adapting living spaces for safety and accessibility.</li>
          </ul>
        </div>

        {/* Family and Caregiver Support */}
        <div className="program-card">
          <div className="program-icon">
            <FavoriteBorderIcon style={{ fontSize: 40, color: '#8B4513' }} />
          </div>
          <h3 className="program-title">Family and Caregiver Support</h3>
          <p className="program-description">
            We offer resources to make the caregiving journey easier for families and caregivers:
          </p>
          <ul className="program-list">
            <li>Counseling Services: Professional counseling for managing stress and emotions.</li>
            <li>Respite Care: Temporary relief for primary caregivers.</li>
            <li>Support Groups: Regular meetings for sharing experiences and building a support network.</li>
          </ul>
        </div>

        {/* Additional Program */}
        <div className="program-card">
          <div className="program-icon">
            <PersonOutlineIcon style={{ fontSize: 40, color: '#8B4513' }} />
          </div>
          <h3 className="program-title">Assistive Technology Services</h3>
          <p className="program-description">
            We provide access to the latest assistive technologies to enhance the independence and quality of life for individuals with disabilities:
          </p>
          <ul className="program-list">
            <li>Technology Assessments: Evaluating individual needs and recommending suitable devices.</li>
            <li>Device Training: Ensuring users are confident in using assistive technologies.</li>
            <li>Maintenance Support: Ongoing support to keep devices functioning effectively.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialPrograms;
