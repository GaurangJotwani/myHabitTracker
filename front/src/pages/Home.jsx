import { SingleDonut } from './SingleDonut';

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5" style={{ marginRight: '120px' }}>
          <SingleDonut titleText="Laughing" />
        </div>
        <div className="col-md-5">
          <SingleDonut titleText="Reading" />
        </div>
      </div>
    </div>
  );
};
