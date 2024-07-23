import mainPhoto from './K-035.png';

function App() {
  return (
    <div>
      <img alt="main"
         src={mainPhoto}
         style={{width:'300px',border:'5px inset gray'}}/>
      <h3>
        <b>스프링부트+리액트 프로젝트 배포 성공기원!!!</b>
      </h3>
    </div>
  );
}

export default App;
