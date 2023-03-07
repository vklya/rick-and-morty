export default function CharacterCard({character}) {
    const { image, name, gender, status, species, origin, type } = character;
    return (
      <>
        <img src={image} title={name} />
        <h1>{name}</h1>
        <h2>Informations</h2>
        <ul>
          <li>
            <h3>Gender</h3>
            <p>{gender}</p>
          </li>
          <li>
            <h3>Status</h3>
            <p>{status}</p>
          </li>
          <li>
            <h3>Specie</h3>
            <p>{species}</p>
          </li>
          <li>
            <h3>Origin</h3>
            <p>{origin && origin.name}</p>
          </li>
          <li>
            <h3>Type</h3>
            <p>{type ? type : 'Unknown'}</p>
          </li>
        </ul>
      </>
    );
}