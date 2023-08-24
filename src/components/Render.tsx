import { useState, ReactElement } from 'react';
import Form from './Form';
import { Service } from './Service';

function Render(): ReactElement {
  const [showForm, setShowForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  console.log('Services:', services);

  function toggleForm() {
    console.log('Toggling form visibility');
    setShowForm(true);
  }

  function handleAddService(newService: Service) {
    console.log('Adding service to state:', newService);
    setServices([...services, newService]);
    setShowForm(false);
    console.log('Updated services:', services);
  }

  return (
    <div>
      {showForm && (
        <Form addService={ () => handleAddService } />
      )}
      {services.length > 0 && (
        <div>
          <h2>Lista de serviços cadastrados</h2>
          {services.length > 0 && (
            <div>
              {/* <label htmlFor="hide-passwords">Esconder senhas</label>
              <input
                type="checkbox"
                id="hide-passwords"
                checked={ hidePasswords }
                onChange={ showPassword }
              />
              */}
            </div>
          )}
          {services.map((service) => (
            <div key={ service.handleservice }>
              <a href={ service.handleurl }>{ service.handleservice }</a>
              <p>
                Service:
                {' '}
                { service.handleservice }
              </p>
              <p>
                Login:
                {' '}
                { service.handlelogin }
              </p>
              <p>
                Password:
                {' '}
                { service.handlepassword }
              </p>
              <p>
                URL:
                {' '}
                { service.handleurl }
              </p>
            </div>
          ))}
        </div>
      )}
      {!showForm && (
        <button id="button" onClick={ toggleForm }>
          Cadastrar nova senha
        </button>
      )}
      {services.length === 0 && <h3>Nenhuma senha cadastrada</h3>}
    </div>
  );
}

export default Render;
