import './projectInfo.scss';
import { useSelector } from 'react-redux';
import { selectCurrentProject } from '../../../redux/selectors/projectsSelectors';
import { projectTypes } from '../../../constants/projectsConstants';
import { formatCurrency } from '../../../helpers/utils';

const ProjectInfo = () => {
  const project = useSelector(selectCurrentProject);

  const name = project?.name || '';
  const type = projectTypes[project?.type] || {};
  const city = project?.location?.name || '';
  const address = project?.address || '';
  const price = project?.price || 0;
  const builtArea = project?.builtArea || 0;
  const privateArea = project?.privateArea || 0;
  const bathrooms = project?.bathrooms || 0;

  return (
    <div className='project-info'>
      <div className='project-info__content'>
        <div className='project-info__type'>
          <div style={{ backgroundColor: type.color }}>
            <i className={`fa ${type.icon} fa-2x`} />
          </div>
          <p>{type.value}</p>
        </div>
        <p>
          <b>Nombre: </b>
          {name}
        </p>
        <p>
          <b>Ubicación: </b>
          {city} - {address}
        </p>
        <p>
          <b>Precio: </b>${formatCurrency(price)}
        </p>
        <p>
          <b>Área construida: </b>
          {builtArea} m<sup>2</sup>
        </p>
        <p>
          <b>Área privada: </b>
          {privateArea} m<sup>2</sup>
        </p>
        <p>
          <b>Número de baños: </b>
          {bathrooms}
        </p>
      </div>
      <div>
        <img alt={name} src={project?.cover} />
        <div className='project-info__row'>
          <div>
            <i className='fal fa-arrows fa-2x' />
            <p>
              {builtArea} m<sup>2</sup>
            </p>
          </div>
          <div>
            <i className='fal fa-car fa-2x' />
            <p>{project?.hasParking ? 'Incluido' : 'No incluido'}</p>
          </div>
          <div>
            <i className='fal fa-sack fa-2x' />
            <p>{project?.hasVis ? 'Aplica subsidio' : 'No aplica subsidio'}</p>
          </div>
          <div>
            <i className='fal fa-toilet fa-2x' />
            <p>{bathrooms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;