import mainPhoto from './K-035.png';
import photo1 from './s10.JPG';

function App() {
  return (
    <div>
      <img alt="main"
         src={mainPhoto}
         style={{width:'300px',border:'5px inset gray'}}/>
     <img alt="main"
         src={photo1}/>
      <h3>
        <b>스프링부트+리액트 프로젝트 배포 성공기원!!!</b>
        <h2>성공했어요 !!!!!</h2>
      </h3>
    </div>
  );
}

export default App;
