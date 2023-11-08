import PropTypes from 'prop-types';
import {Ul} from './CharacterGallery.styled'
const CharacterGallery = ({ items }) => {
  return (
    <>
      <Ul>
        {items.map(({ id, name, status, species, image }) => (
          <li key={id}>
            <div>
              <h2>{name}</h2>
              <p> Status: {status}</p>
              <p> Species: {species}</p>
              <img src={image} alt={name} />
            </div>
          </li>
        ))}
      </Ul>
    </>
  );
};

CharacterGallery.protTypes = {
    items: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired

    })
}

export default CharacterGallery ;
