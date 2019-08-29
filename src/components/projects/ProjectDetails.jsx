import React from 'react';

const ProjectDetails = props => {
  console.log(props.match.params.id);
  const id = props.match.params.id;

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            qui provident dolorum, nemo asperiores, suscipit beatae sint enim
            culpa unde facilis dicta repellat laudantium ipsam ducimus facere
            incidunt ullam ex.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Ian Figuer</div>
          <div>28th Agust, 10am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
