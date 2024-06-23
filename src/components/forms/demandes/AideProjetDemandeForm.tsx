import React from 'react';
import { AideProjetDemande } from '../../../types/demandeTypes';

const AideProjetDemandeForm: React.FC<{ onChange: (data: AideProjetDemande) => void }> = ({ onChange }) => {
  const [data, setData] = React.useState<AideProjetDemande>({
    titre: '',
    descriptionProjet: '',
    budget: 0,
    deadline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    onChange({ ...data, [name]: value });
  };

  return (
    <>
      <label>
        Titre:
        <input type="text" name="titre" value={data.titre} onChange={handleInputChange} required />
      </label>
      <label>
        Description du projet:
        <textarea name="descriptionProjet" value={data.descriptionProjet} onChange={handleInputChange} required />
      </label>
      <label>
        Budget:
        <input type="number" name="budget" value={data.budget} onChange={handleInputChange} />
      </label>
      <label>
        Deadline:
        <input type="datetime-local" name="deadline" value={data.deadline} onChange={handleInputChange} />
      </label>
    </>
  );
};

export default AideProjetDemandeForm;
